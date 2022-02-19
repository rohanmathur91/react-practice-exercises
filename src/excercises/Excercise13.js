import { useState } from "react";

export const Excercise13 = () => {
  const data = [
    { item: "item1", outOfStock: false },
    { item: "item2", outOfStock: true },
    { item: "item3", outOfStock: false },
    { item: "item4", outOfStock: true },
    { item: "item5", outOfStock: false }
  ];

  return (
    <div>
      <h2>ex13: out of stock (grey)</h2>
      {data.map(({ item, outOfStock }) => {
        return (
          <p style={{ background: outOfStock ? "gray" : "white" }}>{item}</p>
        );
      })}
    </div>
  );
};
