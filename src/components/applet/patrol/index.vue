<template>
  <div class="index">
    <nav-bar :title="patrolTitle"></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navBar from "@/components/common/navBar";
  import {mapState} from 'vuex';
  import store from '@/vuex/store';
  export default {
    name: "index",
    components: {navBar},
    store,
    data() {
      return {}
    },
    computed: {
      ...mapState(['patrolTitle']),
    },

  }
</script>

<style scoped>

</style>
