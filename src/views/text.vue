<template>
  <div>
    <van-popup v-model="show">内容</van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2,
      show: true
    };
  }
};
</script>
