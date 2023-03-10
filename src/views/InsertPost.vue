<template>
  <div class="insertPost">
    <!-- Top -->
    <div class="top">
      <van-icon name="arrow-left" color="#1776d2" size="0.6rem" />
      <span class="back" @click="goBack()">返回</span>
      <span class="title">发表POST</span>
      <van-button
        class="commitButton"
        type="primary"
        @click="insertPostShow = true"
        >确认</van-button
      >
    </div>

    <!-- Content -->
    <div class="content">
      <!-- PostTitle -->
      <van-field
        class="postTitle"
        v-model.trim="postInsertDTO.title"
        required
        clearable
        maxlength="39"
        label="标题"
        placeholder="请输入标题（长度为5-39个字）"
      />
      <!-- PostContent -->
      <van-field
        class="postContent"
        v-model.trim="postInsertDTO.content"
        rows="10"
        autosize
        type="textarea"
        maxlength="1000"
        show-word-limit
        placeholder="请输入内容"
      />
      <!-- PostPictures -->
      <van-uploader
        class="postPictures"
        :before-read="beforeRead"
        :after-read="uploadPicture"
        :before-delete="deletePicture"
        preview-size="2.7rem"
        v-model="postPictures"
        multiple
        :max-count="9"
      />
    </div>

    <!-- 发送POST Dialog -->
    <van-dialog
      v-model:show="insertPostShow"
      title="是否确认发表POST"
      show-cancel-button
      confirm-button-text="确认"
      :before-close="onBeforeInsertPostClose"
    >
    </van-dialog>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { showDialog, showNotify, showToast } from "vant";
import { useRouter, onBeforeRouteLeave } from "vue-router";
import { insertPostAPI } from "@/api/post.js";
import { uploadFile, deleteFile } from "@/api/file.js";
import {
  checkAuthority,
  sleep,
  saveEnter2Br4Web,
  saveEnter2Br4Save,
} from "@/util/utils.js";

export default {
  props: ["shareData"],
  setup(props) {
    onMounted(() => {
      var totalHeight = document.documentElement.clientHeight;
      document.querySelector(".content").style.height = `${
        (totalHeight * 88) / 100
      }px`;

      // bottomNav
      props.shareData.bottomNavShow = false;
    });

    onBeforeRouteLeave((to, from, next) => {
      window.sessionStorage.setItem("oldRouter", "/main/insertPost");

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

    const router = useRouter();

    const postInsertDTO = reactive({
      title: "",
      content: "",
      picturesSplit: [],
    });

    const goBack = () => {
      router.go(-1);
    };

    // 上传头像
    const uploadPicture = async (file) => {
      var data = new FormData();
      data.append("file", file.file);
      var baseResponse = (await uploadFile(data)).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }
      if (baseResponse.code != 200) {
        showToast({
          message: "图片上传失败",
          icon: "cross",
        });
        return;
      }

      // 记录返回的filePath
      postInsertDTO.picturesSplit.push(baseResponse.data);
    };
    const postPictures = ref([]);

    const beforeRead = (file) => {
      // 类型
      var validType = [
        "image/gif",
        "image/png",
        "image/jpeg",
        "image/bmp",
        "image/webp",
        "image/x-icon",
        "image/vnd.microsoft.icon",
      ];
      if (validType.indexOf(file.type) == -1) {
        showToast({
          message: "只能上传图片或Gif动图",
          icon: "cross",
        });
        return false;
      }
      // 大小
      // if (file.size > 10 * 1024 * 1024) {
      //   showToast({
      //     message: "文件大小不能超过10MB",
      //     icon: "cross",
      //   });
      //   return false;
      // }

      return true;
    };

    // 取消上传
    const deletePicture = async (file, detail) => {
      postPictures.value.splice(detail.index, 1);
      var deletePicturePath = postInsertDTO.picturesSplit[detail.index];
      postInsertDTO.picturesSplit.splice(detail.index, 1);
      var baseResponse = (await deleteFile(deletePicturePath)).data;
      if (checkAuthority(baseResponse) == false) {
        router.push("/");
      }
    };

    // 发表post确认Dialog
    const insertPostShow = ref(false);

    // onBeforeInsertPostClose
    const onBeforeInsertPostClose = async (action) => {
      if (action === "confirm") {
        // 判断
        if (postInsertDTO.title.length < 5) {
          showToast({
            message: "标题不能少于5个字",
            icon: "cross",
          });
          insertPostShow.value = false;
          return;
        }
        if (postInsertDTO.content == "") {
          showToast({
            message: "内容不能为空",
            icon: "cross",
          });
          insertPostShow.value = false;
          return;
        }

        // 转换回车键
        postInsertDTO.title = saveEnter2Br4Save(postInsertDTO.title);
        postInsertDTO.content = saveEnter2Br4Save(postInsertDTO.content);

        var baseResponse = (await insertPostAPI(postInsertDTO)).data;
        if (checkAuthority(baseResponse) == false) {
          router.push("/");
        }
        if (baseResponse.code != 200) {
          var exMessage = baseResponse.message;
          showToast({
            message: exMessage,
            icon: "cross",
          });
          insertPostShow.value = false;
        }

        // 跳转到个人页
        showDialog({
          title: "POST发表成功",
          theme: "round-button",
        }).then(() => {
          props.shareData.homeStyle = "";
          props.shareData.messageStyle = "";
          props.shareData.meStyle = "color: #1989fa";
          router.push("/main/me");
        });
      }
      insertPostShow.value = false;
    };

    return {
      router,
      postInsertDTO,
      goBack,
      uploadPicture,
      postPictures,
      beforeRead,
      deletePicture,
      insertPostShow,
      onBeforeInsertPostClose,
    };
  },
  components: {},
};
</script>

<style lang="less">
.insertPost {
  .top {
    margin: 0 0.2rem;
    padding: 0.2rem 0;
    border: solid 3px black;
    box-shadow: 0 0 15px 5px #3f3b3b;
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
      margin-left: 1.5rem;
      font-size: 0.5rem;
      font-weight: 700;
    }
    .commitButton {
      position: absolute;
      top: 0.8rem;
      right: 0.8rem;
      font-size: 0.5rem;
      font-weight: 700;
      height: 0.6rem;
    }
  }
  .content {
    width: 96%;
    height: 19.5rem;
    border: solid 3px black;
    border-radius: 1rem;
    box-shadow: 0 0 15px 5px #3f3b3b;
    margin: 0.25rem auto;
    overflow: hidden;
    .postTitle {
      margin: 0 auto;
      margin-top: 0.2rem;
      border-bottom: solid 3px black;
      width: 92%;
      .van-field__label {
        width: 1rem;
      }
    }
    .postContent {
      width: 100%;
      margin: 0.5rem auto;
      margin-top: 0;
      border-bottom: solid 5px rgba(192, 188, 188, 0.5);
      .van-field__control {
        border: solid 3px black;
        max-height: 8.5rem; // 使textarea可以上下滚动
      }
    }
    .postPictures {
      margin-left: 0.4rem;
    }
  }
}
</style>
