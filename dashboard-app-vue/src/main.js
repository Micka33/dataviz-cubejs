import Vue from 'vue'
import App from './App.vue'
import VueChartkick from "vue-chartkick";
import Chart from "chart.js";


Vue.config.productionTip = false
Vue.use(VueChartkick, { adapter: Chart });

new Vue({
  render: h => h(App),
}).$mount('#app')
