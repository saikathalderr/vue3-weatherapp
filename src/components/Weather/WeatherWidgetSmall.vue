<script lang="ts">
import { storeToRefs } from 'pinia';

import { getToday } from '../../helper';
import { useWeatherStore } from '../../store/useWeatherStore';
import {
  weatherWidgetDayTestId,
  weatherWidgetLocationTestId,
  weatherWidgetTemperatureTestId,
} from '../../tests/const';
import LoadingComponent from '../Loading.vue';
import TemperatureComponent from './Temperature.vue';

export default {
  name: 'WeatherWidgetSmall.vue',
  components: {
    TemperatureComponent,
    LoadingComponent,
  },
  setup() {
    const weatherStore = useWeatherStore();
    const { getCurrentTemperature, getSearchedCity, getLoadingWeatherData } =
      storeToRefs(weatherStore);

    return {
      getToday,
      getSearchedCity,
      getCurrentTemperature,
      getLoadingWeatherData,
      weatherWidgetDayTestId,
      weatherWidgetLocationTestId,
      weatherWidgetTemperatureTestId,
    };
  },
};
</script>

<template>
  <div class="border-b-2 py-5 relative">
    <LoadingComponent v-if="getLoadingWeatherData" />
    <div class="flex">
      <div class="flex-auto">
        <p :ref="weatherWidgetDayTestId">
          {{ getToday() }}
        </p>
        <p :ref="weatherWidgetLocationTestId" class="relative">
          {{ getSearchedCity }}
          <span
            class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"
          ></span>
        </p>
      </div>
      <div class="flex-auto flex justify-end" :ref="weatherWidgetTemperatureTestId">
        <TemperatureComponent :temp="getCurrentTemperature" color="text-orange-400" />
      </div>
    </div>
  </div>
</template>
