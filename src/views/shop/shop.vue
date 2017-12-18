<template>
    <div class="shop">
      <div class="light-box">
        <div class="light"></div>
      </div>
        <div class="selections">
            <router-link  to="/shop/buyDiamonds" class="tab-items diamond-recharge">
            钻石充值
            </router-link>
            <router-link  to="/shop/buyCoins" class="tab-items gold-recharge">
            金币充值
            </router-link>
            <router-link  to="/shop/coinToDiamond" class="tab-items gold-to-diamond">
            币兑钻石
            </router-link>
            <router-link  to="/shop/diamondToCoin" class="tab-items diamond-to-gold">
            钻石兑币
            </router-link>
        </div>
        <div class="header">
            <div class="diamonds-count">
                <i class="diamond-icon"></i>
                <span class="count">222222</span>
            </div>
            <div class="promise">充值约定</div>
            <div class="close" @click="back"></div>
        </div>
        <div class="broadcast">
          <i class="broadcast-icon"></i>
          <marquee direction=left behavior=scroll>鸿运当头，用户XXX在摇摇乐中一把赢了900个信用钻石,用户XXX在摇摇乐中一把赢了900个信用钻石</marquee>
        </div>
        <router-view></router-view>
        <div class="footer">
            <ul>
                <li>
                  <p>充值比例：1元=信用钻石</p>
                </li>
                <li>
                    <span>注意：</span>
                    <span>这里是一些注意事项,简单xxxxxxxxxxxxxxxxxx这里</span>
                    </li>
                <li>
                  <p>摇摇乐：200个游戏币</p>
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
  methods: {
    back() {
      this.$router.push("/home");
    },
    prevent(e) {
      e.preventDefault();
    }
  },
  mounted() {
    window.addEventListener("touchmove", this.prevent);
  }
};
</script>
<style lang="less">
@keyframes logoMove {
    0% {
        left: -2.333333rem;
    }
   
    100% {
      left: 3.5rem;
    }
  }
.shop {
  position: relative;
  overflow: hidden;
  width: 17.786667rem;
  height: 10rem;
  background: url("../../images/shop_beijing@3x.png") no-repeat center
    center/cover;
  .light-box{
    width: 3.12rem;
    height: .8rem;
    transform: skew(-66deg,3deg) rotate(10deg);
    overflow: hidden;
    position: relative;
    top: .413333rem;
    .light{
      position: relative;
      left: -1.333333rem;
      width: 1.6rem;
      height: 0.8rem;
      background-image: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6), transparent);
      animation: 4s logoMove infinite;
    }
  }
  .selections {
    position: absolute;
    top: 1.7rem;
    width: 3.166667rem;
    .tab-items {
      display: block;
      box-sizing: border-box;
      width: 3.053333rem;
      height: 1.346667rem;
      line-height: 1.15rem;
      font-size: 0.453333rem;
      padding-left: 0.48rem;
      margin-top: 0.333333rem;
      color: #aa996a;
      background: url("../../images/shop_anniu2@3x.png") no-repeat center
        center/cover;
    }
    .active {
      color: #fffad0;
      background-image: url("../../images/shop_anniu1@3x.png");
    }
  }
  .header {
    position: absolute;
    top: 0;
    right: 0;
    width: 14.5rem;
    height: 1.066667rem;
    .diamonds-count {
      position: relative;
      left: 0.733333rem;
      top: 0.076667rem;
      color: #928f76;
      width: 2.4rem;
      font-size: 0.346667rem;
      height: 0.8rem;
      line-height: 0.8rem;
      border-radius: 0.5rem;
      background-color: #302c1e;
      .diamond-icon {
        display: inline-block;
        position: relative;
        top: -0.053333rem;
        width: 0.733333rem;
        height: 0.733333rem;
        background: url("../../images/shop_zuan-geshu@3x.png") no-repeat center
          center/cover;
      }
      .count {
        display: inline-block;
        position: relative;
        height: 0.8rem;
        line-height: 0.9rem;
        vertical-align: top;
      }
    }
    .promise {
      position: absolute;
      font-weight: bold;
      top: 0.076667rem;
      left: 4rem;
      height: 0.8rem;
      line-height: 0.8rem;
      background-color: #302c1e;
      border-radius: 0.4rem;
      padding: 0 0.533333rem;
      color: #928f76;
    }
    .close {
      position: absolute;
      top: 0.16rem;
      right: 0.48rem;
      width: 0.786667rem;
      height: 0.746667rem;
      background: url("../../images/shop_guanbi@3x.png") no-repeat center
        center/cover;
    }
  }
  .broadcast {
    position: absolute;
    top: 1.333333rem;
    left: 3.4rem;
    width: 10.24rem;
    height: 0.58rem;
    line-height: 0.58rem;
    border-radius: 0.24rem;
    background-color: #302c1e;
    .broadcast-icon {
      position: absolute;
      width: 0.666667rem;
      height: 0.48rem;
      background: url("../../images/shop_laba@3x.png") no-repeat center
        center/cover;
    }
    marquee {
      position: relative;
      color: #dac691;
      left: 0.9rem;
      width: 9.3rem;
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.293333rem;
    background-color: #191812;
    ul {
      display: flex;
      height: 1.293333rem;
      text-align: center;
      color: #928f76;
      font-size: 0.32rem;
      justify-content: space-around;
      align-items: center;
      li {
        box-sizing: border-box;
        height: 1.293333rem;
        line-height: 1.293333rem;
      }
      li:nth-child(1) {
        flex: 2;
        padding-top: .27rem;
        p {
          height: 0.8rem;
          line-height: 0.8rem;
          border-right: 0.013333rem solid #aa996a;
        }
      }
      li:nth-child(2) {
        flex: 4;
        span {
          display: inline-block;
        }
        span:nth-child(1) {
          flex: 1;
          height: 0.533333rem;
        }
        span:nth-child(2) {
          flex: 8;
        }
      }
      li:nth-child(3) {
        flex: 2;
        padding-top: .27rem;
        p {
          border-left: 0.013333rem solid #aa996a;
          height: .8rem;
          line-height: .8rem;
        }
      }
    }
  }
}
</style>
