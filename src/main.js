import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'u-reset.css';
import $ from 'jquery';
import echarts from 'echarts';
import "leaflet/dist/leaflet.css"

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$ = $;
Vue.prototype.$echarts = echarts;

router.beforeEach((to,from,next)=>{
  from;next();
  if(to.meta.title){
    document.title = to.meta.title;
  }else{
    document.title = '学习平台';
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

