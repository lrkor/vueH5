import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

import HelloWorld from '@/components/HelloWorld'
//工程圈
import engineeringList from '@/components/applet/engineering/list'
import engineeringDetail from '@/components/applet/engineering/detail'

//巡查
import patrolIndex from '@/components/applet/patrol/index'
import PCAdd from '@/components/applet/patrol/checkAdd'
import PCDetail from '@/components/applet/patrol/checkDetail'
import PCList from '@/components/applet/patrol/checkList'
import PRAdd from '@/components/applet/patrol/rectificationAdd'
import PRDetail from '@/components/applet/patrol/rectificationDetail'
import PSList from '@/components/applet/patrol/sectionList'

import signature from '@/components/applet/demo/signature'

Vue.use(Router);

const routes = [
  {
    path: '/', name: 'HelloWorld', component: HelloWorld
  },

  //工程圈
  {
    path: '/engineering/list', name: 'engineeringList', component: engineeringList,
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
    path: '/engineering/detail', name: 'engineeringDetail', component: engineeringDetail,
    meta: {
      title: '工程圈'
    }
  },

  //  巡查

  {
    path: '/patrol', name: 'patrolIndex', component: patrolIndex,
    children:[
      {
        path: 'check/add', name: 'PCAdd', component: PCAdd,
        meta: {
          title: '安全检查',
        }
      },
      {
        path: 'check/detail', name: 'PCDetail', component: PCDetail,
        meta: {
          title: '检查详情',
        }
      },
      {
        path: 'check/list', name: 'PCList', component: PCList,
        meta: {
          title: '检查记录',
        }
      },
      {
        path: 'rectification/add', name: 'PRAdd', component: PRAdd,
        meta: {
          title: '生成整改通知单',
        }
      },
      {
        path: 'rectification/detail', name: 'PRDetail', component: PRDetail,
        meta: {
          title: '整改详情',
        }
      },
      {
        path: 'section/list', name: 'PSList', component: PSList,
        meta: {
          title: '安全检查',
        }
      },
    ]
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
];

const router = new Router({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {//如果设置标题，拦截后设置标题
    document.title = to.meta.title;
    store.commit('changeTitle', to.meta.title);
  }
  next();
});

export default router;




