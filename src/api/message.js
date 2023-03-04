import service from "@/api/index.js"

// 获取 系统消息/私聊列表
export function getMessages(messageSelectDTO) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: "/message",
        params: messageSelectDTO,
    })
}

// 设置已读
export function setIsRead(messageType, id) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "POST",
        url: `/message/setIsRead/${messageType}/${id}`,
    })
}

// 删除消息
export function deleteMessage(messageType, id) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "DELETE",
        url: `/message/deleteMessage/${messageType}/${id}`,
    })
}