<template>
  <div class="all">
    <!-- View -->
    <router-view :shareData="shareData" />

    <!-- BottomNav -->
    <div class="bottomNav" v-show="shareData.bottomNavShow">
      <div
        class="item"
        :style="shareData.homeStyle"
        @click="router.push('/main/home')"
      >
        <van-icon name="wap-home-o" size="0.8rem" />
        <span>主页</span>
      </div>
      <div
        class="item"
        :style="shareData.messageStyle"
        @click="router.push('/main/message')"
      >
        <van-icon
          name="chat-o"
          :badge="unreadCountStr(shareData.notReadCount)"
          size="0.8rem"
        />
        <span>消息</span>
      </div>
      <div
        class="item"
        :style="shareData.meStyle"
        @click="router.push('/main/me')"
      >
        <van-icon name="user-o" size="0.8rem" />
        <span>个人</span>
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, watch, reactive, ref } from "vue";
import { showDialog, showNotify, showToast, showImagePreview } from "vant";
import { onBeforeRouteLeave, useRouter } from "vue-router";
import { useStore } from "vuex";
import { notReadCountAPI } from "@/api/message.js";
import { getUserInfo } from "@/api/user.js";
import {
  checkAuthorityAndPerm,
  sleep,
  saveEnter2Br,
  unreadCountStr,
} from "@/util/utils.js";

import Cookies from "js-cookie";

export default {
  setup() {
    onMounted(async () => {
      // var token = window.sessionStorage.getItem("token");
      // if (token) {
      //   router.push("/main/home");
      // }

      var baseResponse = (await getUserInfo()).data;
      if (checkAuthorityAndPerm(baseResponse) == 403) return;
      Cookies.set("myUserInfo", JSON.stringify(baseResponse.data))

      var myUserInfo = baseResponse.data;

      // window.sessionStorage.setItem(
      //   "myUserInfo",
      //   JSON.stringify(baseResponse.data)
      // );

      // ws连接
      var token = Cookies.get("authToken");
      var myUserId = myUserInfo.id;
      // 创建ws对象
      ws = new WebSocket(
        `${store.state.SystemConst.apiPrefix4ws}/wsChat/${myUserId}`,
        token
      );
      // 定义方法
      ws.onopen = () => {
        console.log("ws.onopen()");
      };
      ws.onmessage = (messageEvent) => {
        // 接收message
        var message = JSON.parse(messageEvent.data);
        console.log("message", message);
        shareData.messageQueue4ChangingMessage.unshift(message);
        shareData.messageQueue4ChangingChat.unshift(message);

        // 判断是否改变未读消息条数
        var wsChatTargetId = window.sessionStorage.getItem("wsChatTargetId");
        if (
          message.toUserId != 0 &&
          (wsChatTargetId == null || wsChatTargetId != message.fromUserId)
        ) {
          shareData.notReadCount++;
        }
      };
      ws.onerror = (err) => {
        console.log(err)
      };
      ws.onclose = () => {
        console.log("ws.onclose()");
      };

      // 获取未读对话消息数量
      var baseResponse = (await notReadCountAPI()).data;
      if (checkAuthorityAndPerm(baseResponse) == 403) return;

      shareData.notReadCount = baseResponse.data;

      // 在onMounted里面用，防止变量未初始化就被watch监听
      watch(shareData.messageQueue4Send, async (newVal, oldVal) => {
        if (newVal.length > 0) {
          // 发送消息
          var newMessage = newVal.pop();
          ws.send(JSON.stringify(newMessage));
        }
      });
    });

    onBeforeRouteLeave((to, from, next) => {
      // 断开ws连接
      var token = Cookies.get("token");
      if (token) {
        ws.close();
      }

      next();
    });

    // ws对象
    let ws;

    // router
    const router = useRouter();

    // store
    const store = useStore();

    const shareData = reactive({
      bottomNavShow: true,
      homeStyle: "",
      messageStyle: "",
      meStyle: "",
      notReadCount: 0, // 未读对话消息数量
      messageQueue4ChangingMessage: [],
      messageQueue4ChangingChat: [],
      messageQueue4Send: [],
    });

    return {
      ws,
      router,
      store,
      shareData,
      unreadCountStr,
    };
  },
  components: {},
};
</script>

<style lang="less">
.all {
  .bottomNav {
    position: absolute;
    bottom: 0;
    border: 3px black solid;
    border-top-left-radius: 0.2rem;
    border-top-right-radius: 0.2rem;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 6.5%;
    font-size: 0.4rem;
    font-weight: 700;
    box-shadow: 0 0 15px 1px #000000;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 0.5rem;
    }
    .van-badge {
      margin-top: 0.2rem;
    }
  }
}
</style>
