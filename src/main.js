import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue';
import router from './router';
import store from './store';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(VueAwesomeSwiper);
Vue.use(ViewUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
