import { useState } from "react";
import TemperatureInput from "./components/TemperatureInput/temperatureinput";

function App() {
  const [scale, setScale] = useState("c");
  const [temp, setTemp] = useState("");

  const handleCelsiusChange = temp => {
    setScale("c");
    setTemp(temp);
  };

  const handleFahrenheitChange = temp => {
    setScale("f");
    setTemp(temp);
  };

  return (
    <div>
      <TemperatureInput
        scale="c"
        temp={temp}
        handleTempChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temp={temp}
        handleTempChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default App;
