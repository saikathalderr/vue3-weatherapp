import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';

import {
  searchBarIconTestId,
  searchBarInputTestId,
  searchBarTestId,
} from '../../../tests/const';
import SearchBar from '../SearchBar.vue';

describe('SearchBar.vue', () => {
  expect(SearchBar).toBeTruthy();
  const wrapper = mount(SearchBar);

  test('should have SearchBar layout DOM elements', async () => {
    expect(wrapper.find({ ref: searchBarTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: searchBarIconTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: searchBarInputTestId }).exists()).toBe(true);
  });

  test('onSearch should call with input', async () => {
    const onSearchSpy = vi.spyOn(wrapper.vm, 'onSearch');
    wrapper.vm.onSearch('test', '');
    expect(onSearchSpy).toHaveBeenCalledWith('test', '');
  });

  test('onSearch should return if no input passed', async () => {
    const onSearchSpy = vi.spyOn(wrapper.vm, 'onSearch');
    wrapper.vm.onSearch('', {});
    expect(onSearchSpy).toHaveBeenCalledOnce();
  });
});
