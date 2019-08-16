<template>
    <div class="flex-lh card">
        <span class="center circle">
            <van-icon :name="icon" />
        </span>
        <div class="flex-col">
            <p v-text="eventName"></p>
            <p>{{startTime}}-{{endTime}}</p>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    classArr: Array,
    icon: String,
    eventName: String,
    startTime: String,
    endTime: String
  }
};
</script>

<style scoped>
.flex-lh {
  display: flex;
  align-items: center;
}

.flex-col {
  display: flex;
  flex-direction: column;
}
.circle {
  margin: 0 18px;
  background-color: #fff;
}

span .van-icon {
  font-size: 30px;
}
/*事件完成的卡片*/
.fina span .van-icon {
  color: #00ff9a;
  font-size: 30px;
}

.fina .card {
  background-color: orange;
  color: #fff;
}
.fina span .van-icon {
  color: #00ff9a;
}
/*事件未完成的卡片*/
.unfina .circle {
  background-color: orange;
}
</style>

