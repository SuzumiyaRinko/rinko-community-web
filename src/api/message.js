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
export function setIsRead(messageSetIsReadDTO) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "POST",
        url: "/message/setIsRead",
        data: messageSetIsReadDTO,
    })
}

// 获取当前用户私信列表的总未读消息数
export function notReadCountAPI() {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: "/message/notReadCount",
    })
}

// 删除消息
export function deleteMessage(messageDeleteDTO) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "DELETE",
        url: "/message/deleteMessage",
        data: messageDeleteDTO,
    })
}