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