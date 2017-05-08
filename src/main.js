import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router/router.js' 
import $ from 'jquery'
import Vuex from 'vuex'

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
