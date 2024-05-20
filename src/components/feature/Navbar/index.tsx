import React, { useState, ChangeEvent, MouseEvent } from "react";
import "./index.scss";

interface NavbarProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setTemperatureUnit: React.Dispatch<
    React.SetStateAction<"celsius" | "fahrenheit">
  >;
  temperatureUnit: any;
}

const Navbar: React.FC<NavbarProps> = ({
  setCity,
  setTemperatureUnit,
  temperatureUnit,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = (e: MouseEvent<HTMLButtonElement>) => {
    setCity(inputValue);
  };

  const handleTemperatureChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTemperatureUnit(e.target.id as "celsius" | "fahrenheit");
  };

  return (
    <div className="nav">
      <div className="nav-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleCityChange}
          placeholder="Search City"
        />
        <button onClick={handleSearchClick}>Search City</button>
      </div>
      <div className="inputBox">
        <div className="temperature">
          <input
            type="radio"
            id="celsius"
            name="weather"
            onChange={handleTemperatureChange}
            checked={temperatureUnit === "celsius"}
          />
          <label htmlFor="celsius">°C</label>
        </div>
        <div className="temperature">
          <input
            type="radio"
            id="fahrenheit"
            name="weather"
            onChange={handleTemperatureChange}
            checked={temperatureUnit === "fahrenheit"}
          />
          <label htmlFor="fahrenheit">°F</label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
