import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import { cityListItemTestId } from '../../../tests/const';
import CityListItem from '../CityListItem.vue';

describe('CityListItem.vue', () => {
  expect(CityListItem).toBeTruthy();
  const wrapper = mount(CityListItem, {
    props: {
      city: {
        city: 'city',
        city_ascii: 'city_ascii',
        lat: 0,
        lng: 0,
        country: 'country',
        iso2: 'iso2',
        iso3: 'iso3',
        admin_name: 'admin_name',
        capital: 'capital',
        population: 0,
        id: 1,
      },
    },
  });

  test('should have CityList layout DOM elements', async () => {
    expect(wrapper.find({ ref: cityListItemTestId }).exists()).toBe(true);
  });
});
