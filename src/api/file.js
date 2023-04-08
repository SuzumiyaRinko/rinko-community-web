import service from "@/api/index.js"

// 上传文件
export function uploadFile(data) {
    return service({
        headers: {
            "Content-Type": "multipart/form-data",
        },
        method: "POST",
        url: "/file",
        data,
    })
}

// 删除头像
export function deleteFile(filePath) {
    return service({
        method: "DELETE",
        url: "/file",
        data: filePath,
    })
}