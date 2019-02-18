<template>
  <div class="list">
    <van-tabs v-model="active"
              color="#3396fb"
              :line-width="75"
              @change="navChange"
              swipeable
              sticky>
      <van-tab v-for="item in navList" :title="item.name" :key="item.id">
        <div class="list_content">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            :error.sync="error"
            error-text="请求失败，点击重新加载"
            :immediate-check="false"
            :offset="20"
            @load="onLoad">
            <div class="list_item" v-for="(item, index) in listContent" :key="index" @click="goDetail(item.id)">
              <div class="pd-15" v-if="item.imageList==null || item.imageList.length==0">
                <div class="list_item_c">
                  <van-row type="flex">
                    <van-col class="title">
                      <span v-if="item.isTop==1" class="to-top">置顶</span>
                      <span v-if="item.isTop==1" class="to-top1"></span>
                      {{item.title}}
                    </van-col>
                  </van-row>
                  <van-row type="flex" class="content_bottom">
                    <van-col>{{item.categoryName}}</van-col>
                    <van-col style="margin-left: 10px">浏览{{item.visitTimes}}</van-col>
                    <van-col style="margin-left: 10px">{{ item.createTime | formatDate }}<span
                      style="opacity: 0">是</span></van-col>
                  </van-row>
                </div>
              </div>
              <div class="pd-15" v-else-if="item.imageList.length>2">
                <div class="list_item_c">
                  <van-row type="flex">
                    <van-col class="title">
                      <span v-if="item.isTop==1" class="to-top">置顶</span>
                      <span v-if="item.isTop==1" class="to-top1"></span>
                      {{item.title}}
                    </van-col>
                  </van-row>
                  <van-row type="flex" justify="space-around" style="font-size: 0.7rem;margin-top: 1rem">
                    <van-col><img class="img" :src="item.imageList[0]" alt=""></van-col>
                    <van-col style="margin: 0 0.015rem"><img class="img" :src="item.imageList[1]" alt=""></van-col>
                    <van-col><img class="img" :src="item.imageList[2]" alt=""></van-col>
                  </van-row>
                  <van-row type="flex" class="content_bottom">
                    <van-col>{{item.categoryName}}</van-col>
                    <van-col style="margin-left: 10px">浏览{{item.visitTimes}}</van-col>
                    <van-col style="margin-left: 10px">{{ item.createTime | formatDate }}<span
                      style="opacity: 0">是</span></van-col>
                  </van-row>
                </div>
              </div>
              <div class="pd-15" v-else>
                <div class="list_item_c">
                  <van-row type="flex" justify="space-around" style="font-size: 14px;">
                    <van-col span="16">
                      <van-row type="flex">
                        <van-col class="title">
                          <span v-if="item.isTop==1" class="to-top">置顶</span>
                          <span v-if="item.isTop==1" class="to-top1"></span>
                          {{item.title}}
                        </van-col>
                      </van-row>
                      <van-row type="flex" class="content_bottom">
                        <van-col>{{item.categoryName}}</van-col>
                        <van-col style="margin-left: 10px">浏览{{item.visitTimes}}</van-col>
                        <van-col style="margin-left: 10px">{{ item.createTime | formatDate }}<span
                          style="opacity: 0">是</span></van-col>
                      </van-row>
                    </van-col>
                    <van-col span="8" style="text-align: right"><img class="img" :src="item.imageList[0]" alt="">
                    </van-col>
                  </van-row>
                </div>
              </div>
            </div>
          </van-list>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import url from '@/apiUrl.js';
  import dateFormat from '@/assets/js/Date'
  import axios from 'axios';

  export default {
    name: "list",
    data() {
      return {
        active: '0',
        navList: [
          {
            id: '1',
            name: '推荐'
          }
        ],
        listContent: [],
        error: false,
        loading: false,
        finished: false,
        immediate: false,
        page: 1,
        size: 10,
        id: '1'
      }
    },
    filters: {
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
    methods: {
      navChange(index) {
        let id = this.navList[index].id;
        this.id = id;
        this.page = 1;
        this.finished = false;
        this.loading = false;
        this.immediate = false;
        this.listContent = [];
        this.queryList(id);
      },

      queryList(id) {
        if (id == '1') {
          this.getRecommend();
        } else {
          this.getOtherList(id);
        }
      },

      //获取推荐列表
      getRecommend() {
        let page = this.page;
        let size = this.size;
        axios.post(url.engineering.articleQuery, {
          isRecommend: '1',
          page: page,
          size: size
        }).then(response => {
          let newListContent = [...this.listContent, ...response.data.data];
          this.listContent = newListContent;
          // 加载状态结束
          this.loading = false;
          if (response.data.data.length < 10) {
            // 数据全部加载完成
            this.finished = true;
          } else {
            this.page = page + 1;
          }
        })
      },

      // 获取其他列表
      getOtherList(id) {
        let size = this.size;
        let page = this.page;
        axios.post(url.engineering.articleQuery, {
          categoryId: id,
          page: page,
          size: size
        }).then(response => {
          let newListContent = [...this.listContent, ...response.data.data];
          this.listContent = newListContent;
          // 加载状态结束
          this.loading = false;
          if (response.data.data.length < 10) {
            // 数据全部加载完成
            this.finished = true;
          } else {
            this.page = page + 1;
          }
        })
      },
      onLoad() {
        // 异步更新数据
        let id = this.id;
        if (this.page == 1) {
          return;
        } else {
          this.queryList(id);
        }
      },

      //进入详情
      goDetail(id) {
        this.$router.push({
          path: `/engineering/detail/${id}`,
        })
      }
    }
  }
</script>

<style scoped>
  .pd-15 {
    padding: 0 15px;
  }

  .list_item_c {
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
  }

  .list_item:hover {
    color: rgba(0, 0, 0, 0.6);
    background-color: #DEDEDE;
  }

  .to-top {
    position: absolute;
    top: 3px;
    left: 0;
    height: 18px;
    line-height: 18px;
    display: inline-block;
    width: 33px;
    background-color: #ff0000;
    color: #fff;
    text-align: center;
    font-size: 12px;
    border-radius: 3px;
  }

  .to-top1 {
    line-height: 18px;
    display: inline-block;
    width: 33px;
    background-color: #fff;
  }

  .title {
    font-size: 18px;
    position: relative;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    color: #222;
  }

  .img {
    width: 5.65rem;
    height: 3.65rem;
  }

  .content_bottom {
    font-size: 12px;
    margin-top: 10px;
    color: #999;
  }
</style>
