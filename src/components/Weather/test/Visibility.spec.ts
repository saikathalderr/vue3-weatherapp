import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import { visibilityContainerTestId, visibilityTextTestId } from '../../../tests/const';
import Visibility from '../Visibility.vue';

describe('Visibility.vue', () => {
  expect(Visibility).toBeTruthy();

  test('should have Visibility layout DOM elements', async () => {
    const wrapper = mount(Visibility);
    expect(wrapper.find({ ref: visibilityContainerTestId }).exists()).toBe(true);
  });

  test('should have rendered pressure', async () => {
    const wrapper = mount(Visibility, {
      props: {
        visibility: 4,
      },
    });
    expect(wrapper.find({ ref: visibilityTextTestId }).text()).toContain('4km');
  });
});
