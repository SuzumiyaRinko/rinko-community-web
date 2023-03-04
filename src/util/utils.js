import { showToast } from "vant";
import { useRouter } from "vue-router";

const router = useRouter();

// 判断是否有权限
export function checkAuthority(baseResponse) {
    if (baseResponse.code == 401) {
        showToast({
            message: "身份过期\n请重新登录",
            icon: "cross",
        });
        return false;
    }
    return true
}

// 判断是否有资源
export function checkResource(baseResponse) {
    if (baseResponse.code != 200) {
        showToast({
            message: "资源不存在",
            icon: "cross",
        });
        return false;
    }
    return true;
}

// 睡眠
export function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
