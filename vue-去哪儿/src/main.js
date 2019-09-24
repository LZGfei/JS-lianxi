// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入基础字体等样式
//通过build 用@代替
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import App from './App'
import router from './router'
import store from './store'
 
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
//使用swiper插件
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
