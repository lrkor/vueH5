import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//工程圈
import engineeringList from '@/components/applet/engineering/list'
import engineeringDetail from '@/components/applet/engineering/detail'

//巡查
import PCAdd from '@/components/applet/patrol/checkAdd'
import PCDetail from '@/components/applet/patrol/checkDetail'
import PCList from '@/components/applet/patrol/checkList'
import PRAdd from '@/components/applet/patrol/rectificationAdd'
import PRDetail from '@/components/applet/patrol/rectificationDetail'
import PSList from '@/components/applet/patrol/sectionList'

import signature from '@/components/applet/demo/signature'

Vue.use(Router);

const router = new Router({
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
        keepAlive: true,
        title: '工程圈'
      },
      beforeEach: (to, from, next) => {
        /* 路由发生变化修改页面title */
        if (to.meta.title) {
          document.title = to.meta.title;
        }
        next();
      }
    },
    {
      path: '/engineering/detail',
      name: 'engineeringDetail',
      component: engineeringDetail,
      meta: {
        title: '工程圈'
      }
    },

  //  巡查
    {
      path: '/patrol/check/add',
      name: 'PCAdd',
      component: PCAdd,
    },
    {
      path: '/patrol/check/detail',
      name: 'PCDetail',
      component: PCDetail,
    },
    {
      path: '/patrol/check/list',
      name: 'PCList',
      component: PCList,
    },
    {
      path: '/patrol/rectification/add',
      name: 'PRAdd',
      component: PRAdd,
    },
    {
      path: '/patrol/rectification/add',
      name: 'PRDetail',
      component: PRDetail,
    },
    {
      path: '/patrol/section/list',
      name: 'PSList',
      component: PSList,
    },


  //  签字
    {
      path: '/signature',
      name: 'signature',
      component: signature,
      meta: {
        title: '签字'
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {//如果设置标题，拦截后设置标题
    document.title = to.meta.title
  }
  next();
});

export default router;




