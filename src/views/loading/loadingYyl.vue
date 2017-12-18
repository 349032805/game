<template>
  <div class="loading-yyl">
    <div class="yyl-avater">
      <img src="../../images/game3.png" alt="">
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
.loading-yyl {
  width: 17.786667rem;
  height: 10rem;
  background: url("../../images/background.png") no-repeat center/cover;
  position: relative;
  .yyl-avater{
    width: 4.533333rem;
    height: 4.546667rem;
    margin: 0 auto;
    img{
      width: 4.533333rem;
      margin-top: 1.946667rem;
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