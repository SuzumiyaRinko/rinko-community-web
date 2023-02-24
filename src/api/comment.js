import service from "@/api/index.js"

// 查询帖子
export function commentSelect(commentSelectDTO) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: "/comment",
        params: commentSelectDTO,
    })
}