import React, { useState } from "react";
import "./App.scss";
import Weather from "./components/feature/Weather";
import Navbar from "./components/feature/Navbar";
import WeekWeathers from "./components/feature/SelectWeather";

function App() {
  const [city, setCity] = useState<string>("Yerevan");
  const [temperatureUnit, setTemperatureUnit] = useState<
    "celsius" | "fahrenheit"
  >("celsius");

  return (
    <React.Fragment>
      <Navbar
        setCity={setCity}
        setTemperatureUnit={setTemperatureUnit}
        temperatureUnit={temperatureUnit}
      />
      <Weather city={city} temperatureUnit={temperatureUnit} />
      <WeekWeathers city={city} temperatureUnit={temperatureUnit} />
    </React.Fragment>
  );
}

export default App;
