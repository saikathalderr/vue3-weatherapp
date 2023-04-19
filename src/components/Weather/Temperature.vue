<script lang="ts">
import { ComputedRef, PropType, computed } from 'vue';

import UnitEnum from '../../Enums/Unit';
import {
  temperatureRegularContainerTestId,
  temperatureSmallContainerTestId,
} from '../../tests/const';

export default {
  name: 'Temperature.vue',
  props: {
    temp: {
      type: [String, Number],
      required: true,
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
    unit: {
      type: String as unknown as PropType<UnitEnum>,
      required: false,
      default: 'C',
    },
    color: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(props: { temp: string | number; small: boolean; unit: UnitEnum }) {
    const temperature: ComputedRef<string> = computed(
      () => Math.round(Number(props.temp)) + '°' + props.unit
    );

    return {
      temperatureRegularContainerTestId,
      temperatureSmallContainerTestId,
      temperature,
    };
  },
};
</script>

<template>
  <p
    v-if="small"
    :class="`my-1 bg-white h-auto px-2 rounded-md ${color}`"
    :ref="temperatureSmallContainerTestId"
  >
    {{ temperature }}
  </p>
  <p v-else :class="`my-1 text-4xl ${color}`" :ref="temperatureRegularContainerTestId">
    {{ temperature }}
  </p>
</template>
