import { useState } from "react";

export const Excercise10 = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => setTodo(e.target.value);

  const handleItemClick = (clickedIndex) => {
    const updatedList = todoList.map((obj, currIndex) =>
      clickedIndex === currIndex ? { ...obj, done: !obj.done } : obj
    );

    setTodoList(updatedList);
  };

  const handleAddClick = () => {
    const currTodo = todo;
    setTodo((todo) => "");
    setTodoList((todoList) => [{ item: currTodo, done: false }, ...todoList]);
  };

  return (
    <div>
      <h2>ex10: todo/strikethrough</h2>
      <input value={todo} onChange={handleChange} type="text" />
      <button onClick={handleAddClick}>Add to todos</button>
      {todoList.map(({ item, done }, index) => {
        return (
          <p
            key={index}
            style={{
              background: "#ccfbf1",
              textDecoration: done ? "line-through" : "none"
            }}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};
