import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import {
  weatherWidgetIconTestId,
  weatherWidgetLargeContainerTestId,
  weatherWidgetSubTitleTestId,
  weatherWidgetTitleTestId,
} from '../../../tests/const';
import WeatherWidgetLarge from '../WeatherWidgetLarge.vue';

describe('WeatherWidgetLarge.vue', () => {
  expect(WeatherWidgetLarge).toBeTruthy();
  const wrapper = mount(WeatherWidgetLarge, {
    global: {
      plugins: [createTestingPinia()],
    },
  });

  test('should have WeatherWidgetLarge layout DOM elements', async () => {
    expect(wrapper.find({ ref: weatherWidgetLargeContainerTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: weatherWidgetIconTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: weatherWidgetTitleTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: weatherWidgetSubTitleTestId }).exists()).toBe(true);
  });
});
