<template>
  <div class="choose">
    <!-- 标题 -->
    <div class="title">
      <van-icon name="arrow-left" @click="goback" />
      <h3>选择习惯</h3>
      <span></span>
    </div>
    <!-- 内容：标签 -->
    <div class="chooseCon">
      <van-tabs v-model="activeCho" :swipe-threshold="6" :line-height="0" animated :border="false">
        <van-tab v-for="(item,index) in habitArr" :key="index" :title="item.title">
          <div class="habitCell" v-for="(list,i) in item.habits" :key="i" @click="gotoadd(list)">
            <van-icon name="circle" :color="fontColor[i]" />
            <van-cell :title="list" is-link/>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 自定义 -->
    <div class="fixSelf" @click="gotoadd(null)">+自定义目标</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCho: 0,
      // lineHeight:0,
      habitArr: [
        {
          title: "健康",
          habits: [
            "吃早餐",
            "不喝碳酸饮料",
            "吃水果",
            "戒烟",
            "早睡",
            "多喝水",
            "睡前刷牙",
            "不要久坐",
            "停止吸毒"
          ]
        },
        {
          title: "锻炼",
          habits: [
            "伸展运动",
            "跑步",
            "仰卧起坐",
            "瑜伽",
            "散步",
            "游泳",
            "跳舞",
            "攀岩",
            "踢球",
            "滑雪"
          ]
        },
        {
          title: "学习",
          habits: [
            "阅读",
            "画画",
            "练字",
            "练钢琴",
            "学习",
            "唱歌",
            "写日记",
            "看新闻",
            "写作"
          ]
        },
        {
          title: "效率",
          habits: [
            "记账",
            "回顾当天",
            "制定今日计划",
            "不拖延",
            "不乱花钱",
            "上课不玩手机",
            "保持房间整洁",
            "洗澡后洗衣服",
            "玩手机不超过1小时"
          ]
        },
        {
          title: "思考",
          habits: [
            "记录一件开心的事",
            "没有抱怨，没有批评",
            "圣经",
            "一句话日记",
            "思考自己的梦想",
            "拍照记录生活",
            "控制房间",
            "控制情绪",
            "联系朋友",
            "冥想",
            "不说脏话",
            "对陌生人微笑",
            "关心TA"
          ]
        }
      ],
      fontColor: []
    };
  },
  methods: {
    ramdonColor() {
      // 随机产生50个颜色
      let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
      for (let i = 0; i < 50; i++) {
        let colorstr = "#";
        for (let j = 0; j < 6; j++) {
          let a = parseInt(Math.random() * 16);
          colorstr += arr[a];
        }
        this.fontColor.push(colorstr);
      }
    },
    goback() {
      this.$router.go(-1);
    },
    gotoadd(name) {
      this.$router.push({
        path: `/add/${name}`
      });
    }
  },
  created() {
    this.ramdonColor();
  }
};
</script>


<style scoped>
.choose .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
.choose .van-icon {
  font-size: 17px;
}

.choose .habitCell {
  display: flex;
  height: 100px;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid #e6e6e6;
}
.choose .habitCell .van-cell {
  font-size: 18px;
  color: #000;
}

.choose .habitCell i {
  font-size: 14px;
  /* position: absolute; */
}
.chooseCon {
  margin-bottom: 60px;
}
.fixSelf {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  letter-spacing: 2px;
  font-size: 20px;
  color: #1ccb95;
  background-color: #fff;
  border-top: 1px solid #e6e6e6;
}
</style>
