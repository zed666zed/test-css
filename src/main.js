import Vue from 'vue'
import App from './App.vue'
import ele from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(ele)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
