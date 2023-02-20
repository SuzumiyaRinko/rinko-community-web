<template>
  <div class="registerOrLogin">
    <!-- 主页面 -->
    <div class="top">
      <img class="logo" src="../../public/resources/logo.png" alt="logo" />
      <div class="title">
        <span>Rinko-Community</span>
      </div>
    </div>
    <div class="login">
      <van-button type="primary" @click="loginShow = true">登录</van-button>
    </div>
    <div class="register">
      <van-button type="default" @click="readyToRegister()">注册</van-button>
    </div>
    <div class="bottom">
      <span>SuzumiyaRinko</span>
      <span>CopyRight @114514</span>
    </div>

    <!-- 注册 -->
    <van-dialog
      v-model:show="registerShow"
      title="注册"
      show-cancel-button
      confirm-button-text="注册"
      :before-close="onBeforeRegisterClose"
    >
      <van-form>
        <van-cell-group inset>
          <!-- 账号 -->
          <van-field
            v-model.trim="userRegisterDTO.mail"
            required
            clearable
            label="邮箱"
            left-icon="envelop-o"
            placeholder="请输入邮箱"
            :rules="[{ validator: verifyMail, message: '邮箱格式错误' }]"
          />
          <!-- 密码 -->
          <van-field
            v-model.trim="userRegisterDTO.password"
            type="password"
            required
            clearable
            label="密码"
            left-icon="user-o"
            placeholder="请输入密码"
            :rules="[
              {
                validator: verifyPassword,
                message:
                  '密码格式错误 (长度为8-16，只能由A-Z,a-z,0-9以及下划线组成)',
              },
            ]"
          />
          <!-- 确认密码 -->
          <van-field
            v-model.trim="userRegisterDTO.comfirmPassword"
            type="password"
            required
            clearable
            label="确认密码"
            left-icon="certificate"
            placeholder="请确认密码"
          />
          <!-- 验证码 -->
          <van-field
            v-model.trim="userRegisterDTO.code"
            required
            clearable
            label="验证码"
            left-icon="shield-o"
            placeholder="请输入验证码"
          />
          <div class="verifyCode">
            <img :src="base64Code" alt="验证码" />
            <van-button type="default" @click="reflushCode()"
              >刷新验证码</van-button
            >
          </div>
        </van-cell-group>
      </van-form>
    </van-dialog>

    <!-- 登录 -->
    <van-dialog
      v-model:show="loginShow"
      title="登录"
      show-cancel-button
      confirm-button-text="登录"
      :before-close="onBeforeLoginClose"
    >
      <van-form>
        <van-cell-group inset>
          <!-- 账号 -->
          <van-field
            v-model.trim="userLoginDTO.mail"
            required
            clearable
            label="邮箱"
            left-icon="envelop-o"
            placeholder="请输入邮箱"
            :rules="[{ validator: verifyMail, message: '邮箱格式错误' }]"
          />
          <!-- 密码 -->
          <van-field
            v-model.trim="userLoginDTO.password"
            type="password"
            required
            clearable
            label="密码"
            left-icon="user-o"
            placeholder="请输入密码"
            :rules="[
              {
                validator: verifyPassword,
                message:
                  '密码格式错误 (长度为8-16，只能由A-Z,a-z,0-9以及下划线组成)',
              },
            ]"
          />
        </van-cell-group>
      </van-form>
    </van-dialog>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { showDialog, showNotify } from "vant";
import { getVerifyCode, register } from "@/api/registerOrLogin.js";

export default {
  setup() {
    // router
    const router = useRouter()

    // Dialog开关
    const registerShow = ref(false);
    const loginShow = ref(false);

    // 弹出注册Dialog
    const readyToRegister = async () => {
      // 打开注册Dialog
      registerShow.value = true;
      // 获取验证码
      await reflushCode();
    };

    // 验证码
    let base64Code = ref("");

    // 刷新验证码
    const reflushCode = async () => {
      var baseResponse = (await getVerifyCode()).data;
      var verifyCodeVO = baseResponse.data;
      registerData.correctCode = verifyCodeVO.code;
      base64Code.value = verifyCodeVO.base64Img;
    };

    // 注册数据
    const userRegisterDTO = reactive({
      mail: "",
      password: "",
      comfirmPassword: "",
      code: "", // 用户输入的验证码
      correctCode: "", // 正确的验证码
    });

    // 登录数据
    const userLoginDTO = reactive({
      mail: "",
      password: "",
    });

    // 校验邮箱
    const verifyMail = (val) => {
      var regex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      return regex.test(val);
    };

    // 校验密码
    const verifyPassword = (val) => {
      var regex = /^[A-Za-z0-9_]{8,16}$/;
      return regex.test(val);
    };

    // 注册Dialog关闭前的判断
    const onBeforeRegisterClose = async (action) => {
      if (action === "confirm") {
        // var baseResponse = (await register()).data;
        // if (baseResponse.code != 200) {
        //   var exMessage = baseResponse.message;
        //   return;
        // }
        // 提醒用户激活账号
        showDialog({
          title: "注册成功",
          message: "软件将会发送一个邮件至您的邮箱\n请在30分钟内激活账号",
          theme: "round-button",
        });
      }
      registerShow.value = false;
    };

    // 登录Dialog关闭前的判断
    const onBeforeLoginClose = async (action) => {
      if (action === "confirm") {
        // var baseResponse = (await register()).data;
        // if (baseResponse.code != 200) {
        //   var exMessage = baseResponse.message;
        //   return;
        // }
        // 跳转到主页
        showDialog({
          title: "登录成功",
          message: "确认后将跳转到主页",
          theme: "round-button",
        }).then(() => {
          router.push("/home")
        });
      }
      loginShow.value = false;
    };

    onMounted(() => {
      // 欢迎
      showDialog({
        title: "欢迎使用",
        message: "🥰",
        theme: "round-button",
      }).then(() => {
        // on close
      });
    });

    return {
      router,
      registerShow,
      loginShow,
      readyToRegister,
      base64Code,
      reflushCode,
      userRegisterDTO,
      userLoginDTO,
      verifyMail,
      verifyPassword,
      onBeforeRegisterClose,
      onBeforeLoginClose,
    };
  },
  components: {},
};
</script>

<style lang="less">
.registerOrLogin {
  margin: 0 auto;
  text-align: center;
  .top {
    opacity: 0.8;
    .logo {
      margin: 0 auto;
      display: flex;
    }
    .title {
      text-align: center;
      font-size: 0.8rem;
      font-weight: 700;
      font-family: "Microsoft YaHei";
    }
  }
  .login {
    margin-top: 3rem;
    .van-button {
      width: 75%;
    }
  }
  .register {
    margin-top: 0.5rem;
    .van-button {
      width: 75%;
    }
  }
  .bottom {
    height: 100%;
    margin-top: 3.2rem;
    opacity: 0.8;
    span {
      margin: 0 0.1rem;
      text-align: center;
      font-size: 0.3rem;
      font-weight: 700;
      font-family: "Microsoft YaHei";
    }
  }
  .van-dialog__content {
    width: 100%;
    margin: 0.3rem auto;
  }
  .van-cell__title {
    width: 1.8rem;
  }
  .verifyCode {
    display: flex;
    justify-content: space-between;
    margin: 0 0.8rem;
  }
}
</style>
