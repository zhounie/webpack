import Vue from 'vue'
import App from './src/App.vue'
import VueRouter from 'vue-router'

import Bar from './src/pages/index.vue'


const routes = [
    {
        path: '/bar',
        component: Bar
    }
]

const router = new VueRouter({
    routes
})



new Vue({
    render: h => h(App)
}).$mount('#app')