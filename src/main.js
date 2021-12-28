import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/media.scss";

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, {})
Vue.use(VueLodash, { name: 'vLodash' , lodash: lodash })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
