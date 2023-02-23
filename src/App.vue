<template>
  <router-view />
  <!-- <van-config-provider :theme="$store.state.theme" />
  </van-config-provider> -->
</template>

<script>
import { onMounted, reactive } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    onMounted(() => {
      // 主题色
      window.sessionStorage.setItem("theme", "light");
    });
    const store = useStore();
    // 设备高度
    const totalHeight = `${document.documentElement.clientHeight}px`;
    return { store, totalHeight };
  },
};
</script>

<style lang="less">
html {
  width: 100%;
  height: var(--totalHeight);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: black;
}
.van-theme-dark body {
  color: #f5f5f5;
  background-color: black;
}
.van-notify {
  font-size: 0.4rem;
  text-align: center;
  font-weight: 600;
  color: #f5f5f5;
}
// .icon {
//   width: 0.5rem;
//   height: 0.5rem;
// }
</style>
