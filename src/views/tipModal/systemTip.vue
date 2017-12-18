<template>
  <div class="system-tip">
      <div class="system-tip-warpper">
          <div class="close"></div>
          <div class="content">
              <p>是否跳转支付宝充值?</p>
          </div>
      </div>
      <button></button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

}
</script>

<style lang="less">
.system-tip{
    width: 17.786667rem;
    height: 10rem;
    background: rgba(0, 0, 0, 0.4) url("../../images/bg_system.png") no-repeat center;
    background-size: 12.8rem 6.6rem;
    .system-tip-warpper{
        width: 9.466667rem;
        height: .48rem;
        margin: 0 auto;
        padding-top: 4.05rem;
        .content{
            font-size: .426667rem;
            color: #e4cd8e;
            p{
                line-height: .48rem;
                text-align: center;
            }
        }
    }
    button{
        width: 6.826667rem;
        height: 1.333333rem;
        padding: 0;
        border: none;
        outline: none;
        background: url("../../images/button.png") no-repeat center/cover;
        position: absolute;
        top: 6.4rem;
        left: 5.56rem;
    }
    .close {
      width: 0.786667rem;
      height: 0.746667rem;
      position: absolute;
      top: 2.1rem;
      right: 2.9rem;
      background: url("../../images/shop_guanbi@3x.png") no-repeat
    center/cover;
    }
}
</style>
