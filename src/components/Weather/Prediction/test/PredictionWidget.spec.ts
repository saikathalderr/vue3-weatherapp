import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import {
  weatherPredictionWidgetConditionTestId,
  weatherPredictionWidgetContainerTestId,
  weatherPredictionWidgetDateTestId,
  weatherPredictionWidgetIconTestId,
  weatherPredictionWidgetTemperaturesTestId,
} from '../../../../tests/const';
import PredictionWidget from '../PredictionWidget.vue';

describe('PredictionWidget.vue', () => {
  expect(PredictionWidget).toBeTruthy();

  test('should have PredictionWidget layout DOM elements', async () => {
    const wrapper = mount(PredictionWidget);
    expect(wrapper.find({ ref: weatherPredictionWidgetContainerTestId }).exists()).toBe(
      true
    );
    expect(wrapper.find({ ref: weatherPredictionWidgetIconTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: weatherPredictionWidgetDateTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: weatherPredictionWidgetConditionTestId }).exists()).toBe(
      true
    );
    expect(
      wrapper.find({ ref: weatherPredictionWidgetTemperaturesTestId }).exists()
    ).toBe(true);
  });

  test('should render data properly', () => {
    const wrapper = mount(PredictionWidget, {
      props: {
        date: 'November 11',
        condition: 'Cloudy',
        minTemp: '19',
        maxTemp: '26',
        icon: '10d',
      },
    });
    expect(wrapper.find({ ref: weatherPredictionWidgetDateTestId }).text()).toContain(
      'November 11'
    );
    expect(
      wrapper.find({ ref: weatherPredictionWidgetConditionTestId }).text()
    ).toContain('Cloudy');
    expect(
      wrapper.find({ ref: weatherPredictionWidgetTemperaturesTestId }).text()
    ).toContain('19°C / 26°C');
  });
});
