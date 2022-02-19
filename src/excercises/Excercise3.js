import { useState } from "react";

export const Excercise3 = () => {
  const [error, setError] = useState(false);

  const handlePasswordChange = (e) => {
    const currPwd = e.target.value;

    if (/^[0-9]*$/.test(currPwd) && !/^[A-Za-z]/.test(currPwd)) {
      setError(true);
    } else if (/^[0-9A-Za-z]/.test(currPwd)) {
      setError(false);
    }
  };

  return (
    <div>
      <h2>ex3: alphanumeric password</h2>
      <label htmlFor="pwd">Password </label>
      <input onChange={handlePasswordChange} type="text" id="pwd" />
      {error && <p>Error, no character 🙁</p>}
    </div>
  );
};
