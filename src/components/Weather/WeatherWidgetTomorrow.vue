<script lang="ts">
import { storeToRefs } from 'pinia';

import { getOpenWeatherIcon } from '../../helper';
import { useWeatherStore } from '../../store/useWeatherStore';
import {
  weatherWidgetTomorrowConditionTextTestId,
  weatherWidgetTomorrowIconTestId,
  weatherWidgetTomorrowTemperatureTestId,
  weatherWidgetTomorrowTitleTestId,
} from '../../tests/const';
import LoadingComponent from '../Loading.vue';
import TemperatureComponent from './Temperature.vue';

export default {
  name: 'WeatherWidgetTomorrow.vue',
  components: {
    LoadingComponent,
    TemperatureComponent,
  },
  setup() {
    const weatherStore = useWeatherStore();
    const { getTomorrowWeather, getLoadingWeatherData } = storeToRefs(weatherStore);

    return {
      getOpenWeatherIcon,
      getTomorrowWeather,
      getLoadingWeatherData,
      weatherWidgetTomorrowIconTestId,
      weatherWidgetTomorrowTitleTestId,
      weatherWidgetTomorrowTemperatureTestId,
      weatherWidgetTomorrowConditionTextTestId,
    };
  },
};
</script>

<template>
  <div class="rounded-3xl border-2 border-slate-100 h-full relative">
    <LoadingComponent v-if="getLoadingWeatherData" />
    <div class="p-10 flex flex-col">
      <p :ref="weatherWidgetTomorrowTitleTestId">Tomorrow</p>
      <p class="text-3xl font-bold">
        {{ getTomorrowWeather?.weather[0]?.main }}
      </p>
      <img
        :ref="weatherWidgetTomorrowIconTestId"
        :src="getOpenWeatherIcon({ icon: getTomorrowWeather?.weather[0]?.icon || '' })"
        class="h-20 w-20"
      />
      <div>
        <TemperatureComponent
          :ref="weatherWidgetTomorrowTemperatureTestId"
          :temp="getTomorrowWeather?.temp?.max || 0"
          class="font-bold"
        />
        <TemperatureComponent
          :ref="weatherWidgetTomorrowTemperatureTestId"
          :temp="getTomorrowWeather?.temp?.min || 0"
          small
        />
      </div>
    </div>
  </div>
</template>
