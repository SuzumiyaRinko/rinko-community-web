<template>
  <div class="me">
    <h2 style="text-align: center">这是个人页</h2>
    <hr />
    <div class="info">
      <img
        class="avatar item"
        :src="`${$store.state.SystemConst.resourcesPrefix}${info.avatarUrl}`"
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
    <hr />

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
      <van-uploader :after-read="updateAvatar" v-model="avatarList" />
    </van-popup>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { showToast, showDialog } from "vant";
import { getUserInfo, uploadAvatar } from "@/api/me.js";
import BottomNav from "@/components/home/BottomNav.vue";

export default {
  setup() {
    onMounted(async () => {
      var userInfo = (await getUserInfo()).data.data;
      info.id = userInfo.id;
      info.nickname = userInfo.nickname;
      info.gender = userInfo.gender;
      info.isFamous = userInfo.isFamous;
      info.avatarUrl = userInfo.avatar;
      info.followingsCount = userInfo.followingsCount;
      info.followersCount = userInfo.followersCount;
    });
    // 用户数据
    const info = reactive({
      id: "",
      nickname: "田所浩二",
      gender: "",
      isFamous: "",
      avatarUrl: "/default_avatar.png",
      followingsCount: 114,
      followersCount: 514,
    });
    // 更换头像
    const avatarUploadShow = ref(false);
    // 上传头像
    const updateAvatar = async (file) => {
      var data = new FormData();
      data.append("file", file.file);
      var baseResponse = (await uploadAvatar(data)).data;
      console.log(baseResponse);
      if (baseResponse.code != 200) {
        showToast({
          message: "头像上传失败",
          icon: "cross",
        });
        avatarList.value = [];
        return;
      }
      showDialog({
        title: "头像更换成功",
        theme: "round-button",
      }).then(() => {
        avatarUploadShow.value = false;
        avatarList.value = [];
      });
      info.avatarUrl = baseResponse.data;
      console.log("newAvatarUrl", baseResponse.data);
    };
    const avatarList = ref([]);
    return { info, avatarUploadShow, updateAvatar, avatarList };
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
    margin: 0 0.2rem;
    padding: 0.2rem 0;
    // border-top: solid 2px black;
    // border-bottom: solid 2px black;
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
        // display: absolute;
        // right: -2.3rem;
        margin-left: 1rem;
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
