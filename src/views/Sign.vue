<template>
    <div class="sign">
        <!-- 标题 -->
        <div class="title">
            <van-icon name="arrow-left" @click="goback" />
            <h3>登录</h3>
            <span></span>
        </div>
        <div class="signCon">
            <van-cell-group>
                <van-field v-model="username" left-icon="contact" clearable label="用户名" right-icon="question-o" placeholder="请输入用户名" @click-right-icon="$toast('question')" />
                <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" left-icon="http://123.56.160.242:3002/css/img/login-icon2.png" />
            </van-cell-group>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>


<style scoped>
.sign {
  height: 100%;
  position: relative;
}
.sign .title {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7%;
  background-color: #5b4e60;
  color: #fff;
}
.signCon {
  position: absolute;
  height: 50%;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  top: 50%;
  transform: translate(0, -50%);
  background: pink;
}
</style>

