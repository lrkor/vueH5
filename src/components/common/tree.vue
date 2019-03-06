<template>
  <div class="tree">
    <van-collapse v-model="activeNames">
      <van-collapse-item v-for="(item,index) in tree" :key="index" :title="item.name" :name="index">
        <div v-if="item.list">
          <tree :tree="item.list"></tree>
        </div>
        <div v-else class="checkboxGroup">
          <div v-for="(item1 ,index1) in item.peopleList" :key="index1">
            <van-checkbox v-model="item1.checked" @change="check(item1.checked,item1.name,item1.id)">{{item1.name}}</van-checkbox>
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>

  </div>
</template>

<script>
  import store from '@/vuex/store';
  export default {
    name: "tree",
    props:['tree'],
    store,
    data() {
      return {
        selectedArr:[],
        activeNames: ['0'],
        result:[],
        isInitialize:true,
      }
    },
    computed:{
    },
    methods: {
      check(val,name,id){
        if(this.isInitialize){
          this.$store.commit('assignment',this.tree);
          this.isInitialize = false;
        }

        let data = {
          id:id,
          name:name
        };
        if(val){
          this.$store.commit('add',data);
        }else {
          this.$store.commit('remove',data);
        }
      },
    }
  }
</script>

<style scoped>
  .checkboxGroup{
    padding-bottom: 10px;
    font-size: 18px;
  }
</style>
