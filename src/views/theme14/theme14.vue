<template>
  <div class="theme14">
    <img src="../../images/bg_test.png" class="banner">

    <div class="page-modal" v-show="showModal">
<<<<<<< HEAD
        <router-link to="/agreement">首页</router-link>
        <router-link to="/loading/loadingGame">loading</router-link>
=======
        <router-link to="/home">首页</router-link>
        <router-link to="/loading">loading</router-link>
>>>>>>> 28e70047e56cb226039ef22a761efb3ce4059e34
        <router-link to="/agreement">页面1</router-link>
        <router-link to="/agreement">页面1</router-link>
        <router-link to="/agreement">页面1</router-link>
        <router-link to="/agreement">页面1</router-link>
        <button type="button" @click="closeModal">关闭列表</button>
    </div>

    
    <button type="button" @click="openModal" v-show="showModal == false" class="opt-btn">打开列表</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      showModal: true
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    openModal() {
      this.showModal = true;
    }
  }
};
</script>

<style lang="less">
@import "./theme14.less";
</style>
