import TemperatureInput from "./components/TemperatureInput/temperatureinput";

function App() {
  return (
    <div>
      <TemperatureInput scale="c" />
      <TemperatureInput scale="f" />
    </div>
  );
}

export default App;
