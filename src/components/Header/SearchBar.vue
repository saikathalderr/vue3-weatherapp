<script lang="ts">
import { Ref, ref } from 'vue';

import { handleCitySearch } from '../../helper';
import { ICity } from '../../interface/city.interface';
import {
  searchBarIconTestId,
  searchBarInputTestId,
  searchBarTestId,
} from '../../tests/const';
import CityListComponent from '../City/CityList.vue';

export default {
  name: 'SearchBar.vue',
  components: {
    CityListComponent,
  },
  setup() {
    const cities: Ref<ICity[] | undefined> = ref();
    const searchText: Ref<string> = ref('');

    const onSearch = () => {
      if (searchText.value.length <= 2) {
        cities.value = undefined;
        return;
      }
      cities.value = handleCitySearch({ searchTerm: searchText.value });
    };

    const handleOutFocus = () => {
      searchText.value = '';
      cities.value = undefined;
    };

    return {
      searchBarIconTestId,
      searchBarInputTestId,
      searchBarTestId,
      searchText,
      handleOutFocus,
      onSearch,
      cities,
    };
  },
};
</script>

<template>
  <div class="max-w-[300px] mx-auto" :ref="searchBarTestId">
    <div class="bg-gray-100 rounded-xl px-5" v-click-outside="handleOutFocus">
      <div class="relative flex items-center w-full h-12 rounded-lg overflow-hidden">
        <input
          :ref="searchBarInputTestId"
          class="peer h-full w-full outline-none text-sm text-gray-700 font-bold px-5 bg-gray-100"
          type="text"
          id="search"
          placeholder="Search city.."
          autocomplete="off"
          v-model="searchText"
          v-debounce:300ms="onSearch"
        />

        <div class="grid place-items-center h-full w-12 text-gray-300">
          <font-awesome-icon
            icon="fa-solid fa-search"
            class="text-orange-400"
            :ref="searchBarIconTestId"
          />
        </div>
      </div>
    </div>
    <CityListComponent :cities="cities" v-if="cities?.length" />
  </div>
</template>
