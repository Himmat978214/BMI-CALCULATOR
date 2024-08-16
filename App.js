import { useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [Height, setHeight] = useState(180);
  const [Weight, setWeight] = useState(70);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const BMI = (Weight / ((Height / 100) * (Height / 100))).toFixed(2);
    return BMI;
  }, [Weight, Height]);

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="inputSection">
        <p className="slider-output">Weight: {Weight} KG</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="0"
          max="200"
          onChange={onWeightChange}
        />
        <p className="slider-output">
          Height:
          {Height}{" "}
        </p>
        <input
          className="input-slider"
          type="range"
          onChange={onHightChange}
          min="140"
          max="220"
        />
      </div>
      <div className="ourput-sec">
        <p> Your BMI is </p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default App;
