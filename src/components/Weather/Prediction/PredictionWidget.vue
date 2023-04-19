<script lang="ts">
import { getOpenWeatherIcon } from '../../../helper';
import {
  weatherPredictionWidgetConditionTestId,
  weatherPredictionWidgetContainerTestId,
  weatherPredictionWidgetDateTestId,
  weatherPredictionWidgetIconTestId,
  weatherPredictionWidgetTemperaturesTestId,
} from '../../../tests/const';
import IconComponent from '../../Icon.vue';
import TemperatureComponent from '../Temperature.vue';

export default {
  name: 'PredictionWidget.vue',
  props: {
    date: {
      type: [String],
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    minTemp: {
      type: [String, Number],
      required: true,
    },
    maxTemp: {
      type: [String, Number],
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  components: {
    IconComponent,
    TemperatureComponent,
  },
  setup() {
    return {
      getOpenWeatherIcon,
      weatherPredictionWidgetTemperaturesTestId,
      weatherPredictionWidgetConditionTestId,
      weatherPredictionWidgetContainerTestId,
      weatherPredictionWidgetDateTestId,
      weatherPredictionWidgetIconTestId,
    };
  },
};
</script>

<template>
  <div :ref="weatherPredictionWidgetContainerTestId" class="prediction-widget">
    <div class="rounded-2xl p-5 flex bg-white justify-center items-center gap-4">
      <div>
        <img
          :src="getOpenWeatherIcon({ icon })"
          class="w-[50px]"
          :ref="weatherPredictionWidgetIconTestId"
        />
      </div>
      <div class="flex-auto">
        <p
          class="text-slate-400 font-semibold text-sm"
          :ref="weatherPredictionWidgetDateTestId"
        >
          {{ date }}
        </p>
        <div class="flex justify-center items-center">
          <div class="flex-auto">
            <p
              class="text-slate-900 font-semibold"
              :ref="weatherPredictionWidgetConditionTestId"
            >
              {{ condition }}
            </p>
          </div>
          <p
            class="text-orange-400 font-semibold flex justify-center items-center"
            :ref="weatherPredictionWidgetTemperaturesTestId"
          >
            <TemperatureComponent :temp="minTemp" small /> /
            <TemperatureComponent :temp="maxTemp" small />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
