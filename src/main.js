import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "font-awesome/css/font-awesome.min.css";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'



Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
