import React from "react";
import {
  useCurrentWeatherQuery,
  useDailyWeatherQuery,
} from "../../../store/weather/operations";
import { fahrenheitToCelsius } from "../../../helpers/fahrenheit";
import sun from "../../../assets/images/sun_logo.png";
import little_sun from "../../../assets/images/little_sun.png";

import "./index.scss";

interface WeatherComponentProps {
  city: string;
  temperatureUnit: string;
}

const Weather: React.FC<WeatherComponentProps> = ({
  city,
  temperatureUnit,
}) => {
  const { data, error, isLoading } = useCurrentWeatherQuery(city);
  const { data: newData } = useDailyWeatherQuery(city);

  return (
    <div className="weatherContainer">
      <div className="main_data">
        <h1>{data?.name}</h1>
        <div className="weatherBox">
          <p>
            {temperatureUnit === "celsius"
              ? Math.trunc(fahrenheitToCelsius(data?.main.feels_like || 0))
              : data?.main.feels_like}
          </p>
          {temperatureUnit === "celsius" ? "°C" : "°F"}
        </div>
        <img src={sun} alt="" width={150} />
        <p>{data?.weather[0].main}</p>
      </div>

      {
        <div className="all_day_wheater">
          {newData?.list.slice(0, 6).map((item: any, key: any) => {
            const dateTimeParts = item.dt_txt.split(" ");
            const timePart = dateTimeParts[1];
            return (
              <div key={key}>
                <div className="dayWeather">
                  <p>{timePart}</p>
                  <p className="celsius">
                    {temperatureUnit === "celsius"
                      ? Math.trunc(fahrenheitToCelsius(item?.main.temp || 0))
                      : Math.trunc(item?.main.temp)}
                    {temperatureUnit === "celsius" ? "°C" : "°F"}
                    <img src={little_sun} alt="" />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default Weather;
