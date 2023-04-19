import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import {
  airQualityGoodTitleTestId,
  airQualityHazardousTitleTestId,
  airQualityWidgetProgressBarContainerTestId,
} from '../../../tests/const';
import AirQualityProgressBar from '../AirQualityProgressBar.vue';

describe('AirQualityProgressBar.vue', () => {
  expect(AirQualityProgressBar).toBeTruthy();
  const wrapper = mount(AirQualityProgressBar);

  test('should have AirQualityProgressBar layout DOM elements', async () => {
    expect(
      wrapper.find({ ref: airQualityWidgetProgressBarContainerTestId }).exists()
    ).toBe(true);
    expect(wrapper.find({ ref: airQualityGoodTitleTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: airQualityHazardousTitleTestId }).exists()).toBe(true);
  });
});
