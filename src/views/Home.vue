<template>
  <div class="home" style="height: 100%;">
    <!-- 路由 -->
    <router-view/>
    <!-- 底部导航 -->
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from "../components/Tabbar.vue";

export default {
  components: {
    Tabbar
  }
};
</script>

