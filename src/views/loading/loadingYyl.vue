<template>
  <div class="loading-yyl">
    
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
  width: 100%;
  height: 100%;
  background: url("../../images/background.png") no-repeat center/cover;
  position: relative;
  .progress-warpper {
    width: 10.16rem;
    height: 1.706667rem;
    position: relative;
    margin: 0 auto;
    margin-top: 2.4rem;
  }
}
</style> 