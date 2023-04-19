<script lang="ts">
import { storeToRefs } from 'pinia';

import { getUvIStatusByValue } from '../../helper';
import { useWeatherStore } from '../../store/useWeatherStore';
import {
  uviWidgetIconTestId,
  uviWidgetSubTitleTestId,
  uviWidgetTagTestId,
  uviWidgetTitleTestId,
} from '../../tests/const';
import IconComponent from '../Icon.vue';
import LoadingComponent from '../Loading.vue';

export default {
  name: 'UVIWidget.vue',
  components: {
    IconComponent,
    LoadingComponent,
  },
  setup() {
    const weatherStore = useWeatherStore();
    const { getCurrentUvi, getLoadingWeatherData } = storeToRefs(weatherStore);

    return {
      getUvIStatusByValue,
      getCurrentUvi,
      getLoadingWeatherData,
      uviWidgetSubTitleTestId,
      uviWidgetIconTestId,
      uviWidgetTitleTestId,
      uviWidgetTagTestId,
    };
  },
};
</script>

<template>
  <div class="relative">
    <LoadingComponent v-if="getLoadingWeatherData" />
    <div class="rounded-2xl p-2 py-5 flex bg-white justify-center items-center">
      <div class="px-2">
        <IconComponent>
          <template #icon>
            <font-awesome-icon
              icon="fas fa-sun"
              class="text-2xl"
              :ref="uviWidgetIconTestId"
            />
          </template>
        </IconComponent>
      </div>
      <div class="flex-auto">
        <div class="flex gap-2">
          <p class="text-2xl font-bold" :ref="uviWidgetTitleTestId">
            {{ getCurrentUvi }} UVI
          </p>
          <div>
            <p
              :class="`${
                getUvIStatusByValue({ value: getCurrentUvi }).color
              } h-auto p-1.5 px-4 rounded-full text-xs font-bold capitalize`"
              :ref="uviWidgetTagTestId"
            >
              {{ getUvIStatusByValue({ value: getCurrentUvi }).status }}
            </p>
          </div>
        </div>
        <div class="flex mt-2">
          <p class="text-sm" :ref="uviWidgetSubTitleTestId">
            <span class="capitalize">{{
              getUvIStatusByValue({ value: getCurrentUvi }).status
            }}</span>
            risk of UV rays
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
