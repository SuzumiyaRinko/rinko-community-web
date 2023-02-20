<template>
  <div class="bottomNav">
    <div class="item">
      <van-icon name="wap-home-o" size="1rem" />
      <span>首页</span>
    </div>
    <div class="item">
      <van-icon name="wap-home-o" size="1rem" />
      <span>消息</span>
    </div>
    <div class="item">
      <van-icon name="wap-home-o" size="1rem" />
      <span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="less" scoped>
.bottomNav {
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
    font-size: 0.4rem;
    font-weight: 700;
    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>