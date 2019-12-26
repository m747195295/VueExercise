import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Zj1 from '@/components/Hi1'
import Zj2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hi1',
      component: Zj1
    },
    {
      path: '/hi2',
      component: Zj2
    }
  ]
})
