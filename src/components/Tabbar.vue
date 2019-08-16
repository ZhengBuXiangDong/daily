<template>
    <div class="tabbar">
        <van-tabbar v-model="active" active-color="#00ff9a">
            <van-tabbar-item icon="notes-o" to='/'></van-tabbar-item>
            <van-tabbar-item icon="aim" to='target'></van-tabbar-item>
            <van-tabbar-item icon="star-o" to='log'></van-tabbar-item>
            <van-tabbar-item icon="manager-o" to='mine'></van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>


<style >
.tabbar .van-tabbar-item__icon .van-icon {
  font-size: 1.5rem;
}
</style>


