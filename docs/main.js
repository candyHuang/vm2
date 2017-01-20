import Vue from 'vue';
import Vm2 from 'vm2';
import App from './App';
import router from './router';

Vue.use(Vm2);
// 开启debug模式
Vue.config.debug = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
