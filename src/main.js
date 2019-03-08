// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "../src/assets/css/resetui.css"

import {
  Cell, CellGroup, Tabbar, TabbarItem, PullRefresh, Stepper, Tab, Tabs,
  Button, Row, Col, Swipe, SwipeItem, Lazyload, List, Field, NavBar, Collapse,
  CollapseItem, Checkbox, CheckboxGroup, RadioGroup, Radio, Uploader, Icon
} from 'vant'

Vue.use(Cell).use(CellGroup).use(Tabbar).use(TabbarItem)
  .use(Stepper).use(PullRefresh).use(Tab).use(Tabs).use(Field)
  .use(NavBar).use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem)
  .use(Lazyload).use(List).use(Collapse).use(CollapseItem).use(Checkbox)
  .use(CheckboxGroup).use(RadioGroup).use(Radio).use(Uploader).use(Icon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
