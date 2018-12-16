// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import iView from 'iview';
import App from './App';
import Routes from './routes';
import Store from './store';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(iView);

const router = new VueRouter({
  routes: Routes,
  // 模拟浏览器返回顶部行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) { // 通过返回按钮返回
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});

const store = new Vuex.Store(Store);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
});
