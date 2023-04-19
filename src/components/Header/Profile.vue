<script lang="ts">
import { getGreeting } from '../../helper';
import { headerProfileHelloTestId, headerProfileTimeTestId } from '../../tests/const';

export default {
  name: 'Profile.vue',
  setup() {
    return {
      getGreeting,
      headerProfileHelloTestId,
      headerProfileTimeTestId,
    };
  },
};
</script>

<template>
  <div class="flex">
    <div class="flex-1 text-2xl">
      <h1 class="font-light" :ref="headerProfileHelloTestId">Hello,</h1>
      <h1 class="font-semibold" :ref="headerProfileTimeTestId">
        {{ getGreeting() }}
      </h1>
    </div>
  </div>
</template>
