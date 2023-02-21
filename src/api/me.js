import service from "@/api/index.js"

// 获取userInfo
export function getUserInfo(userId) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: "/user/userInfo",
        params: {
            userId,
        },
    })
}

// 上传头像
export function uploadAvatar(data) {
    return service({
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "POST",
        url: "/file/upload",
        data,
    })
}