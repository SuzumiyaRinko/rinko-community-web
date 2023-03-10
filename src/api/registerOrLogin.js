import service from "@/api/index.js"

// 获取验证码
export function getVerifyCode() {
    return service({
        method: "GET",
        url: "/verifyCode",
    })
}

// 注册
export function register(userRegisterDTO) {
    return service({
        method: "POST",
        url: "/user/register",
        data: userRegisterDTO,
    })
}

// 登录
export function login(userLoginDTO) {
    return service({
        method: "POST",
        url: "/user/login",
        data: userLoginDTO,
    })
}

// 匿名登录
export function loginAnonymously() {
    return service({
        method: "POST",
        url: "/user/loginAnonymously",
    })
}