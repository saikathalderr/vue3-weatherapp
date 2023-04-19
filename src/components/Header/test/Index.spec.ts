import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import {
  headerContainerTestId,
  headerProfileSectionTestId,
  headerSearchSectionTestId,
} from '../../../tests/const';
import Header from '../Index.vue';

describe('Header.vue', () => {
  expect(Header).toBeTruthy();
  const wrapper = mount(Header);

  test('should have header layout DOM elements', async () => {
    expect(wrapper.find({ ref: headerContainerTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: headerProfileSectionTestId }).exists()).toBe(true);
    expect(wrapper.find({ ref: headerSearchSectionTestId }).exists()).toBe(true);
  });
});
