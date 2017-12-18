<template>
  <div class="loading-game">
    <div class="title">
      <transition name="move">
        <img src="../../images/loading_game.png">
      </transition>
    </div>
    <div class="diamond">
      <img src="../../images/load_diamonds.png">
    </div>
    <div class="progress-warpper">
      <loadingBar></loadingBar> 
    </div>
  </div>
</template>
<script>
import loadingBar from "@/components/loadingBar";
export default {
  components: {
    loadingBar
  }
};
</script>
<style lang="less">
// 钻石动画
@keyframes moveDiamond {
  0% {
    left: 3.2rem;
  }
  95% {
    left: 12.4rem;
  }
  100% {
    left: 12.4rem;
  }
}
.loading-game {
  width: 17.786667rem;
  height: 10rem;
  background: url("../../images/background.png") no-repeat center/cover;
  position: relative;
  .title {
    text-align: center;
    img {
      width: 5.306667rem;
      margin-top: 2.626667rem;
    }
  }
  .diamond {
    width: 1.28rem;
    height: 0.986667rem;
    position: absolute;
    top: 6.2rem;
    left: 3.2rem;
    animation: 1.5s moveDiamond linear forwards;
    img {
      width: 1.28rem;
    }
  }
  .progress-warpper {
    width: 10.16rem;
    height: 1.706667rem;
    position: relative;
    margin: 0 auto;
    margin-top: 2.4rem;
  }
}
</style> 