import { useState } from "react";

export const Excercise7 = () => {
  const [cart, setCart] = useState([]);

  const arrayOfItems = [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
    { name: "item5" }
  ];

  const handleClick = (item) => {
    // check is item exist in cart or not
    const check = cart.some(({ name }) => name === item.name);

    // approach - 1
    // if (check) {
    //   const updatedCart = cart.map((obj) =>
    //     obj.name === item.name ? { ...obj, count: obj.count + 1 } : obj
    //   );
    //   setCart(updatedCart);
    // } else {
    //   setCart([{ ...item, count: 1 }, ...cart]);
    // }

    // more cleaner way
    const updatedCart = (cart) =>
      cart.map((obj) =>
        obj.name === item.name ? { ...obj, count: obj.count + 1 } : obj
      );

    check
      ? setCart((cart) => updatedCart(cart))
      : setCart([{ ...item, count: 1 }, ...cart]);
  };

  const cartTotal = (cart) => cart.reduce((acc, { count }) => acc + count, 0);

  return (
    <div>
      <h2>ex7: add to cart</h2>
      {arrayOfItems.map((obj) => {
        return (
          <p>
            {obj.name}
            <button onClick={() => handleClick(obj)}>Add to cart</button>
          </p>
        );
      })}

      <h3>Cart: {cartTotal(cart)}</h3>
      {cart.length > 0 &&
        cart.map(({ name, count }) => (
          <p>
            {name} -- quantity({count})
          </p>
        ))}
    </div>
  );
};
