import Vue from 'vue';
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps';

const API_KEY = 'AIzaSyAEgIgqi_yZtPZUAZSX_8Pfe1vbPEtpP-Q';

Vue.use(VueGoogleMaps, {
  load: {
    key: API_KEY,
    libraries: 'geometry',
  },
});
