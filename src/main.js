import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'

// Vue.prototype.baseUrl = '/xybt_guide'

//去除300毫秒的点击延迟
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

