<template>
  <div class="buy-coins">
    <ul>
      <li>
        <div class="content">
          <p>790游戏</p>
          <i class="coinToDiamond-icon"></i>
          <span>1000币</span>
        </div>
        <button type="button"><span>10钻</span></button>
      </li>
      <li>
        <div class="content">
          <p>790游戏</p>
          <i class="coinToDiamond-icon"></i>
          <span>1000币</span>
        </div>
        <button type="button"><span>10钻</span></button>
      </li>
      <li>
        <div class="content">
          <p>790游戏</p>
          <i class="coinToDiamond-icon"></i>
          <span>1000币</span>
        </div>
        <button type="button"><span>10钻</span></button>
      </li>
      <li>
        <div class="content">
          <p>790游戏</p>
          <i class="coinToDiamond-icon"></i>
          <span>1000币</span>
        </div>
        <button type="button"><span>10钻</span></button>
      </li>
      <li>
        <div class="content">
          <p>790游戏</p>
          <i class="coinToDiamond-icon"></i>
          <span>1000币</span>
        </div>
        <button type="button"><span>10钻</span></button>
      </li>
      <li>
        <div class="content">
          <p>790游戏</p>
          <i class="coinToDiamond-icon"></i>
          <span>1000币</span>
        </div>
        <button type="button"><span>10钻</span></button>
      </li>
      <li>
        <div class="content">
          <p>790游戏</p>
          <i class="coinToDiamond-icon"></i>
          <span>1000币</span>
        </div>
        <button type="button"><span>10钻</span></button>
      </li>
      <li>
        <div class="content">
          <p>790游戏</p>
          <i class="coinToDiamond-icon"></i>
          <span>1000币</span>
        </div>
        <button type="button"><span>10钻</span></button>
      </li>
      <li>
        <div class="content">
          <p>790游戏</p>
          <i class="coinToDiamond-icon"></i>
          <span>1000币</span>
        </div>
        <button type="button"><span>10钻</span></button>
      </li>
      <li>
        <div class="content">
          <p>790游戏</p>
          <i class="coinToDiamond-icon"></i>
          <span>1000币</span>
        </div>
        <button type="button"><span>10钻</span></button>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  created() {
    console.log("---------create");
  },
  methods: {}
};
</script>

<style lang="less">
@rex: 1rem/75;
.buy-coins {
  position: absolute;
  display: flex;
  top: 2.1rem;
  left: 4rem;
  width: 13.2rem;
  height: 6rem;
  text-align: center;
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    li {
      position: relative;
      color: #fffad0;
      font-size: 0.4rem;
      .content {
        width: 2.293333rem;
        height: 2.6rem;
        background: url("../../images/shop_bin-beijing@3x.png") no-repeat 0 0/cover;
        > p {
          line-height: 1.1rem;
          color: #fffad0;
          font-weight: lighter;
        }
        > span {
          display: block;
          font-weight: bold;
          line-height: 1.8rem;
          background: -webkit-linear-gradient(
            top,
            rgb(255, 251, 90) 16%,
            rgb(255, 170, 37) 64%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .coinToDiamond-icon {
          position: absolute;
          top: 0;
          left: 0;
          width: 2.293333rem;
          height: 2.6rem;
          background: url("../../images/shop_bi2@3x.png") no-repeat 0 0/cover;
        }
      }
      button {
        position: relative;
        top: -0.3rem;
        width: 2.266667rem;
        height: 0.773333rem;
        color: #fffad0;
        background: url("../../images/shop_duihuan-anniu@3x.png") no-repeat
          center center/cover;
        > span {
          text-shadow: 1*@rex 2*@rex 0px #333;
        }
      }
    }
  }
}
</style>
