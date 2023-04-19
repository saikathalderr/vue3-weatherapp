<script lang="ts">
import { storeToRefs } from 'pinia';

import { getOpenWeatherIcon } from '../../helper';
import { useWeatherStore } from '../../store/useWeatherStore';
import {
  weatherWidgetIconTestId,
  weatherWidgetLargeContainerTestId,
  weatherWidgetSubTitleTestId,
  weatherWidgetTitleTestId,
} from '../../tests/const';
import LoadingComponent from '../Loading.vue';
import HumidityComponent from './Humidity.vue';
import PressureComponent from './Pressure.vue';
import TemperatureComponent from './Temperature.vue';
import VisibilityComponent from './Visibility.vue';

export default {
  name: 'WeatherWidgetLarge.vue',
  components: {
    PressureComponent,
    VisibilityComponent,
    TemperatureComponent,
    HumidityComponent,
    LoadingComponent,
  },
  setup() {
    const weatherStore = useWeatherStore();
    const {
      getCurrentTemperature,
      getCurrentFeelLike,
      getCurrentPressure,
      getCurrentVisibility,
      getCurrentHumidity,
      getCurrentCondition,
      getLoadingWeatherData,
    } = storeToRefs(weatherStore);

    return {
      getOpenWeatherIcon,
      getLoadingWeatherData,
      getCurrentCondition,
      getCurrentHumidity,
      getCurrentVisibility,
      getCurrentPressure,
      getCurrentTemperature,
      getCurrentFeelLike,
      weatherWidgetTitleTestId,
      weatherWidgetIconTestId,
      weatherWidgetSubTitleTestId,
      weatherWidgetLargeContainerTestId,
    };
  },
};
</script>

<template>
  <div
    :ref="weatherWidgetLargeContainerTestId"
    class="w-full rounded-3xl border-2 border-slate-100 relative"
  >
    <LoadingComponent v-if="getLoadingWeatherData" />
    <div class="p-10">
      <div class="flex gap-5 justify-center items-center">
        <div class="flex-auto min-w-[50px] max-w-[50px]">
          <img
            :ref="weatherWidgetIconTestId"
            :src="getOpenWeatherIcon({ icon: '50d' })"
          />
        </div>
        <div class="flex-auto">
          <div class="flex flex-col">
            <p class="my-1 text-sm font-bold" :ref="weatherWidgetTitleTestId">Weather</p>
            <p class="my-1 text-sm" :ref="weatherWidgetSubTitleTestId">
              What's the weather
            </p>
          </div>
        </div>
      </div>
      <div class="flex gap-5 my-5">
        <div>
          <div class="flex justify-center items-center gap-3 font-semibold">
            <TemperatureComponent :temp="getCurrentTemperature" />
            <TemperatureComponent small :temp="getCurrentFeelLike" />
          </div>
          <p class="my-1 text-sm">{{ getCurrentCondition }}</p>
        </div>
      </div>
      <div class="flex gap-5">
        <PressureComponent class="flex-auto" :pressure="getCurrentPressure" />
        <VisibilityComponent class="flex-auto" :visibility="getCurrentVisibility" />
        <HumidityComponent class="flex-auto" :humidity="getCurrentHumidity" />
      </div>
    </div>
  </div>
</template>
