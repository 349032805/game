<template>
  <div class="home">
 	<div class="header">
         <img src="../../images/arrow.png" class="arrow">
         <span class="out-game">退出游戏</span>
         <!-- 游戏中心 -->
         <img src="../../images/game_center.png" class="game-center">
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  created() {
    console.log("---------create");
  },
  methods: {}
};
</script>

<style lang="less">
@import "./home.less";
</style>
