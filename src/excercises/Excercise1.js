import { useState } from "react";

export const Excercise1 = () => {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(e.target.value.split("").length);
  };

  return (
    <div>
      <h2>ex1: character counter (Twitter)</h2>
      <p style={{ background: count > 20 ? "red" : "" }}>
        Character count: {count} / 20
      </p>
      <textarea
        onChange={handleChange}
        rows="8"
        cols="40"
        placeholder="What's happening?"
      ></textarea>
    </div>
  );
};
