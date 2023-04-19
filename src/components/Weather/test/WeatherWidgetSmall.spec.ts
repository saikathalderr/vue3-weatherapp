import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import {
  weatherWidgetDayTestId,
  weatherWidgetLocationTestId,
} from '../../../tests/const';
import WeatherWidgetSmall from '../WeatherWidgetSmall.vue';

describe('WeatherWidgetSmall.vue', () => {
  expect(WeatherWidgetSmall).toBeTruthy();
  const wrapper = mount(WeatherWidgetSmall, {
    global: {
      plugins: [createTestingPinia()],
    },
  });

  test('should have WeatherWidgetSmall layout DOM elements', async () => {
    expect(wrapper.find({ ref: weatherWidgetDayTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: weatherWidgetLocationTestId }).exists()).toBe(true);
  });
});
