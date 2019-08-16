<template>
  <div class="add-aim">
    <!-- 标题 -->
    <div class="holder">
      <div class="title">
        <van-icon name="arrow-left" @click="goback" />
        <h3>添加目标</h3>
        <span>保存</span>
      </div>
    </div>

    <!-- 添加内容 -->
    <div class="aimcon">
      <!-- 名字和备注 -->
      <div class="icon">
        <van-icon name="aim" />
      </div>
      <input class="inputTex" type="text" placeholder="输入你的目标" v-model="aimname">
      <input class="inputTex" type="text" placeholder="备忘或一句鼓励的话">
      <!-- 目标起始 -->
      <div class="aimTime item">
        <div class="aimH">目标起始</div>
        <div class="timeArea">
          <!-- 开始 -->
          <div class="start">
            <p class="aimh2">开始</p>
            <div class="timeSelect" @click="chooseStart">
              <p v-text="startTime"></p>
              <van-icon name="notes-o" />
            </div>
          </div>
          <!-- 结束 -->
          <div class="end">
            <p class="aimh2">结束</p>
            <div class="timeSelect" @click="chooseEnd">
              <p v-text="endTime"></p>
              <van-icon name="notes-o" />
            </div>
          </div>
        </div>
      </div>
      <!-- 重复方式 -->
      <div class="item">
        <div class="aimH">重复方式</div>
        <p class="aimh2" v-text="chongfu"></p>
        <div class="huadong">
          <div class="week">
            <span v-for="(item,index) in weeks" :key="index" class="spanactive" v-text="item" @click="changeColor($event)"></span>
          </div>
        </div>
      </div>
      <!-- 执行 -->
      <div class="item zhixing">
        <div class="aimH">执行时间</div>
        <div class="timeSelect">
          <p @click="chooseTime">{{zhixingstart}}-{{zhixingend}}</p>
          <van-icon name="exchange" />
        </div>
      </div>

      <!-- 提醒时间 -->
      <div class="item tixing">
        <div class="aimH">提醒时间</div>
        <div class="tixingTime">
          <div class="timeBox" v-for="(item,index) in timeBoxArr" :key="index">
            <span v-text="item" class="tixingNum"></span>
            <i @click="delTixing(index)">×</i>
          </div>
          <div class="addbtn" @click="selectTixing" v-if="showAdd">+</div>
        </div>
      </div>

      <!-- 提醒声音 -->
      <div class="item sound">
        <van-cell title="提示声音" is-link value="欢乐-7s" />
      </div>
    </div>

    <!-- 底部弹出层 -->
    <div class="tanchuceng">
      <van-popup v-model="show" position="bottom" :style="{ height: '40%' }" @close="closePopup">
        <!-- 选择目标起始日期 -->
        <div v-show="showDate">
          <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate" cancel-button-text=" " :title="timeTitle" @confirm="closePopup" @change="endTimeChange($event,eventName)" />
        </div>
        <!-- 选择执行时间 -->
        <div v-show="showTime" style="position: relative;">
          <div class="timeTitle">执行时间</div>
          <div class="timeselect">
            <van-datetime-picker v-model="currentstartTime" type="time" :min-hour="0" :max-hour="24" cancel-button-text=' ' confirm-button-text=' ' @change="zhixingstartTime" />
            <van-datetime-picker v-model="currentendTime" type="time" :min-hour="0" :max-hour="24" cancel-button-text=' ' @confirm="closeZhixing" @change="zhixingendTime" />
          </div>
        </div>
        <!-- 选择提醒时间 -->
        <div v-show="showTixing">
          <van-datetime-picker v-model="currentendTime" type="time" :min-hour="0" :max-hour="24" cancel-button-text=' ' title="提醒时间" @confirm="closeAdd" />
        </div>
      </van-popup>
    </div>

    <!-- 错误提示 -->
    <div v-show="iserror" class="errormeg" v-text="errormeg"></div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      aimname: "",
      weeks: ["日", "一", "二", "三", "四", "五", "六"],
      chongfu: "每天",
      show: false,
      timeTitle: "开始时间",
      currentDate: new Date(),
      minDate: new Date(),
      // startTime=new Date()
      startTime: "",
      endTime: "",
      eventName: "",
      showDate: false,
      currentstartTime: "12:00",
      currentendTime: "13:00",
      showTime: true,
      // 执行时间
      zhixingstart: "12:00",
      zhixingend: "13:00",
      // 错误提示
      iserror: false,
      errormeg: "",
      showTixing: false,
      timeBoxArr: ["12:00"],
      // 提醒时间
      showAdd: true
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    changeColor(event) {
      var el = event.currentTarget;
      if (el.className == "spanactive") {
        el.className = "";
      } else {
        el.className = "spanactive";
      }
      //判断
      let arr = document.getElementsByClassName("spanactive");
      if (arr.length == 7) {
        this.chongfu = "每天";
      } else {
        this.chongfu = "每周";
      }
    },
    // 获取系统时间
    getTime() {
      let date = new Date();
      this.startTime =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      this.endTime =
        date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + date.getDate();
    },
    // 关闭弹出层
    closePopup() {
      this.show = false;
      this.showDate = false;
      this.showTime = false;
      this.showTixing = false;
    },
    // 选择开始时间
    chooseStart() {
      this.show = true;
      this.showDate = true;
      this.eventName = "start";
      this.timeTitle = "开始时间";
    },
    // 选择结束事件
    chooseEnd() {
      this.show = true;
      this.showDate = true;
      this.eventName = "end";
      this.timeTitle = "结束时间";
    },
    // 事件改变
    endTimeChange(e, name) {
      let endTimeArr = e.getValues();
      if (name == "start") {
        this.startTime = endTimeArr.join("-");
      } else if (name == "end") {
        this.endTime = endTimeArr.join("-");
      }
    },
    // 选择事件
    chooseTime() {
      this.show = true;
      this.showTime = true;
    },
    // 执行时间
    zhixingstartTime(e) {
      let endTimeArr = e.getValues();
      this.zhixingstart = endTimeArr.join(":");
    },
    zhixingendTime(e) {
      let endTimeArr = e.getValues();
      this.zhixingend = endTimeArr.join(":");
    },
    closeZhixing() {
      this.show = false;
      this.showDate = false;
      this.showTime = false;
      // 时间选择条件
      if (this.zhixingstart >= this.zhixingend) {
        this.iserror = true;
        setTimeout(
          function() {
            this.iserror = false;
          }.bind(this),
          2000
        );
        this.errormeg = "结束时间必须大于开始时间";
        this.zhixingstart = "12:00";
        this.zhixingend = "13:00";
      }
    },
    // showTixing提醒时间
    selectTixing() {
      this.show = true;
      this.showDate = false;
      this.showTime = false;
      this.showTixing = true;
    },
    closeAdd() {
      // 先关闭弹出层
      this.show = false;
      this.showDate = false;
      this.showTime = false;
      this.showTixing = false;
      if (this.timeBoxArr.length < 3) {
        this.timeBoxArr.push(this.currentendTime);
      }
      if (this.timeBoxArr.length >= 3) {
        this.showAdd = false;
      } else {
        this.showAdd = true;
      }
    },
    delTixing(num) {
      let arr1 = this.timeBoxArr.slice(0, num);
      let arr2 = this.timeBoxArr.slice(num + 1);
      this.timeBoxArr = [...arr1, ...arr2];
      if (this.timeBoxArr.length >= 3) {
        this.showAdd = false;
      } else {
        this.showAdd = true;
      }
    }
  },
  created() {
    this.getTime();
    if (this.$route.params.name != "null") {
      this.aimname = this.$route.params.name;
    }
  }
};
</script>


