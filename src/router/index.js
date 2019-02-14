import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import engineeringList from '@/components/applet/engineering/list'
import engineeringDetail from '@/components/applet/engineering/detail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/engineering/list',
      name: 'engineeringList',
      component: engineeringList
    },
    {
      path: '/engineering/detail/:id',
      name: 'engineeringDetail',
      component: engineeringDetail
    }
  ]
})
