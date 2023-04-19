<script lang="ts">
import { PropType } from 'vue';

import { ICity } from '../../interface/city.interface';
import { useWeatherStore } from '../../store/useWeatherStore';
import { cityListItemTestId } from '../../tests/const';

export default {
  name: 'CityListItem.vue',
  props: {
    city: {
      type: Object as unknown as PropType<ICity>,
      required: true,
    },
  },
  setup(props: { city: ICity }) {
    const weatherStore = useWeatherStore();
    const { searchLocationWeatherAndAirData } = weatherStore;

    const handleCityClick = async () => {
      await searchLocationWeatherAndAirData({ city: props.city });
    };

    return {
      handleCityClick,
      cityListItemTestId,
    };
  },
};
</script>
<template>
  <div
    class="relative my-2 p-2 px-10 cursor-pointer hover:bg-slate-100"
    :ref="cityListItemTestId"
    @click="handleCityClick"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-center gap-2">
        <font-awesome-icon icon="fa-solid fa-location-dot" class="text-orange-400" />
        <p class="text-xs font-bold text-slate-700 dark:text-white">
          {{ city.city_ascii }}, {{ city.country }}
        </p>
      </div>
    </div>
  </div>
</template>
