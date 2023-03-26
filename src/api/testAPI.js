import service from "./index.js"

// 获取验证码
export function testGet() {
    return service({
        method: "GET",
        url: "/test/num",
        params: {
            num: 1,
        }
    })
}