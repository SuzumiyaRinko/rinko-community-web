<template>
  <div class="message">
    <h2>这是消息页</h2>
    <BottomNav class="BottomNav" />
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { showDialog, showNotify } from "vant";
import BottomNav from "@/components/home/BottomNav.vue";

export default {
  setup() {
    onMounted(() => {});
    return {};
  },
  components: {
    BottomNav,
  },
};
</script>

<style lang="less">
.message {
  width: 100%;
  height: 100%;
  .BottomNav {
    position: absolute;
    bottom: 0;
  }
}
</style>
