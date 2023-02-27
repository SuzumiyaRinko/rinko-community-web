import service from "@/api/index.js"

// 查询帖子
export function postSearch(postSearchDTO) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: "/post/search",
        params: postSearchDTO,
    })
}

// 联想查询
export function suggestionsSearch(searchKey) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: "/post/search/suggestions",
        params: {
            searchKey
        },
    })
}

// 查询收藏列表
export function collectionsSearch(pageNum) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: `/post/getCollections/${pageNum}`,
    })
}

// 删除
export function deletePostAPI(postId) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "DELETE",
        url: `/post/delete/${postId}`,
    })
}

// 点赞
export function likeAPI(postId) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "POST",
        url: `/post/like/${postId}`,
    })
}

// 收藏
export function collectAPI(postId) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "POST",
        url: `/post/collect/${postId}`,
    })
}

// 判断是否已点赞
export function hasLikeAPI(postId) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: `/post/hasLike/${postId}`,
    })
}

// 判断是否已收藏
export function hasCollectAPI(postId) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: `/post/hasCollect/${postId}`,
    })
}