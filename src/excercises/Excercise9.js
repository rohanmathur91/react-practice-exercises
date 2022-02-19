import { useState } from "react";

const Toast = ({ type, message, setToast }) => {
  return (
    <div className={`toast ${type}`}>
      <p>{message}</p>
      <button onClick={() => setToast(false)}>X</button>
    </div>
  );
};

export const Excercise9 = () => {
  const [toast, setToast] = useState(false);

  return (
    <div>
      <h2>ex9: toast</h2>
      {toast && (
        <Toast
          setToast={setToast}
          type={"success"}
          message={"This is a toast"}
        />
      )}
      <button onClick={() => setToast(true)}>Show toast</button>
    </div>
  );
};
