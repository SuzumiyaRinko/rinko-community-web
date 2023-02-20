import service from "@/api/index.js"

// 某个get请求
export function getXxx(params) {
    return service({
        method: "GET",
        url: "/test/get",
        params,
    })
}

// 某个post请求
// export function postXxx(data) {
//     return service({
//         method: "POST",
//         url: "/test/post",
//         data,
//     })
// }