<script lang="ts">
import { storeToRefs } from 'pinia';
import { Ref, ref } from 'vue';

import { getDateByIndex } from '../../../helper';
import { useWeatherStore } from '../../../store/useWeatherStore';
import {
  weatherPredictionsContainerTestId,
  weatherPredictionsTitleTestId,
} from '../../../tests/const';
import LoadingComponent from '../../Loading.vue';
import PredictionWidgetComponent from './PredictionWidget.vue';

export default {
  name: 'WeatherPredictions.vue',
  components: {
    PredictionWidgetComponent,
    LoadingComponent,
  },
  setup() {
    const showNextEightDaysWeather: Ref<boolean> = ref(false);
    const weatherStore = useWeatherStore();
    const { getNextThreeDaysWeather, getNextEightDaysWeather, getLoadingWeatherData } =
      storeToRefs(weatherStore);

    return {
      getDateByIndex,
      getLoadingWeatherData,
      getNextThreeDaysWeather,
      getNextEightDaysWeather,
      weatherPredictionsTitleTestId,
      weatherPredictionsContainerTestId,
      showNextEightDaysWeather,
    };
  },
};
</script>

<template>
  <div class="relative">
    <LoadingComponent v-if="getLoadingWeatherData" />
    <h2 :ref="weatherPredictionsTitleTestId" class="text-3xl font-bold">
      Weather Prediction
    </h2>
    <div
      :ref="weatherPredictionsContainerTestId"
      class="flex flex-col gap-5 my-5 max-h-[600px] overflow-auto"
    >
      <template
        v-for="(day, idx) in showNextEightDaysWeather
          ? getNextEightDaysWeather
          : getNextThreeDaysWeather"
        :key="day.dt"
      >
        <PredictionWidgetComponent
          :date="getDateByIndex(idx)"
          :condition="day.weather[0].main"
          :min-temp="day.temp.min"
          :max-temp="day.temp.max"
          :icon="day.weather[0].icon"
        />
      </template>
    </div>
    <div class="flex justify-end">
      <div
        v-if="!showNextEightDaysWeather"
        @click="showNextEightDaysWeather = true"
        class="text-white bg-orange-400 p-4 px-8 rounded-2xl shadow-orange-200 shadow-lg cursor-pointer"
      >
        <font-awesome-icon icon="fa-solid fa-calendar" class="mx-2" /> Next 5 Days
      </div>
    </div>
  </div>
</template>
