<template>
    <div class="aim">
        <p class="aimTitle" v-text="aimName"></p>
        <div class="tag flex-between">
            <div class="center">
                <span class="tagspan center">
                    √
                </span>
                <span class="ml-10" v-text="doneNum"></span>
            </div>
            <div class="center">
                <span class="tagspan center">
                    ×
                </span>
                <span class="ml-10" v-text="undoneNum"></span>
            </div>
        </div>
        <!-- 进度条 -->
        <div class="slider">
            <div class="slider" :style="{ width: perwidth + '%', background: bgcolor}"></div>
        </div>
        <!-- <van-slider v-model="value" disabled active-color="#f44">
                        </van-slider> -->
        <!-- more -->
        <div class="more">
            <van-icon name="arrow" />
        </div>
    </div>
</template>

<script>
export default {
  props: {
    aimName: String,
    doneNum: Number,
    undoneNum: Number,
    // 百分比1-100
    perwidth: Number,
    // 已完成进度条的背景色
    bgcolor: String
  }
};
</script>

<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.aim {
  height: 130px;
  border-bottom: 1px solid #f9f9f9;
  padding: 30px 20px 15px;
  box-sizing: border-box;
  position: relative;
}
.aim p {
  margin-bottom: 12px;
}
.aimTitle {
  font-size: 18px;
  letter-spacing: 1px;
}

.aim .tag {
  width: 40%;
}
.tagspan {
  width: 16px;
  height: 16px;
  border: 1px solid #868686;
  border-radius: 2px;
  font-size: 15px;
  color: #868686;
}
.ml-10 {
  margin-left: 10px;
  color: #868686;
}

.slider {
  height: 6px;
  border-radius: 3px;
  background-color: #f2f2f2;
  margin-top: 18px;
}
.more {
  position: absolute;
  right: 20px;
  bottom: 45%;
  color: #d1d1d1;
}
</style>

