<template>
  <div class="theme14">
    <img src="../../images/bg_test.png" class="banner">
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
