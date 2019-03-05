<template>
  <div class="hello">
    <router-link to="/engineering/list">工程圈列表</router-link>
    <tree :tree="tree"></tree>
    <div><span v-for="(item,index) in $store.state.peopleList" :key="index">{{item}}</span></div>
  </div>
</template>

<script>
  import tree from "./common/tree";

  import store from '@/vuex/store';
export default {
  name: 'HelloWorld',
  components:{tree},
  store,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tree: [
        {
          id: 1,
          name: '分组1',
          list: [
            {
              id:'1',
              name: '子分组1',
              peopleList:[
                {
                  id: 1,
                  name:'刘',
                  checked: false,
                },
                {
                  id: 3,
                  name:'e',
                  checked: false,
                },
                {
                  id: 4,
                  name:'w',
                  checked: false,
                }
              ],
            },
            {
              id:'1',
              name: '子分组1',
              peopleList:[
                {
                  id: 1,
                  name:'刘',
                  checked: false,
                },
                {
                  id: 3,
                  name:'e',
                  checked: false,
                },
                {
                  id: 4,
                  name:'w',
                  checked: false,
                }
              ],
            },
            {
              id:'1',
              name: '子分组1',
              peopleList:[
                {
                  id: 1,
                  name:'刘',
                  checked: false,
                },
                {
                  id: 3,
                  name:'e',
                  checked: false,
                },
                {
                  id: 4,
                  name:'w',
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
              id:'4',
              name: 'q',
              checked: false
            },
            {
              id:'5',
              name: 'w',
              checked: false
            },
            {
              id:'6',
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
              id:'7',
              name: '1',
              checked: false
            },
            {
              id:'8',
              name: '2',
              checked: false
            },
            {
              id:'9',
              name: '3',
              checked: false
            },
          ],
        }
      ],
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
