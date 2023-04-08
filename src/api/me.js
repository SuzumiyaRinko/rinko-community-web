import service from "@/api/index.js"

// 获取userInfo
export function getUserInfo() {
    return service({
        method: "GET",
        url: "/user/userInfo",
    })
}

// 上传头像
export function uploadAvatar(data) {
    return service({
        headers: {
            "Content-Type": "multipart/form-data",
        },
        method: "POST",
        url: "/user/uploadAvatar",
        data,
    })
}

// 修改用户信息
export function updateUserInfo(userUpdateDTO) {
    return service({
        method: "POST",
        url: "/user/updateUserInfo",
        data: userUpdateDTO,
    })
}

// 退出登录
export function logout() {
    return service({
        method: "POST",
        url: "/user/logout",
    })
}