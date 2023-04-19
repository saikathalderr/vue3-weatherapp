import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { useWeatherStore } from '../useWeatherStore';

describe('useWeatherStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('getters', () => {
    const weatherStore = useWeatherStore();
    // state
    const {
      loadingWeatherData,
      loadingAirPollutionData,
      searchedCity,
      weatherData,
      airPollution,
    } = weatherStore;

    // Getters
    const {
      getLoadingWeatherData,
      getLoadingAirPollutionData,
      getSearchedCity,
      getCurrentTemperature,
      getCurrentPressure,
      getCurrentVisibility,
      getCurrentHumidity,
      getCurrentCondition,
      getCurrentUvi,
      getNextThreeDaysWeather,
      getNextEightDaysWeather,
      getTomorrowWeather,
      getCurrentAirPollutionAqi,
      getCurrentWindAngle,
    } = weatherStore;

    expect(getLoadingWeatherData).toStrictEqual(loadingWeatherData);
    expect(getLoadingAirPollutionData).toStrictEqual(loadingAirPollutionData);
    expect(getSearchedCity).toStrictEqual(searchedCity);
    expect(getCurrentTemperature).toStrictEqual(weatherData?.current?.temp || 0);
    expect(getCurrentPressure).toStrictEqual(weatherData?.current?.pressure || 0);
    expect(getCurrentVisibility).toStrictEqual(weatherData?.current?.visibility || 0);
    expect(getCurrentHumidity).toStrictEqual(weatherData?.current?.humidity || 0);
    expect(getCurrentCondition).toStrictEqual(weatherData?.current?.weather[0]?.main || '');
    expect(getCurrentUvi).toStrictEqual(weatherData?.current?.uvi || 0);
    expect(getNextThreeDaysWeather).toStrictEqual(weatherData?.daily?.slice(0, 3) || []);
    expect(getNextEightDaysWeather).toStrictEqual(weatherData?.daily || []);
    expect(getTomorrowWeather).toStrictEqual(weatherData?.daily[0] ||  undefined);
    expect(getCurrentAirPollutionAqi).toStrictEqual(airPollution?.list[0]?.main?.aqi || 0);
    expect(getCurrentWindAngle).toStrictEqual(weatherData?.current?.wind_deg || 0);
  });
});
