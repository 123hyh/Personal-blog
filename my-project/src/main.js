import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Element from 'element-ui';
Vue.use(Element);
/* 封装axios */
import 'element-ui/lib/theme-chalk/index.css';
import serviceB from '@/service/serviceB';
Vue.prototype.$_http = new serviceB();



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
