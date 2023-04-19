<script lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import HeaderContainer from './components/Header/Index.vue';
import NoResultComponent from './components/NoResult.vue';
import UVIWidgetComponent from './components/UVI/UviWidget.vue';
import WeatherPredictionsComponent from './components/Weather/Prediction/WeatherPredictions.vue';
import WeatherWidgetSmallComponent from './components/Weather/WeatherWidgetSmall.vue';
import { useWeatherStore } from './store/useWeatherStore';
import {
  dashMainContentTestId,
  dashRightContentTestId,
  dashSideBarTestId,
} from './tests/const';
import HomePage from './views/Home.vue';

export default {
  name: 'App.vue',
  components: {
    HomePage,
    HeaderContainer,
    NoResultComponent,
    UVIWidgetComponent,
    WeatherWidgetSmallComponent,
    WeatherPredictionsComponent,
  },
  setup() {
    const weatherStore = useWeatherStore();
    const { getCurrentTemperature } = storeToRefs(weatherStore);

    onMounted(async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const lat = Number(Number(latitude).toFixed(1));
        const lon = Number(Number(longitude).toFixed(1));

        await weatherStore.fetchLocationWeatherData({
          lat,
          lon,
        });
        await weatherStore.fetchLocationAirPollutionData({
          lat,
          lon,
        });
      });
    });

    return {
      getCurrentTemperature,
      dashMainContentTestId,
      dashRightContentTestId,
      dashSideBarTestId,
    };
  },
};
</script>

<template>
  <div class="container font-montserrat text-slate-700 mx-auto">
    <div class="flex h-screen" v-if="getCurrentTemperature">
      <div class="flex-auto min-w-[100px] max-w-[100px]" :ref="dashSideBarTestId"></div>
      <div class="flex-auto" :ref="dashMainContentTestId">
        <div class="mx-10">
          <HeaderContainer />
          <HomePage />
        </div>
      </div>
      <div
        class="flex-auto min-w-[400px] max-w-[400px] bg-gray-100 px-10 py-5"
        :ref="dashRightContentTestId"
      >
        <div class="flex flex-col gap-10">
          <WeatherWidgetSmallComponent />
          <UVIWidgetComponent />
          <WeatherPredictionsComponent />
        </div>
      </div>
    </div>
    <NoResultComponent v-else />
  </div>
</template>
