import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routes'
import i18n from './plugins/i18n'

// Inicio maps
import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css'

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
//  Fin maps

Vue.config.productionTip = false

// router.afterEach((to) => {
//   console.log("hey3")
// });

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
