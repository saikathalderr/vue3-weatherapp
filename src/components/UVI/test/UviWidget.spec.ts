import { createTestingPinia } from '@pinia/testing';
import { mount } from '@vue/test-utils';
import { defineStore } from 'pinia';
import { describe, expect, test, vi } from 'vitest';

import {
  uviWidgetIconTestId,
  uviWidgetSubTitleTestId,
  uviWidgetTagTestId,
  uviWidgetTitleTestId,
} from '../../../tests/const';
import UVIWidget from '../UviWidget.vue';

describe('UVIWidget.vue', () => {
  expect(UVIWidget).toBeTruthy();
  const wrapper = mount(UVIWidget, {
    global: {
      plugins: [createTestingPinia()],
    },
  });

  test('should have UVIWidget layout DOM elements', async () => {
    expect(wrapper.find({ ref: uviWidgetIconTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: uviWidgetTitleTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: uviWidgetTagTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: uviWidgetSubTitleTestId }).exists()).toBe(true);
  });

  test('getUvIStatusByValue should call with args', async () => {
    const getUvIStatusByValueSpy = vi.spyOn(wrapper.vm, 'getUvIStatusByValue');
    wrapper.vm.getUvIStatusByValue({ value: 2 });
    expect(getUvIStatusByValueSpy).toHaveBeenCalledWith({ value: 2 });
  });
});
