import axios from 'axios';
import { defineStore } from 'pinia';

import { getCacheKey, isCached, setCache } from '../helper/cache.helper';
import { IAirPollution } from '../interface/airpollution.interface';
import { ICity } from '../interface/city.interface';
import { IDaily, IWeather } from '../interface/weather.interface';

// we can store it to CI variable, for this development i'm storing it here so you guys can check the app in action
const APIkey = '3706954fdc9467eb5648eb5c31f288cd';

export interface IWeatherStore {
  loadingWeatherData: boolean;
  loadingAirPollutionData: boolean;
  weatherData: IWeather | null;
  airPollution: IAirPollution | null;
  searchedCity: string | '';
}

export const useWeatherStore = defineStore('weather', {
  state: (): IWeatherStore => ({
    loadingWeatherData: false,
    loadingAirPollutionData: false,
    weatherData: null,
    airPollution: null,
    searchedCity: 'Live',
  }),
  getters: {
    getLoadingWeatherData: (state: IWeatherStore): boolean => state.loadingWeatherData,
    getLoadingAirPollutionData: (state: IWeatherStore): boolean =>
      state.loadingAirPollutionData,
    getSearchedCity: (state: IWeatherStore): string => state.searchedCity,

    getCurrentTemperature: (state: IWeatherStore): number =>
      state.weatherData?.current?.temp || 0,
    getCurrentFeelLike: (state: IWeatherStore): number =>
      state.weatherData?.current?.feels_like || 0,

    getCurrentPressure: (state: IWeatherStore): number =>
      state.weatherData?.current?.pressure || 0,

    getCurrentVisibility: (state: IWeatherStore): number =>
      state.weatherData?.current?.visibility || 0,

    getCurrentHumidity: (state: IWeatherStore): number =>
      state.weatherData?.current?.humidity || 0,

    getCurrentCondition: (state: IWeatherStore): string =>
      state.weatherData?.current?.weather[0]?.main || '',

    getCurrentUvi: (state: IWeatherStore): number => state.weatherData?.current?.uvi || 0,

    getNextThreeDaysWeather: (state: IWeatherStore): IDaily[] =>
      state.weatherData?.daily?.slice(0, 3) || [],
    getNextEightDaysWeather: (state: IWeatherStore): IDaily[] =>
      state.weatherData?.daily || [],

    getTomorrowWeather: (state: IWeatherStore): IDaily | undefined =>
      state.weatherData?.daily[0],

    getCurrentAirPollutionAqi: (state: IWeatherStore): number =>
      state?.airPollution?.list[0]?.main?.aqi || 0,

    getCurrentWindAngle: (state: IWeatherStore): number =>
      state?.weatherData?.current?.wind_deg || 0,
  },
  actions: {
    async fetchLocationWeatherData({ lat, lon }: { lat: number; lon: number }) {
      this.loadingWeatherData = true;
      const key = 'weather-data';
      const cacheKey = getCacheKey({ lat, lon, key });
      const cacheData = isCached({ key: cacheKey });
      if (cacheData) {
        this.weatherData = cacheData;
        this.loadingWeatherData = false;
        return cacheData;
      }
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
      );
      setCache({ key: cacheKey, value: data });
      this.weatherData = data;
      this.loadingWeatherData = false;
      return data;
    },
    async fetchLocationAirPollutionData({ lat, lon }: { lat: number; lon: number }) {
      this.loadingAirPollutionData = true;
      const key = 'air-pollution';
      const cacheKey = getCacheKey({ lat, lon, key });
      const cacheData = isCached({ key: cacheKey });
      if (cacheData) {
        this.airPollution = cacheData;
        this.loadingAirPollutionData = false;
        return cacheData;
      }
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${APIkey}`
      );
      setCache({ key: cacheKey, value: data });
      this.airPollution = data;
      this.loadingAirPollutionData = false;
      return data;
    },
    async searchLocationWeatherAndAirData({ city }: { city: ICity }) {
      const { lat, lng: lon, city_ascii, country } = city;
      await this.fetchLocationWeatherData({ lat, lon });
      await this.fetchLocationAirPollutionData({ lat, lon });
      this.searchedCity = `${city_ascii}/ ${country}`;
    },
  },
});
