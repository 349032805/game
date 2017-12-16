<template>
  <div class="loading-bar">  
      <div class="progress-bar">
        <img src="../images/load.png">
        <div class="inner">
          <span class="load-h"></span><span class="load-m"></span><span class="load-f"></span>
        </div>
      </div>
      <div class="text">
        <img src="../images/loading.png">
        <div class="spot clearfix">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less">
// 加载条动画
@keyframes moveLoadBur {
  0% {
    width: 1px;
  }
  95% {
    width: 9.253333rem;
  }
  100% {
    width: 9.253333rem;
  }
}
// 点动画
@keyframes scale {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  80% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0.7;
  }
}
.loading-bar {
  width: 10.16rem;
  height: 1.706667rem;
  position: relative;
  margin: 0 auto;
  .progress-bar {
    width: 100%;
    height: 0.4rem;
    background: #19170a;
    border-radius: 0.2rem;
    position: absolute;
    top: 0.746667rem;
    left: 0;
    z-index: 0;
    img {
      width: 10.16rem;
      position: absolute;
      top: -0.6rem;
      z-index: 10;
    }
    .inner {
      width: 10.053333rem;
      height: 1.706667rem;
      font-size: 0;
      position: absolute;
      top: -0.6rem;
      left: 4px;
      z-index: 0;
      span {
        display: inline-block;
      }
      .load-h {
        width: 0.2rem;
        height: 1.706667rem;
        background: url("../images/load_h.png") no-repeat center/cover;
      }
      .load-m {
        width: 1px;
        height: 1.706667rem;
        background: url("../images/load_m.png") repeat-x center;
        background-size: 1px 1.706667rem;
        animation: 1.5s moveLoadBur linear forwards;
      }
      .load-f {
        width: 1px;
        height: 1.706667rem;
        background: url("../images/load_f.png") no-repeat center/cover;
      }
    }
  }
  .text {
    padding-top: 1.5rem;
    img {
      width: 2.066667rem;
      display: block;
      margin: 0 auto;
    }
    .spot {
      position: absolute;
      top: 1.6rem;
      left: 50%;
      transform: translateX(1.066667rem);
      div {
        width: 0.2rem;
        height: 0.2rem;
        padding: 0.2rem 0.2rem 0.2rem 0;
        background: url("../images/spot.png") no-repeat center;
        background-size: 0.2rem 0.2rem;
        float: left;
      }
      div:nth-child(1) {
        animation: scale 3s 0.2s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      }
      div:nth-child(2) {
        animation: scale 3s 0.4s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      }
      div:nth-child(3) {
        animation: scale 3s 0.6s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      }
    }
  }
}
</style>
