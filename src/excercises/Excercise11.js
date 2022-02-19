import { useState } from "react";

export const Excercise11 = () => {
  const [mode, setMode] = useState(false);

  return (
    <div>
      <h2>ex11: dark mode</h2>
      <button onClick={() => setMode(!mode)}>toggle mode</button>
      <div className={mode ? "dark" : "light"}>
        <p>
          Your event handlers will be passed instances of SyntheticEvent, a
          cross-browser wrapper around the browser’s native event.
        </p>
      </div>
    </div>
  );
};
