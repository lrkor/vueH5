<template>
  <div class="section_list">
    <van-cell
      v-for="(item,index) in list"
      :key="index"
      :title="item.name" is-link :to="{path:'/patrol/check/list',query:{ id:item.id}}"/>
  </div>
</template>

<script>
  export default {
    name: "sectionList",
    data() {
      return {
        list:[
          {
            id:1,
            name:'南通一标',
          },
          {
            id:2,
            name:'南通一标',
          },
          {
            id:3,
            name:'南通一标',
          },
          {
            id:4,
            name:'南通一标',
          },
        ],
      }
    }
  }
</script>

<style scoped>
  .section_list{
    border-bottom: 1px solid #ebedf0;
  }
</style>
