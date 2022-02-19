import { useState } from "react";

export const Excercise4 = () => {
  const [password, setPassword] = useState("");
  const userPassword = "test@123";

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = () => console.log(password);

  return (
    <div>
      <h2>ex4: disable submit</h2>
      <input
        value={password}
        onChange={handlePasswordChange}
        type="text"
        id="pwd-1"
      />
      <button disabled={password !== userPassword} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
