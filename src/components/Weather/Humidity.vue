<script lang="ts">
import { ComputedRef, computed } from 'vue';

import { humidityContainerTestId, humidityTextTestId } from '../../tests/const';

export default {
  name: 'Humidity.vue',
  props: {
    humidity: {
      type: [String, Number],
      required: true,
    },
  },

  setup(props: { humidity: string | number }) {
    const humidityPercentage: ComputedRef<string> = computed(() => props.humidity + '%');
    return {
      humidityPercentage,
      humidityContainerTestId,
      humidityTextTestId,
    };
  },
};
</script>
<template>
  <div
    :ref="humidityContainerTestId"
    class="text-center bg-white p-5 rounded-2xl w-full shadow-lg"
  >
    <p class="text-xs">Humidity</p>
    <p class="text-lg font-semibold" :ref="humidityTextTestId">
      {{ humidityPercentage }}
    </p>
  </div>
</template>
