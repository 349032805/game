<template>
  <div class="theme14">
    <img src="../../images/bg_test.png" class="banner">
    <div class="page-modal" v-show="showModal">
        <router-link to="/home">首页</router-link>
        <router-link to="/loading/loadingGame">loadingGame</router-link>
        <router-link to="/loading/loadingYYL">loadingYyl</router-link>
        <router-link to="/shop">shop</router-link>
        <router-link to="/carrouselDemo">旋转木马</router-link>
        <router-link to="/agreement">页面1</router-link>
        <button type="button" @click="showTip=true">消息提示</button>
        <button type="button" @click="closeModal">关闭列表</button>
    </div>


    <button type="button" @click="openModal" v-show="showModal == false" class="opt-btn">打开列表</button>

    <!-- 弹出提示框 -->
    <div class="bg-layer" v-show="showTip==true">
      <div class="tip-box">
        <button type="button" @click="showTip=flase">关闭提示</button>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      showModal: true,
      showTip: false
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    openModal() {
      this.showModal = true;
    },
    tip(){

    }
  }
};
</script>

<style lang="less">
@import "./theme14.less";
</style>
