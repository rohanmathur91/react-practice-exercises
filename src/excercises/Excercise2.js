import { useState } from "react";

export const Excercise2 = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPwdChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div>
      <h2>ex2: password match</h2>
      <label htmlFor="pwd-1">Password </label>
      <input
        value={password}
        onChange={handlePasswordChange}
        type="text"
        id="pwd-1"
      />
      <br />
      <label htmlFor="pwd-2">Confirm Password </label>
      <input
        value={confirmPassword}
        onChange={handleConfirmPwdChange}
        type="text"
        id="pwd-2"
      />

      <div>
        {confirmPassword.length > 0 &&
          password.length !== confirmPassword.length &&
          "Error wrong password 🤨"}
      </div>
    </div>
  );
};
