<script lang="ts">
import {
  headerContainerTestId,
  headerProfileSectionTestId,
  headerSearchSectionTestId,
} from '../../tests/const';
import ProfileComponent from './Profile.vue';
import SearchBarComponent from './SearchBar.vue';

export default {
  name: 'Header.vue',
  components: {
    ProfileComponent,
    SearchBarComponent,
  },
  setup() {
    return {
      headerContainerTestId,
      headerProfileSectionTestId,
      headerSearchSectionTestId,
    };
  },
};
</script>

<template>
  <div :ref="headerContainerTestId" class="py-10 flex">
    <div class="flex-auto" :ref="headerProfileSectionTestId">
      <ProfileComponent />
    </div>
    <div class="flex-auto" :ref="headerSearchSectionTestId">
      <SearchBarComponent />
    </div>
  </div>
</template>
