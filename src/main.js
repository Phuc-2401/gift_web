import Vue from 'vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue'
import router from './router';
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({});
Vue.config.productionTip = false

new Vue({
  router,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app');
