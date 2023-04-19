<script lang="ts">
export default {
  name: 'IconContainer',
};
</script>

<template>
  <div
    class="p-2 rounded-full bg-white text-orange-400 min-w-[35px] min-h-[35px] flex justify-center items-center hover:shadow"
  >
    <slot name="icon"></slot>
  </div>
</template>
