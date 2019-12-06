import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/scss/style.scss';
import { ApiService } from './services/api.service';
import config from '../config/development.json';

Vue.use(BootstrapVue)
Vue.config.productionTip = false

ApiService.init(config.api.baseUrl);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
