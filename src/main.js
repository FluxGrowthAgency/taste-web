import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routes'
import i18n from './plugins/i18n'
import VueMeta from 'vue-meta'

// Inicio maps
import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Meta
Vue.use(VueMeta)

// This part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.config.productionTip = false

// Actualizacion rutas analytics
// router.afterEach((to) => {
//   gtag('config', window.GA_TRACKING_ID, {
//     page_path: to.fullPath,
//     send_page_view: true,
//   });
// });

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
