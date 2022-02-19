import { useState } from "react";

export const Excercise6 = () => {
  const [size, setSize] = useState(16);
  const [{ font, heading, text }, setFont] = useState({
    font: "sans-serif",
    heading: "Nunito",
    text: "sans-serif"
  });

  const fontSuggestion = [
    {
      font: "sans-serif",
      heading: "Nunito",
      text: "sans-serif"
    },
    {
      font: "Nunito",
      heading: "Nunito",
      text: "Roboto"
    },
    {
      font: "Open Sans",
      heading: "Poppins",
      text: "Open Sans"
    },
    {
      font: "Poppins",
      heading: "Poppins",
      text: "Nunito"
    },
    {
      font: "Roboto",
      heading: "Poppins",
      text: "Roboto"
    }
  ];

  const handleIncrement = () => setSize((size) => size + 8);
  const handledecrement = () => setSize((size) => size - 8);

  const handleFontSizeChange = (e) => setSize(e.target.value);

  const handleFontChange = (e) => {
    const currFont = e.target.value;
    setFont(
      fontSuggestion.reduce(
        (acc, obj) => (obj.font === currFont ? obj : acc),
        {}
      )
    );
  };

  return (
    <div>
      <h2>ex6: designer tool (mini figma)</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handledecrement}>-</button>
      <br />
      <br />

      <label for="font-size">font size</label>
      <select value={size} onChange={handleFontSizeChange} id="font-size">
        <option value="8">8px</option>
        <option value="16">16px</option>
        <option value="24">24px</option>
        <option value="32">32px</option>
        <option value="64">64px</option>
      </select>
      <br />
      <br />

      <label for="font-family">font-family</label>
      <select value={font} onChange={handleFontChange} id="font-family">
        <option value="sans-serif">Sans-Serif</option>
        <option value="Nunito">Nunito</option>
        <option value="Open Sans">Open Sans</option>
        <option value="Poppins">Poppins</option>
        <option value="Roboto">Roboto</option>
      </select>
      <br />
      <br />

      <label for="font-family">Fonts good for heading</label>
      <select value={font} onChange={handleFontChange} id="font-family">
        <option value="Open Sans">Open Sans</option>
        <option value="Poppins">Poppins</option>
        <option value="Roboto">Roboto</option>
      </select>
      <br />
      <br />

      <label for="font-family">Fonts good for text</label>
      <select value={font} onChange={handleFontChange} id="font-family">
        <option value="sans-serif">Sans-Serif</option>
        <option value="Open Sans">Open Sans</option>
        <option value="Roboto">Roboto</option>
      </select>
      <br />
      <br />

      <p style={{ fontSize: `${size}px`, fontFamily: `${font}` }}>
        Hello smalll figma here
      </p>

      {/* copy css */}
      <div>
        <h4>copy CSS:</h4>
        <p>font-size: {size};</p>
        <p>
          font-family: {font === "sans-serif" ? font : `'${font}', sans-serif`};
        </p>
      </div>

      {/* suggestion */}
      <div>
        <h4>Suggestion:</h4>
        <p>For heading use: {heading}</p>
        <p>For text use: {text}</p>
      </div>
    </div>
  );
};
