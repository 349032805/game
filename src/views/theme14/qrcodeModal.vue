<template>
  <div class="qrcodeModal" v-if="showQrcode">
      <div class="qrcode-box">
        <img src="../../images/xjbt_qrcode.png">
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    showQrcode: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="less">
.qrcodeModal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);

  .qrcode-box {
    width: 70%;
    margin: 3rem auto 0;
    background: #fff;
    z-index: 300;
    border-radius: 0.12rem;
    text-align: center;
    padding: .4rem 0 .2rem;

    img {
      width: 4.2rem;
      height: 4.2rem;
    }
  }
}
</style>
