import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import { cityListTestId } from '../../../tests/const';
import CityList from '../CityList.vue';

describe('CityList.vue', () => {
  expect(CityList).toBeTruthy();
  const wrapper = mount(CityList);

  test('should have CityList layout DOM elements', async () => {
    expect(wrapper.find({ ref: cityListTestId }).exists()).toBe(true);
  });
});
