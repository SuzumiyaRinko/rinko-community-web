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
        url: `/post/collections/${pageNum}`,
    })
}

// 查询Feeds
export function feedsSearch(pageNum) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: `/post/feeds/${pageNum}`,
    })
}

// 根据postId查询post
export function getPostByPostId(postId) {
    return service({
        method: "GET",
        url: `/post/${postId}`,
    })
}

// 更新
export function updatePostAPI(postUpdateDTO) {
    return service({
        method: "PUT",
        url: "/post/update",
        data: postUpdateDTO,
    })
}

// 删除
export function deletePostAPI(postId) {
    return service({
        method: "DELETE",
        url: `/post/delete/${postId}`,
    })
}

// 点赞
export function likeAPI(postId) {
    return service({
        method: "POST",
        url: `/post/like/${postId}`,
    })
}

// 收藏
export function collectAPI(postId) {
    return service({
        method: "POST",
        url: `/post/collect/${postId}`,
    })
}

// 判断是否已点赞
export function hasLikeAPI(postId) {
    return service({
        method: "GET",
        url: `/post/hasLike/${postId}`,
    })
}

// 判断是否已收藏
export function hasCollectAPI(postId) {
    return service({
        method: "GET",
        url: `/post/hasCollect/${postId}`,
    })
}

// 发布post
export function insertPostAPI(postInsertDTO) {
    return service({
        method: "POST",
        url: "/post/insert",
        data: postInsertDTO,
    })
}