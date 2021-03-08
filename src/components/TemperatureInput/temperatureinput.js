import React from "react";

const tempScales = {
  c: "Celsius",
  f: "Fahrenheit",
};

function TemperatureInput({ scale }) {
  return (
    <div>
      <fieldset>
        <h4>Enter Temperature in: {tempScales[scale]}</h4>
        <input type="text" />
      </fieldset>
    </div>
  );
}

export default TemperatureInput;
