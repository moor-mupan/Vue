import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'Articles',
            path: '/articles',
            component: () => import('../pages/Articles')
        },
        {
            name: 'Publish',
            path: '/publish',
            component: () => import('../pages/Publish')
        },
        {
            name: 'Login',
            path: '/',
            component: () => import('../pages/Login')
        },
        // 页面404
        {
            name: 'NotFound',
            path: '/*',
            component: () => import('../pages/NotFound')
        }
    ]
})