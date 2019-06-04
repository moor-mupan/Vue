import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import HomePublish from '../components/HomePublish.vue'
import HomeList from '../components/HomeList.vue'
import HomeDetail from '../components/HomeDetail.vue'

export default new Router({
  routes: [
    {
      name: 'Login',
      path: '/',
      component: Login
    },
    {
      name: 'Home',
      path: '/home/publish/:id',
      component: Home,
      children: [
        {
          name: 'HomeList',
          path: '/home/list',
          component: HomeList
        },
        {
          name: 'HomePublish',
          path: '/home/publish/:id',
          component: HomePublish
        },
        {
          name: 'HomeDetail',
          path: '/home/detail/:id',
          component: HomeDetail
        }
      ]
    }
  ]
})
