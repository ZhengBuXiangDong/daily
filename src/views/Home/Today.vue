<template>
  <div class="today" style="height: 100%; background-color: #eef2f3;">
    <!-- 标题 -->
    <h3 class="title">今天</h3>
    <!-- 标签 -->
    <div>
    <van-tabs v-model="active" :line-height="height" :border="false" :swipe-threshold="6" animated :title-active-color="fontColor">
      <!-- 前天 -->
      <van-tab>
        <div slot="title">
          <span>周一</span>
          <span>05</span>
        </div>
        <!-- 内容 -->
        <div class="con">
          <Null/>
        </div>
      </van-tab>
      <!-- 昨天 -->
      <van-tab>
        <div slot="title">
          <span>周二</span>
          <span>06</span>
        </div>
        <!-- 内容 -->
        <div class="con">
          <Null/>
        </div>
      </van-tab>
      <!-- 今天 -->
      <van-tab>
        <!-- tab标题 -->
        <div slot="title">
          <span>周三</span>
          <span>07</span>
        </div>
        <!-- 内容 -->

        <div class="con ">
          <!-- 已完成卡片1 -->
          <Card class="fina" icon="success " eventName="吃早餐 " startTime="8:00 " endTime="9:00 " />
        </div>
      </van-tab>
      <!-- 明天 -->
      <van-tab>
        <div slot="title">
          <span>周四</span>
          <span>06</span>
        </div>
        <!-- 待完成 -->
        <div class="con">
          <!-- 未完成卡片 -->
          <Card class="unfina" icon="fire-o " eventName="吃早餐 " startTime="8:00 " endTime="9:00 " />
        </div>
      </van-tab>
      <!-- 后天 -->
      <van-tab>
        <div slot="title">
          <span>周五</span>
          <span>09</span>
        </div>
        <div class="con null ">
          <van-icon name="closed-eye " />
          <p>暂时没有数据</p>
        </div>
      </van-tab>
    </van-tabs>
    </div>
  </div>
</template>


<script>
// 引入组件
import Card from "../../components/Card.vue";
import Null from "../../components/Null.vue";
export default {
  data() {
    return {
      active: 2,
      height: 0,
      fontColor:'#000'
    };
  },
  components: {
    Card,
    Null
  }
};
</script>

<style>
.title {
  text-align: center;
  padding: 20px 0 30px;
}
.van-tabs--line .van-tabs__wrap {
  height: auto;
}
.van-tab {
  line-height: 22px;
}
.van-tab span {
  text-align: center;
}
.flex-lh {
  display: flex;
  align-items: center;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px 0;
  background-color: #fff;
}
.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.today .van-tabs__nav {
  background-color: #eef2f3;
}
</style>

<style scoped>
.tabbar {
  overflow: hidden;
}
.con {
  padding: 20px;
}
.fina span .van-icon {
  color: #00ff9a;
  font-size: 30px;
}

.unfina span .van-icon {
  color: #fff;
  font-size: 30px;
}
.fina {
  background-color: orange;
  color: #fff;
}
.circle {
  margin: 0 18px;
  background-color: #fff;
}

.unfina .circle {
  background-color: orange;
}
.flex-col {
  height: 50px;
  justify-content: space-between;
}
.null {
  margin-top: 150px;
  color: #ddd;
  font-size: 25px;
  text-align: center;
}
.null .van-icon {
  font-size: 50px;
}
</style>




