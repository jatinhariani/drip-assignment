import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import Signup from '@/components/Signup'
import GetStarted from '@/components/GetStarted'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Root,
      children: [
        {
          path: '',
          name: 'get-started',
          component: GetStarted
        },
        {
          path: 'signup',
          name: 'signup',
          component: Signup
        }
      ]
    }
  ]
})
