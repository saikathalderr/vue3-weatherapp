export interface IAirPollution {
  coord: ICoord;
  list: IList[];
}

export interface ICoord {
  lon: number;
  lat: number;
}

export interface IList {
  main: IMain;
  components: IComponents;
  dt: number;
}

export interface IMain {
  aqi: number;
}

export interface IComponents {
  co: number;
  no: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  nh3: number;
}
