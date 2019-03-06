<template>
  <div class="hello">
    <router-link to="/engineering/list">工程圈列表</router-link>
    <br>
    <br>
    <br>
    <peopleList></peopleList>
    <tree :tree="treeArr"></tree>
  </div>
</template>

<script>
  import tree from "./common/tree";
  import peopleList from "./common/peopleList";
  import {mapState} from 'vuex';
  import store from '@/vuex/store';

  export default {
    name: 'HelloWorld',
    components: {tree, peopleList},
    store,
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        treeArr: [
          {
            id: 1,
            name: '分组1',
            list: [
              {
                id: '1',
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
            id: 2,
            name: '分组2',
            peopleList: [
              {
                id: '4',
                name: 'q',
                checked: false
              },
              {
                id: '5',
                name: 'w',
                checked: false
              },
              {
                id: '6',
                name: 'e',
                checked: false
              },
            ],
          },
          {
            id: 3,
            name: '分组3',
            peopleList: [
              {
                id: '7',
                name: '1',
                checked: false
              },
              {
                id: '8',
                name: '2',
                checked: false
              },
              {
                id: '9',
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
