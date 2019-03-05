<template>
  <div class="hello">
    <router-link to="/engineering/list">工程圈列表</router-link>
    <tree :tree="tree"></tree>
  </div>
</template>

<script>
  import tree from "./common/tree";
export default {
  name: 'HelloWorld',
  components:{tree},
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
          // list: [
          //   {
          //     id:'4',
          //     name: 'q',
          //     checked: false
          //   },
          //   {
          //     id:'5',
          //     name: 'w',
          //     checked: false
          //   },
          //   {
          //     id:'6',
          //     name: 'e',
          //     checked: false
          //   },
          // ],
        },
        {
          id: 3,
          name: '分组3',
          // list: [
          //   {
          //     id:'7',
          //     name: '1',
          //     checked: false
          //   },
          //   {
          //     id:'8',
          //     name: '2',
          //     checked: false
          //   },
          //   {
          //     id:'9',
          //     name: '3',
          //     checked: false
          //   },
          // ],
        }
      ],
    }
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
