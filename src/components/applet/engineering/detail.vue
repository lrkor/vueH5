<template>
  <div class="details">
    <div class="title">{{title}}</div>
    <div class="title-brief">
      <div class="pull-left">{{categoryName}}</div>
      <div class="pull-right">{{ data | formatDate }}</div>
    </div>
    <div class="content">
      <span v-html="content"></span>
    </div>
  </div>
</template>

<script>
  import url from '@/apiUrl.js';
  import dateFormat from '@/assets/js/Date'
  import axios from 'axios';

  export default {
    name: "detail",
    data() {
      return {
        title: '',
        content: '',
        categoryName: '',
        data: ''
      }
    },
    created() {
      //获取传入的参数
      let id = this.$route.query.id;
      this.get(id);
    },
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return dateFormat.formatDate(date, "yyyy-MM-dd");
      }
    },
    methods: {
      get(id) {
        axios.get(url.engineering.get, {
          params: {
            id: id
          }
        }).then(response => {
          let data = response.data.data;
          this.title = data.title;
          this.content = data.content;
          this.categoryName = data.categoryName;
          this.data = data.createTime;

          let visitTimes = data.visitTimes + 1;
          this.updata(id, visitTimes)
        });
      },

      updata(id, visitTimes) {
        axios.post(url.engineering.updateStatus, {
          id: id,
          visitTimes: visitTimes
        }).then(response => {
        })
      }
    }
  }
</script>

<style scoped>
  .details {
    padding: 0 0.75rem;
  }

  .title-brief {
    margin-top: 0.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    border-bottom: 1px solid #e8e8e8;
    font-size: 12px;
    color: #999;
  }

  .pull-left {
    float: left;
  }

  .pull-right {
    float: right;
  }

  .title {
    font-size: 18px;
    color: #222;
    margin-top: 0.5rem;
    font-weight: 700;
  }

  .content {
    padding-top: 10px;
  }
</style>
