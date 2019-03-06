<template>
  <div class="tree">
    <van-collapse v-model="activeNames">
      <van-collapse-item v-for="(item,index) in tree" :key="index" :title="item.name" :name="index">
        <div v-if="item.list">
          <radioTree :tree="item.list"></radioTree>
        </div>
        <div v-else class="checkboxGroup">
          <div>
            <van-radio-group v-model="radio">
              <van-cell
                v-for="(item1 ,index1) in item.peopleList"
                :key="index1"
                :id="item1.id"
                :title="item1.name" clickable @click="check(item1.checked,item1.name,item1.id)"
                @change="check(item1.checked,item1.name,item1.id)">
                <van-radio :name="item1.id" />
              </van-cell>
            </van-radio-group>
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>

  </div>
</template>

<script>
  import store from '@/vuex/store';
  export default {
    name: "radioTree",
    props:['tree'],
    store,
    data() {
      return {
        selectedArr:[],
        activeNames: ['0'],
        result:[],
        radio:''
      }
    },
    computed:{
    },
    methods: {
      check(val,name,id){
        this.radio = id;
        console.log(this.radio);
        let data = {
          id:id,
          name:name
        };
      },
    }
  }
</script>

<style scoped>
  .checkboxGroup{
    font-size: 18px;
    border-top: 1px solid #ebedf0;
  }
</style>
