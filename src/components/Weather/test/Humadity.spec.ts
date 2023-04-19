import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import { humidityContainerTestId, humidityTextTestId } from '../../../tests/const';
import Humidity from '../Humidity.vue';

describe('Humidity.vue', () => {
  expect(Humidity).toBeTruthy();

  test('should have Humidity layout DOM elements', async () => {
    const wrapper = mount(Humidity);
    expect(wrapper.find({ ref: humidityContainerTestId }).exists()).toBe(true);
  });

  test('should have rendered humidity', async () => {
    const wrapper = mount(Humidity, {
      props: {
        humidity: '87%',
      },
    });
    expect(wrapper.find({ ref: humidityTextTestId }).text()).toContain('87%');
  });
});
