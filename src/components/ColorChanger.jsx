import React, { useCallback, useEffect, useRef, useState } from "react";
import "./ColorChanger.css";

const ColorChanger = () => {
  const [color, setColor] = useState("gray");

  useEffect(() => {
    alert("Welcome to React Color Changer");
  }, []);

  //   const btnRed = () => {
  //     setColor("red");
  //   };

  const btnBlue = () => {
    setColor("blue");
  };

  const btnPurple = () => {
    setColor("purple");
  };

  const btnYellow = () => {
    setColor("yellow");
  };

  const btnBrown = () => {
    setColor("brown");
  };
  return (
    <section id="main-section" style={{ backgroundColor: color }}>
      <div className="container">
        <div className="btn-wrapper">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="btn red"
          >
            Red
          </button>
          <button onClick={btnBlue} className="btn blue">
            Blue
          </button>
          <button onClick={btnPurple} className="btn purple">
            Purple
          </button>
          <button onClick={btnYellow} className="btn yellow">
            Yellow
          </button>
          <button onClick={btnBrown} className="btn brown">
            Brown
          </button>
        </div>

        <div className="color-display">
          <h1 className="main-title">{color}</h1>
        </div>
      </div>
    </section>
  );
};

export default ColorChanger;
