import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import engineeringList from '@/components/applet/engineering/list'
import engineeringDetail from '@/components/applet/engineering/detail'

Vue.use(Router);

export default new Router({
  base: '/dist/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/engineering/list',
      name: 'engineeringList',
      component: engineeringList,
      meta: {
        pageTitle: '列表页',
        keepAlive: true
      }
    },
    {
      path: '/engineering/detail/:id',
      name: 'engineeringDetail',
      component: engineeringDetail
    }
  ]
})
