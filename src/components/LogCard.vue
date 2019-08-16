<template>
    <div class="flex-lh logCard">
        <!-- 图标 -->

        <van-icon :name="icon" :color="iconColor" />

        <div class="flex-col text">
            <p v-text="aimName" class="aimTitle"></p>
            <p class="nums">{{peopleNum}} 人参与</p>
        </div>
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
    peopleNum: Number,
    icon: String,
    iconColor: String
  }
};
</script>


<style scoped>
.logCard {
  position: relative;
  height: 100px;
  /* margin-bottom: 20px; */
}

.logCard > .van-icon {
  width: 50px;
  text-align: center;
  font-size: 40px;
}

.text {
  margin-left: 10px;
}

.logCard .aimTitle {
  font-size: 18px;
  letter-spacing: 1px;
  margin-bottom: 10px;
  /* color: #000; */
}

.logCard .nums {
  color: #868686;
}
/*更多*/
.more {
  position: absolute;
  right: 20px;
  bottom: 45%;
  color: #d1d1d1;
}
</style>

