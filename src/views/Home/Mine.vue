<template>
  <div class="mine">
    <!-- 头像和背景图 -->
    <div class="bg">
      <div class="bgimg">
        <div class="edit">
          <van-icon name="edit" />
        </div>
        <div class="ab">
          <van-image round width="6.5rem" height="6.5rem" :src="nullImg" />
          <div class="user">
            <span class="loginBtn usertaxt" v-show="isLogin" @click="gotoSign">登录</span>
            <div class="usertaxt" v-text="username" v-show="!isLogin"></div>
            <!-- 南光太郎 -->
          </div>
        </div>
      </div>

    </div>
    <!-- 单元格 -->
    <div class="mianCell">
      <van-cell title="语言" icon="edit" is-link value="简体中文" size="large" />
      <van-cell title="设置" icon="setting-o" is-link size="large" />
      <van-cell title="桌面挂件" icon="apps-o" is-link size="large" />
      <van-cell title="反馈" icon="envelop-o" is-link size="large" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLogin: true,
      username: "南光太郎",
      userImg: "https://img.yzcdn.cn/vant/cat.jpeg",
      nullImg: "https://b.yzcdn.cn/vant/logo/github.svg"
    };
  },
  methods: {
    gotoSign() {
      this.$router.push("sign");
    }
  }
};
</script>


<style scoped>
.mine {
  height: 100%;
}
.bg {
  height: 40%;
  margin-bottom: 66px;
}
.bgimg {
  position: relative;
  height: 75%;
  width: 100%;
  background: url("../../assets/bg.jpg") no-repeat;
  background-size: cover;
}
.ab {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 80%);
}
.van-image--round {
  border: 3px solid #ffffff;
}
.user {
  margin-top: 10px;
  font-size: 20px;
  letter-spacing: 2px;
  text-align: center;
}
.ab .van-image {
  background: #f8f8f8;
  text-align: center;
}
.mianCell .van-cell--large {
  height: 3.5rem;
}
.van-cell--large .van-cell__title {
  font-size: 17px;
  color: #000;
}
.mianCell .van-cell__left-icon {
  font-size: 17px;
  margin-right: 10px;
  line-height: 25px;
  color: #52bbd5;
}
.mianCell .van-cell:nth-child(2) .van-cell__left-icon {
  color: #44c99e;
}
.mianCell .van-cell:nth-child(3) .van-cell__left-icon {
  color: #e77090;
}
.mianCell .van-cell:nth-child(4) .van-cell__left-icon {
  color: #efbc37;
}
.loginBtn {
  display: block;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #44c99e;
  color: #44c99e;
}
.usertaxt {
  height: 40px;
  line-height: 40px;
}

/*编辑功能*/
.edit {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
}
.edit .van-icon {
  font-size: 30px;
}
</style>
