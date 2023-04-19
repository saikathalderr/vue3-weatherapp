export interface IWeather {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: ICurrent;
  minutely: IMinutely[];
  hourly: IHourly[];
  daily: IDaily[];
}

export interface ICurrent {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: IWeatherTwo[];
}

export interface IMinutely {
  dt: number;
  precipitation: number;
}

export interface IHourly {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: IWeatherTwo[];
  pop: number;
  rain?: IRain;
}

export interface IWeatherTwo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IRain {
  '1h': number;
}

export interface IDaily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: ITemp;
  feels_like: IFeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: IWeatherTwo[];
  clouds: number;
  pop: number;
  rain?: number;
  uvi: number;
}

export interface ITemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface IFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
