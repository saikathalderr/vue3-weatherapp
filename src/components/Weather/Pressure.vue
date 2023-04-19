<script lang="ts">
import { pressureContainerTestId, pressureTextTestId } from '../../tests/const';

export default {
  name: 'Pressure.vue',
  props: {
    pressure: {
      type: [String, Number],
      required: true,
    },
  },

  setup() {
    return {
      pressureTextTestId,
      pressureContainerTestId,
    };
  },
};
</script>
<template>
  <div
    :ref="pressureContainerTestId"
    class="text-center bg-slate-700 text-white p-5 rounded-2xl w-full shadow-lg"
  >
    <p class="text-xs">pressure</p>
    <p class="text-lg font-semibold" :ref="pressureTextTestId">{{ pressure }}mb</p>
  </div>
</template>
