import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import { pressureContainerTestId, pressureTextTestId } from '../../../tests/const';
import Pressure from '../Pressure.vue';

describe('Pressure.vue', () => {
  expect(Pressure).toBeTruthy();

  test('should have Pressure layout DOM elements', async () => {
    const wrapper = mount(Pressure);
    expect(wrapper.find({ ref: pressureContainerTestId }).exists()).toBe(true);
  });

  test('should have rendered pressure', async () => {
    const wrapper = mount(Pressure, {
      props: {
        pressure: '800mb',
      },
    });
    expect(wrapper.find({ ref: pressureTextTestId }).text()).toContain('800mb');
  });
});
