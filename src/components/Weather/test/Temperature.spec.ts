import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import UnitEnum from '../../../Enums/Unit';
import {
  temperatureRegularContainerTestId,
  temperatureSmallContainerTestId,
} from '../../../tests/const';
import Temperature from '../Temperature.vue';

describe('Temperature.vue', () => {
  expect(Temperature).toBeTruthy();

  test('should load small temperature container if "small" is passed from props', async () => {
    const wrapper = mount(Temperature, {
      props: {
        temp: '11',
        small: true,
        unit: UnitEnum.C,
      },
    });
    expect(wrapper.find({ ref: temperatureSmallContainerTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: temperatureRegularContainerTestId }).exists()).toBe(false);
  });

  test('should load regular temperature container if "small" not passed from props', async () => {
    const wrapper = mount(Temperature, {
      props: {
        temp: '11',
        unit: UnitEnum.C,
      },
    });
    expect(wrapper.find({ ref: temperatureSmallContainerTestId }).exists()).toBe(false);
    expect(wrapper.find({ ref: temperatureRegularContainerTestId }).exists()).toBe(true);
  });

  test('Should render correct temperature with unit - regular', async () => {
    const wrapper = mount(Temperature, {
      props: {
        temp: '11',
        unit: UnitEnum.C,
      },
    });
    expect(wrapper.find({ ref: temperatureRegularContainerTestId }).text()).toContain(
      `11°C`
    );
  });

  test('Should render correct temperature with unit - small', async () => {
    const wrapper = mount(Temperature, {
      props: {
        temp: '2',
        small: true,
        unit: UnitEnum.F,
      },
    });
    expect(wrapper.find({ ref: temperatureSmallContainerTestId }).text()).toContain(
      `2°F`
    );
  });
});
