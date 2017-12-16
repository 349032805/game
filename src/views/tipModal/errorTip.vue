<template>
  <div class="error-tip">
      <div class="error-tip-warpper">
          <div class="content">
              <p>砖石不足, 请立即充值</p>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

}
</script>

<style lang="less">
.error-tip{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4) url("../../images/bg_error.png") no-repeat center;
    background-size: 6.906667rem 2.373333rem;
    .error-tip-warpper{
        width: 5.866667rem;
        height: .48rem;
        margin: 0 auto;
        padding-top: 4.75rem;
        .content{
            font-size: .426667rem;
            color: #e4cd8e;
            p{
                line-height: .48rem;
                text-align: center;
            }
        }
    }
}
</style>
