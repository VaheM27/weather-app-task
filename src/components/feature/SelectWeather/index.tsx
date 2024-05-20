import React from "react";
import { useDailyWeatherQuery } from "../../../store/weather/operations";
import { fahrenheitToCelsius } from "../../../helpers/fahrenheit";
import little_sun from "../../../assets/images/little_sun.png";

import "./index.scss";

interface WeatherComponentProps {
  city: string;
  temperatureUnit: string;
}

const WeekWeathers: React.FC<WeatherComponentProps> = ({
  city,
  temperatureUnit,
}) => {
  const { data } = useDailyWeatherQuery(city);

  const getWeeklyData = () => {
    if (!data) return [];

    const weeklyDataMap = new Map();
    data.list.forEach((item: any) => {
      const date = item.dt_txt.slice(0, 10);
      weeklyDataMap.set(date, item);
    });

    const weeklyData = Array.from(weeklyDataMap.values());
    return weeklyData.slice(0, 5);
  };

  const weeklyData = getWeeklyData();

  return (
    <div className="week-weather-cont">
      <div className="all_day_wheater">
        {weeklyData.map((item: any, key: any) => {
          const slicedDtTxt = item.dt_txt.slice(5, 10);

          return (
            <div key={key}>
              <div className="dayWeather">
                <p>{slicedDtTxt}</p>
                <p className="percent">
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
    </div>
  );
};

export default WeekWeathers;
