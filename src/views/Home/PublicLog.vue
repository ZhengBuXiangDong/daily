<template>
    <div class="today">
        <!-- 公共日志 -->
        <!-- 标题 -->
        <h3 class="title">公共日志</h3>
        <!-- 内容 -->
        <div class="con">
            <LogCard aimName="吃早餐" :peopleNum="656500" icon="fire-o" iconColor="orange" />
            <LogCard aimName="不喝酒" :peopleNum="135900" icon="home-o" iconColor="#58bc58" />
        </div>
    </div>
</template>
<script>
import LogCard from "../../components/LogCard.vue";
export default {
  components: {
    LogCard
  }
};
</script>


<style scoped>
.flex-lh {
  display: flex;
  align-items: center;
}
.title {
  text-align: center;
  padding: 20px;
}
.con {
  border-top: 1px solid #f9f9f9;
  padding: 20px 0 0 20px;
}

/*logCard*/
</style>
