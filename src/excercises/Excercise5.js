import { useState } from "react";

export const Excercise5 = () => {
  const [showPassword, setPassword] = useState(false);

  const handeSubmit = (e) => {
    e.preventDefault();
    setPassword((showPassword) => !showPassword);
  };

  return (
    <div>
      <h2>ex5: show password</h2>
      <form onSubmit={handeSubmit}>
        <input type={showPassword ? "text" : "password"} />
        <button>{showPassword ? "hide password" : "show password"}</button>
      </form>
    </div>
  );
};
