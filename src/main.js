import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'u-reset.css';
import $ from 'jquery';
import echarts from 'echarts';


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$ = $;
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
