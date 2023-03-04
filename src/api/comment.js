import service from "@/api/index.js"

// 查询评论
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

// 删除
export function deleteCommentAPI(commentId) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "DELETE",
        url: `/comment/delete/${commentId}`,
    })
}

// 点赞
export function likeAPI(commentId) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "POST",
        url: `/comment/like/${commentId}`,
    })
}

// 发送评论
export function commentAPI(commentInsertDTO) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "POST",
        url: "/comment",
        data: commentInsertDTO,
    })
}

// 判断是否已点赞
export function hasLikeAPI(commentId) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: `/comment/hasLike/${commentId}`,
    })
}

// 根据commentId获取post
export function getPostByCommentId(commentId) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: `/post/getPostByCommentId/${commentId}`,
    })
}

// 根据commentId获取comment
export function getCommentByCommentId(commentId) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: `/comment/${commentId}`,
    })
}