<template>
    <div class="shop">
        <div class="selections">
            <router-link  to="/shop/buyDiamonds" class="tab-items diamond-recharge">
            钻石充值
            </router-link>
            <router-link  to="/shop/buyCoins" class="tab-items gold-recharge">
            金币充值
            </router-link>
            <router-link  to="/" class="tab-items gold-to-diamond">
            币兑钻石
            </router-link>
            <router-link  to="/" class="tab-items diamond-to-gold">
            钻石兑币
            </router-link>
        </div>
        <div class="header">
            <div class="diamonds-count">
                <i class="diamond-icon"></i>
                <span class="count">222222</span>
            </div>
            <div class="promise">充值约定</div>
        </div>
        <div class="broadcast">
        </div>
        <router-view></router-view>
        <!-- <div class="buy-coins">
            <ul>
                <li>
                    <div class="content">
                        <p>790游戏</p>
                        <i class="coin-icon"></i>
                        <span>1000金币</span>
                    </div>
                    <button type="button">￥ 10</button>
                </li>
               <li>
                    <div class="content">
                        <p>790游戏</p>
                        <i class="coin-icon"></i>
                        <span>1000金币</span>
                    </div>
                    <button type="button">￥ 10</button>
                </li>
               <li>
                    <div class="content">
                        <p>790游戏</p>
                        <i class="coin-icon"></i>
                        <span>1000金币</span>
                    </div>
                    <button type="button">￥ 10</button>
                </li>
               <li>
                    <div class="content">
                        <p>790游戏</p>
                        <i class="coin-icon"></i>
                        <span>1000金币</span>
                    </div>
                    <button type="button">￥ 10</button>
                </li>
               <li>
                    <div class="content">
                        <p>790游戏</p>
                        <i class="coin-icon"></i>
                        <span>1000金币</span>
                    </div>
                    <button type="button">￥ 10</button>
                </li>
               <li>
                    <div class="content">
                        <p>790游戏</p>
                        <i class="coin-icon"></i>
                        <span>1000金币</span>
                    </div>
                    <button type="button">￥ 10</button>
                </li>
               <li>
                    <div class="content">
                        <p>790游戏</p>
                        <i class="coin-icon"></i>
                        <span>1000金币</span>
                    </div>
                    <button type="button">￥ 10</button>
                </li>
               <li>
                    <div class="content">
                        <p>790游戏</p>
                        <i class="coin-icon"></i>
                        <span>1000金币</span>
                    </div>
                    <button type="button">￥ 10</button>
                </li>
               <li>
                    <div class="content">
                        <p>790游戏</p>
                        <i class="coin-icon"></i>
                        <span>1000金币</span>
                    </div>
                    <button type="button">￥ 10</button>
                </li>
               <li>
                    <div class="content">
                        <p>790游戏</p>
                        <i class="coin-icon"></i>
                        <span>1000金币</span>
                    </div>
                    <button type="button">￥ 10</button>
                </li>
               
                
            </ul>
        </div> -->
        <div class="footer">
            <ul>
                <li>充值比例：1元=信用钻石</li>
                <li>这里是一些注意事项,简单xxxxxxxxxxxxxxxxxx</li>
                <li>摇摇乐：200个游戏币</li>
            </ul>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {};
</script>
<style lang="less">
.shop {
  position: relative;
  overflow: hidden;
  width: 17.786667rem;
  height: 10rem;
  background: url("../../images/shop_beijing@3x.png") no-repeat center
    center/cover;
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
        line-height: 0.8rem;
        vertical-align: top;
      }
    }
    .promise {
      position: absolute;
      top: 0.076667rem;
      left: 4rem;
      height: 0.8rem;
      line-height: 0.8rem;
      background-color: #302c1e;
      border-radius: 0.4rem;
      padding: 0 0.533333rem;
      color: #928f76;
    }
  }
  .broadcast {
    position: absolute;
    top: 1.333333rem;
    left: 3.4rem;
    width: 10.24rem;
    height: 0.48rem;
    line-height: 0.48rem;
    border-radius: 0.24rem;
    background-color: #302c1e;
  }
//   .buy-coins {
//     position: absolute;
//     display: flex;
//     top: 2.1rem;
//     left: 4rem;
//     width: 13.2rem;
//     height: 6rem;
//     text-align: center;
//     > ul {
//       display: flex;
//       flex-wrap: wrap;
//       justify-content: space-around;
//       width: 100%;
//       li {
//         //   border: 1px solid yellow;
//         position: relative;
//         color: #fffad0;
//         font-size: 0.4rem;
//         .content {
//           width: 2.293333rem;
//           height: 2.6rem;
//           background: url("../../images/shop_bin-beijing@3x.png") no-repeat 0 0/cover;
//           > p {
//             line-height: 1.1rem;
//             color: #fffad0;
//             font-weight: lighter;
//           }
//           > span {
//               display: block;
//               color: gold;
//               line-height: 1.8rem;
//           }

//           .coin-icon {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 2.293333rem;
//             height: 2.6rem;
//             background: url("../../images/shop_bi2@3x.png") no-repeat 0 0/cover;
//           }
//         }
//         button {
//           position: relative;
//           top: -0.3rem;
//           width: 2.266667rem;
//           height: 0.773333rem;
//           color: #fffad0;
//           background: url("../../images/shop_duihuan-anniu@3x.png") no-repeat
//             center center/cover;
//         }
//       }
//     }
//   }
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
      color: #fffad0;
      font-size: 0.32rem;
      justify-content: space-around;
      align-items: center;
      li:nth-child(1) {
        flex: 2;
      }
      li:nth-child(2) {
        flex: 3;
        border-left: 0.013333rem solid #aa996a;
        border-right: 0.013333rem solid #aa996a;
      }
      li:nth-child(3) {
        flex: 2;
      }
    }
  }
}
</style>
