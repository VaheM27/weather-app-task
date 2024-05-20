import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherData } from "../type";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (build) => ({
    currentWeather: build.query<WeatherData, string>({
      query: (city) =>
        `weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`,
    }),
    dailyWeather: build.query<WeatherData, string>({
      query: (city) =>
        `forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});

export const { useCurrentWeatherQuery, useDailyWeatherQuery } = weatherApi;
