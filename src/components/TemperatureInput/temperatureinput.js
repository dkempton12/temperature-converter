import React from "react";

const tempScales = {
  c: "Celsius",
  f: "Fahrenheit",
};

function TemperatureInput({ scale, temp, handleTempChange }) {
  const handleInputChange = event => {
    handleTempChange(event.target.value);
  };

  return (
    <div>
      <fieldset>
        <h4>Enter Temperature in: {tempScales[scale]}</h4>
        <input type="text" onChange={handleInputChange} />
      </fieldset>
    </div>
  );
}

export default TemperatureInput;
