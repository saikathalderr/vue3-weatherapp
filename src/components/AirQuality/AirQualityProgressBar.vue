<script lang="ts">
import {
  airQualityGoodTitleTestId,
  airQualityHazardousTitleTestId,
  airQualityWidgetProgressBarContainerTestId,
} from '../../tests/const';
import ProgressComponent from '../Progress.vue';

export default {
  name: 'AirQualityProgressBar.vue',
  props: {
    aqi: {
      type: Number,
      required: true,
    },
  },
  components: {
    ProgressComponent,
  },
  setup() {
    return {
      airQualityGoodTitleTestId,
      airQualityHazardousTitleTestId,
      airQualityWidgetProgressBarContainerTestId,
    };
  },
};
</script>

<template>
  <div
    class="shadow-lg py-3 px-5 rounded-2xl"
    :ref="airQualityWidgetProgressBarContainerTestId"
  >
    <div class="flex py-2">
      <div class="flex-auto text-sm" :ref="airQualityGoodTitleTestId">Good</div>
      <div
        class="flex-auto flex justify-end text-sm"
        :ref="airQualityHazardousTitleTestId"
      >
        Hazardous
      </div>
    </div>
    <ProgressComponent :progress="aqi" />
  </div>
</template>
