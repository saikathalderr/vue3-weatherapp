import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';

import {
  weatherWidgetTomorrowConditionTextTestId,
  weatherWidgetTomorrowIconTestId,
  weatherWidgetTomorrowTemperatureTestId,
  weatherWidgetTomorrowTitleTestId,
} from '../../../tests/const';
import WeatherWidgetTomorrow from '../WeatherWidgetTomorrow.vue';

describe('WeatherWidgetTomorrow.vue', () => {
  expect(WeatherWidgetTomorrow).toBeTruthy();

  test('should have WeatherWidgetTomorrow layout DOM elements', async () => {
    const wrapper = mount(WeatherWidgetTomorrow);
    expect(wrapper.find({ ref: weatherWidgetTomorrowConditionTextTestId }).exists()).toBe(
      true
    );
    expect(wrapper.find({ ref: weatherWidgetTomorrowTemperatureTestId }).exists()).toBe(
      true
    );
    expect(wrapper.find({ ref: weatherWidgetTomorrowTitleTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: weatherWidgetTomorrowIconTestId }).exists()).toBe(true);
  });

  test('getOpenWeatherIcon should call with input', async () => {
    const wrapper = mount(WeatherWidgetTomorrow);
    const getOpenWeatherIconSpy = vi.spyOn(wrapper.vm, 'getOpenWeatherIcon');
    wrapper.vm.getOpenWeatherIcon({ icon: '10d' });
    expect(getOpenWeatherIconSpy).toHaveBeenCalledWith({ icon: '10d' });
  });
});
