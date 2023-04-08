import axios from 'axios'
import {
    checkAuthorityAndPerm,
} from "@/util/utils.js";
import Cookies from "js-cookie";

let service = axios.create({
    baseURL: "http://localhost:8080/", // dev
    // baseURL: "http://192.168.66.150/api-Rinko-Community", // test
    // baseURL: "http://175.178.244.172/api-Rinko-Community", // prod

    // timeout: 3000
})

service.interceptors.request.use((config) => {
    config.headers.Authorization = Cookies.get("authToken"); // authToken
    return config;
})

service.interceptors.response.use((resp) => {
    // 判断authToken过期
    checkAuthorityAndPerm(resp.data)
    // 刷新token
    Cookies.set("authToken", Cookies.get("authToken"), {
        expires: new Date(new Date().getTime() + 30 * 60 * 1000), // 30mins
        secure: true,
    });
    return resp
}, (error) => {
    console.log(error)
})

export default service