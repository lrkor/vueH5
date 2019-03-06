<template>
  <div class="hello">
    <router-link to="/engineering/list">工程圈列表</router-link>
    <br>
    <br>
    <br>
    <peopleList></peopleList>
    <tree :tree="tree"></tree>
  </div>
</template>

<script>
  import tree from "./common/tree";
  import peopleList from "./common/peopleList";
  import {mapState} from 'vuex';
  import store from '@/vuex/store';

  export default {
    name: 'HelloWorld',
    components: {tree,peopleList},
    store,
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    computed: {
      ...mapState(['peopleList','tree']),
    },
    methods: {}
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
