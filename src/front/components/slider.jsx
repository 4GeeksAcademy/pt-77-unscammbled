import React, { useState, useEffect } from "react";
import "../slider.css";

const Slider = ({max }) => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (e) => {
    setValue(e.target.value);       
  };

  // useEffect(()=> {
  //   setReturnValue(value) //also update the useEffect where the slider is being callsed
  // }, [value])

  const bulletLeft = (value / max) * 578;

  return (
    <div className="container">
      <div className="range-slider">
        <span
          className="rs-label"
          style={{ left: `${bulletLeft}px` }}
        >
          {value}
        </span>
        <input
          className="rs-range"
          type="range"
          min="0"
          max={max}
          value={value}
          onChange={handleSliderChange}
        />
      </div>

      <div className="box-minmax">
        <span>0</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default Slider;
