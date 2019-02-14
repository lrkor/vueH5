<template>
  <div class="list">
    <van-tabs v-model="active"
              color="#ddd"
              @click="navClick"
              animated
              swipeable>
      <van-tab v-for="item in navList" :title="item.name" :key="item.id">
        <div class="list_content">
          <div v-for="item in listContent" :key="item.id">
            <div class="border_bottom" v-if="item.imageList==null || item.imageList.length==0">
              <van-row type="flex">
                <van-col class="title" >
                  <span v-if="item.isTop==1" class="to-top">置顶</span>
                  <span v-if="item.isTop==1" class="to-top1"></span>
                  {{item.title}}
                </van-col>
              </van-row>
              <van-row type="flex" style="font-size: 14px;margin-top: 20px">
                <van-col>{{item.categoryName}}</van-col>
                <van-col style="margin-left: 20px">浏览{{item.visitTimes}}</van-col>
                <van-col style="margin-left: 20px">{{ item.createTime | formatDate }}</van-col>
              </van-row>
            </div>
            <div v-else-if="item.imageList.length>2">

              3

            </div>
            <div>

              1

            </div>

          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import url from '@/apiUrl.js';
  import dateFormat from '@/assets/Date'
  import axios from 'axios';

  export default {
    name: "list",
    data() {
      return {
        active: '1',
        navList: [
          {
            id: '1',
            name: '推荐'
          }
        ],
        listContent:[]
      }
    },
    filters:{
      formatDate(time) {
        let date = new Date(time);
        return dateFormat.formatDate(date, "yyyy-MM-dd");
      }
    },
    created() {
      axios.post(url.engineering.articleCategoryQuery, {
        status: '1'
      }).then(response => {
        let newNavData = [...this.navList, ...response.data.data];
        this.navList = newNavData;
      });
      this.getRecommend();
    },
    methods:{
      navClick(index) {
        let id = this.navList[index].id;
        console.log(id);
        this.queryList(id);
      },

      queryList(id){
        if(id=='1'){
          this.getRecommend();
        }else {
          this.getOtherList(id);
        }
      },

      //获取推荐列表
      getRecommend(){
        axios.post(url.engineering.articleQuery, {
          isRecommend: '1'
        }).then(response => {
          this.listContent = response.data.data;
        })
      },

      // 获取其他列表
      getOtherList(id){
        axios.post(url.engineering.articleQuery, {
          categoryId: id
        }).then(response => {
          this.listContent = response.data.data;
        })
      }
    }
  }
</script>

<style scoped>
  .to-top{
    position: absolute;
    top: 4px;
    left: 0;
    height: 0.85rem;
    line-height: 0.85rem;
    display: inline-block;
    width: 1.6rem;
    background-color: #ff0000;
    color: #fff;
    text-align: center;
    font-size: 0.6rem;
    border-radius: 0.15rem;
  }
  .to-top1{
    line-height: 0.85rem;
    display: inline-block;
    width: 1.6rem;
    background-color: #fff;
  }
  .list_content{
    padding: 5px 15px;
  }
  .title{
    font-size: 18px;
    position: relative;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    color: #222;
  }
  .border_bottom{
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  }
</style>
