<script lang="ts">
import AirQualityWidgetLargeComponent from '../components/AirQuality/AirQualityWidget.vue';
import WeatherWidgetLargeComponent from '../components/Weather/WeatherWidgetLarge.vue';
import WeatherWidgetTomorrowComponent from '../components/Weather/WeatherWidgetTomorrow.vue';

export default {
  name: 'Home.vue',
  components: {
    WeatherWidgetLargeComponent,
    AirQualityWidgetLargeComponent,
    WeatherWidgetTomorrowComponent,
  },
};
</script>

<template>
  <div class="flex gap-5">
    <div class="flex-initial w-4/6">
      <WeatherWidgetLargeComponent />
    </div>
    <div class="flex-initial w-2/6">
      <WeatherWidgetTomorrowComponent />
    </div>
  </div>
  <div class="flex my-5 gap-5">
    <AirQualityWidgetLargeComponent />
  </div>
</template>
