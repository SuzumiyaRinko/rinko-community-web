import service from "@/api/index.js"

// 查询帖子
export function search(postSearchDTO) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: "/post/search",
        params: postSearchDTO,
    })
}