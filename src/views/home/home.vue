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
                <span class="surplus-coins">
                    <span>剩余</span><span>99999</span><span>金币</span>
                </span>
            </li>
             <li class="card small-card">
                <img src="../../images/game3.png">
            </li>
        </ul>
    </div>

    <div class="footer">
        <div class="footer-light"></div>
        <div class="footer-container">
            <div class="account">
                <!-- 头像和手机号 -->
                <div class="head-phone">
                    <img src="../../images/avatar.png" class="head">
                    <div class="phone-box">187XXXX1893</div>
                </div>

                <!-- 钻石余额 -->
                <div class="diamonds-num">
                    <img src="../../images/diamonds.png" class="diamonds">
                    <div class="account-box">999999</div>
                </div>

            </div>

            <!-- 右下角宝箱 -->
            <div class="chest">
                <div class="star"></div>
                <img src="../../images/shopping.png" class="shopping">
                <div class="star-small"></div>
            </div>
        </div>
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
