<script lang="ts">
import convert from 'convert';
import { ComputedRef, computed } from 'vue';

import { visibilityContainerTestId, visibilityTextTestId } from '../../tests/const';

export default {
  name: 'Visibility.vue',
  props: {
    visibility: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props: { visibility: string | number }) {
    const visibilityInKilometers: ComputedRef<string> = computed(
      () =>
        Math.round(convert(Number(props?.visibility), 'meters').to('kilometers')) + 'km'
    );
    return {
      visibilityInKilometers,
      visibilityContainerTestId,
      visibilityTextTestId,
    };
  },
};
</script>
<template>
  <div
    :ref="visibilityContainerTestId"
    class="text-center bg-theme-green p-5 rounded-2xl w-full shadow-lg"
  >
    <p class="text-xs">visibility</p>
    <p class="text-lg font-semibold" :ref="visibilityTextTestId">
      {{ visibilityInKilometers }}
    </p>
  </div>
</template>
