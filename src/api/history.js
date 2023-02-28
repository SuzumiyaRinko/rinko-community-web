import service from "@/api/index.js"

// 存储历史
export function saveHistory(history) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "POST",
        url: "/history",
        data: history,
    })
}

// 读取历史
export function getHistory(historySearchDTO) {
    return service({
        headers: {
            "Authorization": window.sessionStorage.getItem("token"),
        },
        method: "GET",
        url: "/history",
        params: historySearchDTO,
    })
}