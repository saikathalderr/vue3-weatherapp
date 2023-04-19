import { createTestingPinia } from '@pinia/testing';
import { shallowMount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';

import {
  weatherPredictionWidgetContainerTestId,
  weatherPredictionsContainerTestId,
  weatherPredictionsTitleTestId,
} from '../../../../tests/const';
import WeatherPredictions from '../WeatherPredictions.vue';

describe('WeatherPredictions.vue', () => {
  expect(WeatherPredictions).toBeTruthy();
  const wrapper = shallowMount(WeatherPredictions, {
    global: {
      plugins: [createTestingPinia()],
    },
  });

  test('should have WeatherPredictions layout DOM elements', async () => {
    expect(wrapper.find({ ref: weatherPredictionsTitleTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: weatherPredictionsContainerTestId }).exists()).toBe(true);
  });

  test('should show next empty weather when showNextEightDaysWeather is true but no getNextThreeDaysWeather or getNextEightDaysWeather', () => {
    // Arrange
    const wrapper = shallowMount(WeatherPredictions, {
      data() {
        return {
          showNextEightDaysWeather: true,
        };
      },
    });

    // Act
    // Trigger the component to render

    // Assert
    expect(wrapper.findAll('.prediction-widget').length).toBe(0);
  });
});
