import service from "@/api/index.js"

// 获取userInfo
export function getUserInfo(userId) {
    return service({
        method: "GET",
        url: "/user/userInfo",
        params: {
            userId,
        },
    })
}

// 关注
export function followAPI(targetId) {
    return service({
        method: "POST",
        url: `/user/follow/${targetId}`,
    })
}

// 判断是否已关注
export function hasFollowAPI(targetId) {
    return service({
        method: "GET",
        url: `/user/hasFollow/${targetId}`,
    })
}