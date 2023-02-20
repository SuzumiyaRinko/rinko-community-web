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
        url: "/user/resgiter",
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