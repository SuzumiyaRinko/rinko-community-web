import { showToast } from "vant";

// 判断是否有权限
export function checkAuthority(baseResponse) {
    if(baseResponse.code == 401) {
        showToast({
            message: "身份过期\n请重新登录",
            icon: "cross",
          });
        return false
    }
    return true
}