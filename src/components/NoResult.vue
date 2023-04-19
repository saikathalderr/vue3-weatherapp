<script lang="ts">
import SearchBarComponent from './Header/SearchBar.vue';

export default {
  name: 'NoResults.vue',
  components: {
    SearchBarComponent,
  },
};
</script>

<template>
  <div class="h-96 flex justify-center items-center">
    <div class="flex flex-col justify-start">
      <p class="text-xs font-bold text-slate-400 my-5">
        Something went wrong fetching your location.
        <br />
        try searching manually
      </p>
      <SearchBarComponent />
    </div>
  </div>
</template>
