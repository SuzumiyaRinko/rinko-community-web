<template>
  <div class="bottomNav">
    <div class="item" @click="router.push('/home')">
      <van-icon name="wap-home-o" size="0.8rem" />
      <span>主页</span>
    </div>
    <div class="item" @click="router.push('/message')">
      <van-icon name="chat-o" size="0.8rem" />
      <span>消息</span>
    </div>
    <div class="item" @click="router.push('/me')">
      <van-icon name="user-o" size="0.8rem" />
      <span>个人</span>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import { showDialog, showNotify, showToast, showImagePreview } from "vant";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import { useStore } from "vuex";
import { checkAuthority, sleep } from "@/util/utils.js";

export default {
  setup() {
    onMounted(async () => {});

    // router
    const router = useRouter();

    // store
    const store = useStore();

    return {
      router,
      store,
    };
  },
  components: {},
};
</script>

<style lang="less">
.bottomNav {
  position: absolute;
  bottom: 0;
  border: 3px black solid;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  font-size: 0.4rem;
  font-weight: 700;
  box-shadow: 0 0 15px 1px #000000;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0.5rem;
  }
}
</style>
