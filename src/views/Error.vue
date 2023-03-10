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
  props: ["shareData"],
  setup(props) {
    onMounted(async () => {
      var totalHeight = document.documentElement.clientHeight;
      var noResource = document.querySelector(".noResource");
      if (noResource != null) {
        noResource.style.height = `${(totalHeight * 30) / 100}px`;
      }
      document.querySelector(".content").style.height = `${
        (totalHeight * 88) / 100
      }px`;

      // bottomNav
      props.shareData.bottomNavShow = false;
    });

    onBeforeRouteLeave(async (to, from, next) => {
      window.sessionStorage.setItem("oldRouter", "/main/error");

      // 判断是否退回"/"
      var token = window.sessionStorage.getItem("token");
      if (token == null || token.length == 0) {
        console.log("onBeforeRouteLeave push");
        if (to.fullPath == "/") {
          next();
        } else {
          next("/");
        }
      }

      // bottomNav
      if (
        to.path == "/main/home" ||
        to.path == "/main/message" ||
        to.path == "/main/me"
      ) {
        props.shareData.bottomNavShow = true;
      }

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
      router.push(window.sessionStorage.getItem("backToSomeone"));
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
