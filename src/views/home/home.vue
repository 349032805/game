<template>
  <div class="home">

 	<div class="header">
         <img src="../../images/arrow.png" class="arrow">
         <span class="out-game">退出游戏</span>
         <!-- 游戏中心 -->
         <img src="../../images/game_center.png" class="game-center">
     </div>

    <div class="message-box">
        <div class="notice">
            <img src="../../images/notice.png">
        </div>
        <span class="overflow">鸿运当头，用户XXX在摇摇乐中一把赢了900个信用钻石,用户XXX在摇摇乐中一把赢了900个信用钻石</span>
    </div>

    <div class="item">
        <div class="woman-active">
            <img src="../../images/woman_active.png">
        </div>

        <ul class="game-list">
            <li class="card small-card">
                <img src="../../images/game1.png">
            </li>
             <li class="card active-card">
                <img src="../../images/game2.png" class="active-card">
            </li>
             <li class="card small-card">
                <img src="../../images/game3.png">
            </li>

        </ul>
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
