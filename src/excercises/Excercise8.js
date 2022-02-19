import { useState } from "react";

const Home = () => {
  return (
    <div>
      <h2>Home component</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About component</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h2>Profile component</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
    </div>
  );
};

export const Excercise8 = () => {
  const [route, setRoute] = useState("home");

  return (
    <div>
      <h2>ex8: switch tabs</h2>
      <button onClick={() => setRoute("home")}>Home</button>
      <button onClick={() => setRoute("about")}>About</button>
      <button onClick={() => setRoute("profile")}>Profile</button>

      {route === "home" && <Home />}
      {route === "about" && <About />}
      {route === "profile" && <Profile />}
    </div>
  );
};
