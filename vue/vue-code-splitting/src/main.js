import $ from 'jquery'
import Vue from 'vue'
import App from './App'
import router from './router' //引入路由配置文件 
// import './assets/css/bootstrap.min.css'
// import './assets/js/bootstrap.min'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router, // 注入到根实例中 
    render: h => h(App)
})