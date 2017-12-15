<template>
  <div class="loading">
    <div class="title">
      <transition name="move">
        <img src="../../images/loading_game.png">
      </transition>
    </div>
    <div class="progress-warpper">
      <img src="../../images/load_diamonds.png" class="diamond">
      <div class="progress-bar">
        <img src="../../images/load.png">
        <div class="inner">
          <span class="load-h"></span><span class="load-m"></span><span class="load-f"></span>
        </div>
      </div>
    </div>
    <div class="text">
      <img src="../../images/loading.png">
      <i class="spot"></i>
    </div>
  </div>
</template>
<script>
 export default {
   
 }
</script>
<style lang="less">
// 加载条动画
@keyframes moveLoadBur {
  0% {
    width: 1px;
  }
  90% {
    width: 9.053333rem;
  }
  100% {
    width: 9.053333rem;
  }
}
// 钻石动画
@keyframes moveDiamond {
  0% {
    left: -0.5rem;
  }
  90% {
    left: 8.5rem;
  }
  100% {
    left: 8.5rem;
  }
}
.loading {
  width: 100%;
  height: 100%;
  background: url("../../images/background.png") no-repeat center/cover;
  .title {
    text-align: center;
    img{
      width: 5.306667rem;
      margin-top: 2.626667rem;
    }
  }
  .progress-warpper{
    width: 10.16rem;
    height: 1.706667rem;
    position: relative;
    margin: 0 auto;
    margin-top: 2.4rem;
    img.diamond{
      width: 1.28rem;
      height: 0.986667rem;
      position: absolute;
      top: -0.253333rem;
      left: -0.5rem;
      animation: 1.5s moveDiamond linear forwards;
    }
    .progress-bar{
      width: 100%;
      height: 0.4rem;
      background: #19170a;
      border-radius: 0.2rem;
      position: absolute;
      top: 0.746667rem;
      left: 0;
      z-index: 0;
      img{
        width: 10.16rem;
        position: absolute;
        top: -0.6rem;
        z-index: 10;
      }
      .inner{
        width: 10.053333rem;
        height: 1.706667rem;
        font-size: 0;
        position: absolute;
        top: -0.6rem;
        left: 4px;
        z-index: 0;
        span{
          display: inline-block;
        }
        .load-h{
          width: 0.2rem;
          height: 1.706667rem;
          background: url("../../images/load_h.png") no-repeat center/cover;
        }
        .load-m{
          width: 1px;
          height: 1.706667rem;
          background: url("../../images/load_m.png") repeat-x center;
          background-size: 1px 1.706667rem;
          animation: 1.5s moveLoadBur linear forwards;
        }
        .load-f{
          width: 1px;
          height: 1.706667rem;
          background: url("../../images/load_f.png") no-repeat center/cover;
        }
      }
    }
    
  }
  .text{
    width: 10.16rem;
    img{
      width: 2.066667rem;
      display: block;
      margin: 0 auto;
    }
  }
}
</style> 