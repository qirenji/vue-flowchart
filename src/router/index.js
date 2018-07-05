import Vue from 'vue'
import Router from 'vue-router'
import flow from '@/view/flow/flow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/flow'
    },
    {
      path: '/flow',
      name: 'flow',
      component: flow
    }
  ]
})
