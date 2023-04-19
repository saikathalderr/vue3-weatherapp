import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import App from '../App.vue';
import {
  dashMainContentTestId,
  dashRightContentTestId,
  dashSideBarTestId,
} from '../tests/const';

describe('App.vue', () => {
  expect(App).toBeTruthy();
  const wrapper = mount(App, {
    global: {
      plugins: [createTestingPinia()],
    },
  });

  test('should have dashboard layout DOM elements', async () => {
    expect(wrapper.find({ ref: dashSideBarTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: dashMainContentTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: dashRightContentTestId }).exists()).toBe(true);
  });
});
