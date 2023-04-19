import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import { headerProfileHelloTestId, headerProfileTimeTestId } from '../../../tests/const';
import Profile from '../Profile.vue';

describe('Profile.vue', () => {
  expect(Profile).toBeTruthy();
  const wrapper = mount(Profile);

  test('should have Profile layout DOM elements', async () => {
    expect(wrapper.find({ ref: headerProfileHelloTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: headerProfileTimeTestId }).exists()).toBe(true);
  });
});
