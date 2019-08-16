<template>
  <div class="target">
    <!-- 标题 -->
    <div class="flex-between title">
      <span></span>
      <h3>目标</h3>
      <span class="add center" @click="goto">+</span>
    </div>
    <!-- 标签 -->
    <van-tabs v-model="active" :line-height="0" :border="false" :swipe-threshold="6" animated :title-active-color="activeColor">
      <!-- 进行中 -->
      <van-tab>
        <div slot="title">
          <span>进行中</span>
        </div>
        <!-- 内容 -->
        <div class="con">
          <!-- 目标卡片 -->
          <Aim aimName="吃早饭" :doneNum="2" :undoneNum="0" :perwidth="50" bgcolor="#f00" />
          <Aim aimName="不喝碳水化合物" :doneNum="1" :undoneNum="0" :perwidth="20" bgcolor="#0f0" />
          <Aim aimName="不熬夜" :doneNum="10" :undoneNum="0" :perwidth="80" bgcolor="#00f" />
        </div>
      </van-tab>
      <!-- 已结束 -->
      <van-tab>
        <div slot="title">
          <span>已结束</span>
        </div>
        <!-- 内容 -->
        <div class="con">
          <!-- 已结束 -->
          <Aim aimName="早起" :doneNum="2" :undoneNum="0" :perwidth="100" bgcolor="#988aa6" />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Aim from "../../components/Aim.vue";
export default {
  data() {
    return {
      active: 0,
      value: 50,
      activeColor: "#000"
    };
  },
  components: {
    Aim
  },
  methods: {
    goto() {
      this.$router.push({
        name: "choose"
      });
    }
  }
};
</script>

<style>
.target .van-tab {
  font-size: 16px;
}
.flex-between {
  display: flex;
  align-items: center;

  justify-content: space-between;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<style scoped>
.title {
  text-align: center;
  padding: 20px 20px 30px;
}
.add {
  width: 30px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  font-size: 25px;
  background: #1ccb9a;
  border-radius: 50%;
}
</style>

