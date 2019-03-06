import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import engineeringList from '@/components/applet/engineering/list'
import engineeringDetail from '@/components/applet/engineering/detail'

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
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {//如果设置标题，拦截后设置标题
    document.title = to.meta.title
  }
  next();
});

export default router;




