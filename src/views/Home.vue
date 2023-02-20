<template>
  <div class="home">
    <span>这是主页</span>
    <BottomNav />
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { showDialog, showNotify } from "vant";
import BottomNav from "@/components/home/BottomNav.vue"

export default {
  setup() {
    onMounted(() => {
    });
    return {
    };
  },
  components: {
    BottomNav
  },
};
</script>

<style lang="less">
.home {
}
</style>