<style scoped>
.holder {
  overflow: hidden;
  height: 65px;
}
.add-aim .title {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 888;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: space-between;
  padding: 20px;
  background: #5b4e60;
  box-sizing: border-box;
}
.add-aim .van-icon {
  font-size: 17px;
}

.aimcon {
  padding: 0 20px;
}

.aimcon .inputTex {
  display: block;
  width: 100%;
  background-color: #fafafa;
  border: none;
  height: 40px;
  text-align: center;
  margin-bottom: 20px;
}
.add-aim .icon {
  margin: 20px auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;

  background: linear-gradient(to right, #28ce54, #1ec899);
  color: #fff;
}

.add-aim .icon i {
  font-size: 30px;
  line-height: 50px;
}

.aimcon .item {
  margin: 30px 0;
}

.item .aimH {
  font-size: 18px;
  margin-bottom: 20px;
}

.item .aimh2 {
  font-size: 12px;
  color: #aaa;
  margin-bottom: 10px;
}
.aimTime .timeArea {
  display: flex;
  justify-content: space-between;
}

.aimTime .timeArea > div {
  width: 42%;
}

.item .timeSelect {
  width: 100%;
  height: 40px;
  padding: 0 8px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
}
.item .timeSelect p {
  color: #1ec899;
  font-size: 14px;
}
.huadong {
  /* overflow: hidden; */
  overflow-x: auto;
}
.huadong::-webkit-scrollbar {
  display: none;
}
.week {
  width: 200%;
  /* overflow: hidden; */
}
.week span {
  float: left;
  margin-right: 13px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #aaa;
  box-sizing: border-box;
  color: #999;
}
.week .spanactive {
  border: none;
  background-color: #1ec899;
  color: #fff;
}
.zhixing .timeSelect {
  width: 45%;
}

.zhixing .aimH,
.tixing .aimH {
  margin-bottom: 10px;
}

.tixingTime {
  display: flex;
}

.tixingTime .timeBox {
  position: relative;
  width: 75px;
  height: 40px;
  border-radius: 5px;
  box-sizing: border-box;
  color: #fff;
  padding: 0 8px;
  margin-right: 20px;
  background-color: #1ec899;
}
.tixingTime .timeBox span {
  line-height: 40px;
}

.tixingTime .timeBox i {
  position: absolute;
  right: 5px;
  top: -2px;
  font-size: 12px;
}
.tixingTime .timeBox i::after {
  content: "";
  display: block;
  height: 0;
  width: 0;
  border: 13px solid transparent;
  border-top: 9px solid #00000025;
  border-right: 18px solid #00000025;
  position: absolute;
  border-radius: 5px;
  top: 2px;
  right: -5px;
}

.addbtn {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: #ebfff6;
  text-align: center;
  line-height: 40px;
  color: #1ec899;
  font-size: 24px;
}

.sound .van-cell {
  padding-left: 0;
}
.sound .van-cell .van-cell__title {
  font-size: 18px;
}
.sound .van-cell .van-cell__value {
  color: #1ec899;
}

.item:last-child {
  margin-bottom: 10px;
}

/*弹出ceng*/
.timeselect {
  display: flex;
}
.timeselect .van-datetime-picker {
  flex: 1;
}
.timeTitle {
  position: absolute;
  left: 50%;
  top: 0;
  color: #333;
  z-index: 9;
  font-size: 18px;
  line-height: 44px;
  transform: translate(-50%, 0);
}
/*错误提示*/
.errormeg {
  position: fixed;
  white-space: nowrap;
  top: 82%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
}

</style>

<style>
.tanchuceng .van-picker__title {
  font-size: 18px;
}
</style>



