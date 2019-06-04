import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import HomePublish from '../components/HomePublish.vue'
import HomeList from '../components/HomeList.vue'

export default new Router({
  routes: [
    {
      name: 'Login',
      path: '/',
      component: Login
    },
    {
      name: 'Home',
      path: '/home/publish',
      component: Home,
      children: [
        {
          name: 'HomeList',
          path: '/home/list',
          component: HomeList
        },
        {
          name: 'HomePublish',
          path: '/home/publish',
          component: HomePublish
        }
      ]
    }
  ]
})
