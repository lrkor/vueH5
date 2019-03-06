<template>
  <div class="peopleList">
    <div class="title">已选择的人：</div>
    <div class="list">
      <span class="list-item"
            v-for="(item ,index) in peopleList"
            :key="index"
            :id="item.id"
            @click="remove">
      {{item.name}}
    </span>
    </div>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import {mapState, mapMutations} from 'vuex';

  export default {
    name: "peopleList",
    store,
    data() {
      return {}
    },
    computed: {
      ...mapState(["peopleList"]),
    },
    methods: {
      remove(e){
        let data = {
          click:true,
          id:e.target.id,
          name:e.target.innerText
        };
        this.$store.commit('remove',data);
      }
    }
  }
</script>

<style scoped>
  .title{
    padding-left: 15px;
  }
  .list {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 50px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    padding-left: 15px;
  }

  .list::-webkit-scrollbar {
    display: none;
  }

  .list-item {
    display: flex;
    height: 26px;
    padding: 0 20px;
    line-height: 26px;
    margin-right: 10px;
    font-size: 18px;
    border: 1px solid #f1f1f1;
    border-radius: 18px;
    color: #3396fb;
  }
</style>
