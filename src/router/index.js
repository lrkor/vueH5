import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import engineeringList from '@/components/applet/engineering/list'
import engineeringDetail from '@/components/applet/engineering/detail'
// import candidates from '@/components/common/candidates'

Vue.use(Router);

export default new Router({
  // base: '/dist/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    //工程圈
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
      path: '/engineering/detail',
      name: 'engineeringDetail',
      component: engineeringDetail
    },

    // {
    //   path: '/candidates',
    //   name: 'candidates',
    //   component: candidates
    // },

  ]
})
