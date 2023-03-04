<template>
  <div class="error">
    <!-- Top -->
    <div class="top">
      <van-icon name="arrow-left" color="#1776d2" size="0.6rem" />
      <span class="back" @click="backToSomeone()">返回</span>
      <span class="title">ERROR</span>
    </div>

    <!-- Content -->
    <div class="content">
      <img
        class="noResource"
        :src="`${$store.state.SystemConst.resourcesPrefix}${noResource}`"
        alt="noResource"
      />
      <span class="noResourceWarning">抱歉，该资源可能被用户删除了</span>
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

    onBeforeRouteLeave(async (to, from, next) => {
      // oldRouter
      window.sessionStorage.setItem("oldRouter", "error");
      next();
    });

    // router
    const router = useRouter();

    // store
    const store = useStore();

    // noResource
    const noResource = ref("/logo.png");

    // backToSomeone
    const backToSomeone = () => {
      var backToSomeone = window.sessionStorage.getItem("backToSomeone");
      if (backToSomeone == "home") {
        router.push("/home");
      } else if (backToSomeone == "me") {
        router.push("/me");
      } else if(backToSomeone == "message") {
        router.push("/message");
      }
    };

    return {
      router,
      store,
      noResource,
      backToSomeone,
    };
  },
  components: {},
};
</script>

<style lang="less">
.error {
  .top {
    margin: 0 0.2rem;
    padding: 0.2rem 0;
    border: solid 3px black;
    box-shadow: 0 0 15px 1px #000000;
    border-radius: 1rem;
    margin-top: 0.5rem;
    vertical-align: top;
    .van-icon {
      margin-left: 0.2rem;
    }
    .back {
      display: inline-block;
      margin-left: 0.2rem;
      font-size: 0.5rem;
      font-weight: 700;
      color: #1776d2;
    }
    .title {
      display: inline-block;
      margin-left: 2.1rem;
      font-size: 0.5rem;
      font-weight: 700;
    }
  }
  .content {
    text-align: center;
    border: solid 5px black;
    border-radius: 1rem;
    width: 94%;
    height: 100%;
    margin: 0.4rem auto;
    height: 19.2rem;
    box-shadow: 0 0 15px 1px #000000;
    .noResource {
      margin: 0 auto;
      margin-top: 3rem;
      opacity: 0.5;
    }
    .noResourceWarning {
      display: block;
      font-size: 0.5rem;
      font-weight: 600;
      opacity: 0.5;
    }
  }
}
</style>
