/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import {
  faCalendar,
  faCloud,
  faLocationDot,
  faSearch,
  faSpinner,
  faSun,
  faWind,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { vue3Debounce } from 'vue-debounce';

import App from './App.vue';
import clickOutside from './directives/clickOutsideEvent';
import './style.css';

/* add icons to the library */
library.add(faLocationDot);
library.add(faCalendar);
library.add(faSearch);
library.add(faCloud);
library.add(faWind);
library.add(faXmark);
library.add(faSun);
library.add(faSpinner);

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.component('font-awesome-icon', FontAwesomeIcon);
app.directive('debounce', vue3Debounce({ lock: true }));
app.directive('click-outside', clickOutside);
app.mount('#app');
