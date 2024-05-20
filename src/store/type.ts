export interface WeatherData {
  weather: Array<{
    description: string;
    icon: string;
    main: string;
  }>;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  name: string;
  city: string;
  dailyWeather: string;
  list: Array<{}>;
}
