<template>
  <div class="me">
    <h2 style="text-align: center">这是个人页</h2>
    <div class="info">
      <img
        class="avatar item"
        src="../../public/resources/default_avatar.png"
        alt="个人头像"
        @click="avatarUploadShow = true"
      />
      <div class="item">
        <div class="name">
          <span>{{ info.nickname }}</span>
        </div>
        <div>
          <span class="following">关注: {{ info.followingsCount }}</span>
          <span class="follower">粉丝: {{ info.followersCount }}</span>
        </div>
      </div>
      <div class="item">
        <van-icon class="icon" name="arrow" size="0.7rem" />
      </div>
    </div>

    <BottomNav class="BottomNav" />

    <!-- 更换头像 -->
    <van-popup
      v-model:show="avatarUploadShow"
      round
      closeable
      position="bottom"
      :style="{ height: '30%' }"
    >
      <h2>更换头像</h2>
      <van-uploader :after-read="updateAvatar" v-model="showAvatar" />
    </van-popup>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { showDialog, showNotify } from "vant";
import { uploadAvatar } from "@/api/me.js";
import BottomNav from "@/components/home/BottomNav.vue";

export default {
  setup() {
    onMounted(() => {});
    // 用户数据
    const info = reactive({
      nickname: "田所浩二",
      followingsCount: 114,
      followersCount: 514,
    });
    // 更换头像
    const avatarUploadShow = ref(false);
    // 上传头像
    const updateAvatar = async (file) => {
      console.log("正在上传头像");
      // await uploadAvatar(file)
      // 刷新页面
      showDialog({
        title: "头像更换成功",
        message: "确认后将刷新页面",
        theme: "round-button",
      }).then(() => {
        window.location.reload()
      });
    };
    const showAvatar = ref([]);
    return { info, avatarUploadShow, updateAvatar, showAvatar };
  },
  components: {
    BottomNav,
  },
};
</script>

<style lang="less">
.me {
  width: 100%;
  height: 100%;
  .info {
    display: flex;
    align-items: center;
    margin: 1rem 0.2rem;
    padding: 0.2rem 0;
    border-top: solid 2px black;
    border-bottom: solid 2px black;
    .avatar {
      display: inline-block;
      width: 1.6rem;
      height: 1.6rem;
      border: solid 5px black;
      border-radius: 0.8rem;
      margin-left: 0.2rem;
      margin-right: 0.8rem;
    }
    .item {
      display: inline-block;
      .name {
        display: inline-block;
        font-size: 0.6rem;
        font-weight: 700;
      }
      .icon {
        display: absolute;
        right: -2.3rem;
      }
      .follower,
      .following {
        font-size: 0.4rem;
        font-weight: 600;
        margin-right: 0.3rem;
      }
    }
  }
  .van-popup h2 {
    text-align: center;
    margin-top: 0.4rem;
    font-size: 0.5rem;
  }
  .BottomNav {
    position: absolute;
    bottom: 0;
  }
  .van-popup {
    text-align: center;
    .van-uploader {
      --van-uploader-size: 3rem;
      --van-uploader-icon-size: 1.5rem;
      margin-top: 1rem;
    }
  }
}
</style>
