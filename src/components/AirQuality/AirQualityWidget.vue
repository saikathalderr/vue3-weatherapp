<script lang="ts">
import { storeToRefs } from 'pinia';

import { getCardinalDirection } from '../../helper';
import { useWeatherStore } from '../../store/useWeatherStore';
import {
  airQualityLabelTestId,
  airQualityQuantityTestId,
  airQualityWidgetContainerTestId,
  airQualityWidgetIconTestId,
  airQualityWidgetSubTitleTestId,
  airQualityWidgetTitleTestId,
} from '../../tests/const';
import IconComponent from '../Icon.vue';
import LoadingComponent from '../Loading.vue';
import AirQualityProgressBarComponent from './AirQualityProgressBar.vue';

export default {
  name: 'AirQualityWidget.vue',
  components: {
    IconComponent,
    LoadingComponent,
    AirQualityProgressBarComponent,
  },
  setup() {
    const weatherStore = useWeatherStore();
    const { getCurrentAirPollutionAqi, loadingAirPollutionData, getCurrentWindAngle } =
      storeToRefs(weatherStore);

    return {
      getCardinalDirection,
      getCurrentWindAngle,
      loadingAirPollutionData,
      getCurrentAirPollutionAqi,
      airQualityLabelTestId,
      airQualityQuantityTestId,
      airQualityWidgetContainerTestId,
      airQualityWidgetIconTestId,
      airQualityWidgetTitleTestId,
      airQualityWidgetSubTitleTestId,
    };
  },
};
</script>

<template>
  <div
    :ref="airQualityWidgetContainerTestId"
    class="w-full rounded-3xl border-2 border-slate-100 relative"
  >
    <LoadingComponent v-if="loadingAirPollutionData" />
    <div class="p-10">
      <div class="flex gap-5 justify-center items-center">
        <div class="flex-auto min-w-[30px] max-w-[30px]">
          <IconComponent>
            <template #icon>
              <font-awesome-icon
                :ref="airQualityWidgetIconTestId"
                icon="fa-solid fa-wind"
              />
            </template>
          </IconComponent>
        </div>
        <div class="flex-auto">
          <div class="flex flex-col">
            <p class="my-1 text-sm font-bold" :ref="airQualityWidgetTitleTestId">
              Air Quality
            </p>
            <p class="my-1 text-sm" :ref="airQualityWidgetSubTitleTestId">
              Main pollution : AQI
            </p>
          </div>
        </div>
      </div>
      <div class="flex gap-5 my-5">
        <div>
          <div class="flex justify-center items-center gap-3 font-semibold">
            <p class="my-1 text-4xl" :ref="airQualityQuantityTestId">
              {{ getCurrentAirPollutionAqi }}
            </p>
            <p
              class="my-1 bg-theme-green h-auto px-2 rounded-md"
              :ref="airQualityLabelTestId"
            >
              AQI
            </p>
            <p class="my-1 bg-purple-400 h-auto px-2 rounded-md">
              {{ getCardinalDirection(getCurrentWindAngle) }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <AirQualityProgressBarComponent :aqi="getCurrentAirPollutionAqi" />
      </div>
    </div>
  </div>
</template>
