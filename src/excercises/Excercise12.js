import { useState } from "react";

const data = [
  { item: "item1", like: false },
  { item: "item2", like: false },
  { item: "item3", like: false },
  { item: "item4", like: false },
  { item: "item5", like: false }
];

export const Excercise12 = () => {
  const [list, setList] = useState(data);

  const handleLikeClick = (idx) => {
    const updateList = list.map((obj, index) =>
      idx === index ? { ...obj, like: !obj.like } : obj
    );
    setList(updateList);
  };

  return (
    <div>
      <h2>ex12: like in a list</h2>

      {list.map(({ item, like }, index) => {
        return (
          <div>
            <span>{item}</span>
            <button onClick={() => handleLikeClick(index)}>
              {like ? "unlike" : "like"}
            </button>
          </div>
        );
      })}
    </div>
  );
};
