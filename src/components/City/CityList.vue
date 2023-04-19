<script lang="ts">
import { PropType } from 'vue';

import { ICity } from '../../interface/city.interface';
import { cityListTestId } from '../../tests/const';
import CityListItemComponent from './CityListItem.vue';

export default {
  name: 'CityList',
  components: {
    CityListItemComponent,
  },
  props: {
    cities: {
      type: Array as unknown as PropType<ICity[]>,
      required: true,
    },
  },
  setup() {
    return {
      cityListTestId,
    };
  },
};
</script>

<template>
  <div
    class="shadow-xl w-[300px] h-auto max-h-60 absolute bg-white overflow-auto z-10"
    :ref="cityListTestId"
  >
    <template v-for="city in cities" :key="city.id">
      <CityListItemComponent :city="city" />
    </template>
  </div>
</template>
