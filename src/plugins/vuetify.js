import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import Fresa from '../components/icons/Fresa.vue'
import Pera from '../components/icons/Pera.vue'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', //default
    values: {
      fresa: {
        component: Fresa, // you can use string here if component is registered globally
      },
      pera: {
        component: Pera, // you can use string here if component is registered globally
      }
    }
  }
});
