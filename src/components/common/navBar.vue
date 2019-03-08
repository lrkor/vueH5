<template>
  <div class="nav_bar">
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
  export default {
    name: "navBar",
    props: ['title'],
    data() {
      return {}
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
        console.log('返回');
      },
    },
  }
</script>

<style scoped>

</style>
