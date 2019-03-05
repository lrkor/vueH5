<template>
  <div class="tree">
    <van-collapse v-model="activeNames">
      <van-collapse-item v-for="(item,index) in tree" :key="index" :title="item.name" :name="index">
        <div v-if="item.list">
          <tree :tree="item.list"></tree>
        </div>
        <div v-else>
          <div v-for="(item1 ,index1) in item.peopleList" :key="index1">
            <van-checkbox v-model="item1.checked" @change="check(item1.checked,item1.name)">{{item1.name}}</van-checkbox>
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>

  </div>
</template>

<script>
  export default {
    name: "tree",
    props:['tree'],
    data() {
      return {
        selectedArr:[],
        activeNames: ['0'],
      }
    },
    methods: {
      check(val,name){
        if(val){
          this.selectedArr.push(name);
        }else {
          let index = this.selectedArr.indexOf(name);
          this.selectedArr.splice(index,1);
        }
      }
    }
  }
</script>

<style scoped>

</style>
