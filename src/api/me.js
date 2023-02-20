import service from "@/api/index.js"

// 上传头像
export function uploadAvatar(file) {
    return service({
        headers: {
            "Content-Type": "multipart/form-data"
        },
        method: "POST",
        url: "/file/upload",
        data: {
            file
        }
    })
}