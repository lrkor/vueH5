<template>
  <div class="hello">
    <nav-bar :title="title"></nav-bar>
    <router-link to="/engineering/list">工程圈列表</router-link>
    <router-link to="/patrol/section/list">巡查</router-link>
    <br>
    <br>
    <br>
    <peopleList></peopleList>
    <tree :tree="treeArr"></tree>
  </div>
</template>

<script>
  import tree from "./common/tree";
  import navBar from "./common/navBar";
  import peopleList from "./common/peopleList";
  import {mapState} from 'vuex';
  import store from '@/vuex/store';

  export default {
    name: 'HelloWorld',
    components: {tree, peopleList,navBar},
    store,
    data() {
      return {
        title:'222',
        msg: 'Welcome to Your Vue.js App',
        treeArr: [
          {
            id: 1,
            name: '分组1',
            list: [
              {
                id: 41234123,
                name: '子分组1',
                peopleList: [
                  {
                    id: 11111,
                    name: '刘刘刘刘',
                    checked: false,
                  },
                  {
                    id: 33333,
                    name: 'e',
                    checked: false,
                  },
                  {
                    id: 44444,
                    name: 'w',
                    checked: false,
                  }
                ],
              },
            ],
          },
          {
            id: 12314,
            name: '分组2',
            peopleList: [
              {
                id: 45645,
                name: 'q',
                checked: false
              },
              {
                id: 879,
                name: 'w',
                checked: false
              },
              {
                id: 234,
                name: 'e',
                checked: false
              },
            ],
          },
          {
            id: 2626,
            name: '分组3',
            peopleList: [
              {
                id: 37457,
                name: '1',
                checked: false
              },
              {
                id: 65798798,
                name: '2',
                checked: false
              },
              {
                id: 1234,
                name: '3',
                checked: false
              },
            ],
          }
        ],
      }
    },
    created: function () {
      this.$store.commit('assignment', this.treeArr);
    },
    computed: {
      ...mapState(['peopleList', 'tree']),
    },
    methods: {
      onRead(file) {
        console.log(file)
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
