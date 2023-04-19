<script lang="ts">
export default {
  name: 'Progress.vue',
  props: {
    progress: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
    <div
      class="bg-orange-400 h-2.5 rounded-full dark:bg-blue-500"
      :style="`width: ${progress}%`"
    ></div>
  </div>
</template>
