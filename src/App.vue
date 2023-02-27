<template>
  <!-- <router-view v-slot="{ Component }">
    <transition>
      <keep-alive :include="includeList">
        <component :is="Component" :includeList="includeList" />
      </keep-alive>
    </transition>
  </router-view> -->
  <router-view />
</template>

<script>
import { reactive, watch, toRefs } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    // const state = reactive({
    //   includeList: ["答辩"],
    // });
    // watch(
    //   () => router,
    //   (newVal, oldVal) => {
    //     var from = window.sessionStorage.getItem("oldRouter");
    //     var to = newVal.currentRoute.value.name;
    //     console.log("from", from);
    //     console.log("to", to);

    //     state.includeList = [];
    //     if (from == "post" && to == "home") {
    //       state.includeList.push(to);
    //     }
    //     console.log("keepAlive", state.includeList);
    //   },
    //   { deep: true }
    // );
    return {
      // ...toRefs(state),
    };
  },
};
</script>


<style lang="less">
html {
  width: 100%;
  height: 100%;
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
