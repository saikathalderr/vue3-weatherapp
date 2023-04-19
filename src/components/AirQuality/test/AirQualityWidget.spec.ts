import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import {
  airQualityLabelTestId,
  airQualityQuantityTestId,
  airQualityWidgetContainerTestId,
  airQualityWidgetIconTestId,
  airQualityWidgetSubTitleTestId,
  airQualityWidgetTitleTestId,
} from '../../../tests/const';
import AirQualityWidget from '../AirQualityWidget.vue';

describe('AirQualityWidget.vue', () => {
  expect(AirQualityWidget).toBeTruthy();
  const wrapper = mount(AirQualityWidget);

  test('should have AirQualityWidget layout DOM elements', async () => {
    expect(wrapper.find({ ref: airQualityWidgetContainerTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: airQualityWidgetIconTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: airQualityWidgetTitleTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: airQualityWidgetSubTitleTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: airQualityQuantityTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: airQualityLabelTestId }).exists()).toBe(true);
  });
});
