<template>
  <div class="theme14">
      <div class="form">
        <p class="time-demo">{{timeStr}}</p>
        <div class="box">
          <div class="phone-box">
             <img src="../../images/person_icon.png" class="person-icon">
             <input type="tel" placeholder="请输入您的手机号" maxlength="11" v-model="telephone">
           </div>

          <div class="verifycode-box clearfix">
             <img src="../../images/phone_icon.png" class="phone-icon">
             <input type="tel" placeholder="请输入验证码" maxlength="6" v-model="code">
             <!-- <button type="button">获取验证码</button> -->
             <countDownBtn v-on:send="getPhone" ref="countDownBtn"></countDownBtn>
          </div>

           <div class="password-box">
             <img src="../../images/lock_icon.png" class="lock-icon">
             <input type="text" placeholder="请设置6~12位登录密码" maxlength="12" v-model="password">
           </div>
        </div>

        <div class="opt">
           <!-- 急速借款 -->
           <button type="button" class="sure-btn" @click="submitForm">确定</button>
           <!-- 使用协议 -->
           <div class="agreement">
             <i></i>
             <span>注册即代表同意 <span style="color:#fdff3a" @click="gotoAgreement">《用户使用协议》</span></span>
           </div>

        </div>

      </div>

      <tipModal :showTip.sync="showTip" :message="message"></tipModal>
  </div>
</template>

<script type="text/ecmascript-6">
import countDownBtn from "@/components/countDownBtn";
import tipModal from "@/components/tipModal";
export default {
  data() {
    return {
      telephone: "",
      code: "",
      password: "",
      showTip: false,
      hasRegister: false,
      showSuccTip: false,
      message: "",
      intDiff: 907766,
      timeStr: ""
    };
  },
  created() {
    console.log("进入首页!");
    this.countDown();
  },
  methods: {
    getPhone() {
      let flag = this._verifyPhone();

      if (flag) {
        //按钮倒计时
        this.$refs.countDownBtn.start = true;
        this.$emit("send");

        //发送短信
        this._sendMessage();
      }
    },
    _verifyPhone() {
      let telephone = this.telephone;
      let flag = true;
      if (telephone) {
        if (!/^1\d{10}$/gi.test(telephone)) {
          this.message = "手机号不合法";
          this.showTip = true;
          flag = false;
        }
      } else {
        this.message = "请输入手机号";
        this.showTip = true;
        flag = false;
      }
      return flag;
    },
    _sendMessage() {
      console.log("send message!");
    },
    submitForm() {
      let flag = this._verifyPhone();
      if (!flag) {
        return;
      }
      if (!this.code) {
        this.message = "请输入验证码";
        this.showTip = true;
        return;
      }

      //登录密码
      if (!this.password) {
        this.message = "请输入登录密码";
        this.showTip = true;
        return;
      }

      if (this.password.length < 6 || this.password.length > 12) {
        this.message = "登录密码长度为6~12位";
        this.showTip = true;
        return;
      }

      //提交给后台
      this._commit();
    },
    _commit() {
      console.log("submit!");
      //发送请求
      //....

      this.showSuccTip = true;
    },
    gotoAgreement() {
      this.$router.push({ name: "agreement" });
    },
    countDown() {
      let day = 0,
        hour = 0,
        minute = 0,
        second = 0; //时间默认值
      if (this.intDiff > 0) {
        day = Math.floor(this.intDiff / (60 * 60 * 24));
        hour = Math.floor(this.intDiff / (60 * 60)) - day * 24;
        minute = Math.floor(this.intDiff / 60) - day * 24 * 60 - hour * 60;
        second =
          Math.floor(this.intDiff) -
          day * 24 * 60 * 60 -
          hour * 60 * 60 -
          minute * 60;
      }
      if (minute <= 9) {
        minute = "0" + minute;
      }
      if (second <= 9) {
        second = "0" + second;
      }
      this.timeStr = day + "天" + hour + "时" + minute + "分" + second + "秒";
      console.log(this.timeStr);
      this.intDiff -= 1;
      setTimeout(this.countDown, 1000);
    }
  },
  components: {
    countDownBtn,
    tipModal
  }
};
</script>

<style lang="less">
@import "./theme14.less";
</style>
