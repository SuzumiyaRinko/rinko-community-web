import axios from 'axios'
import {
    checkAuthorityAndPerm,
} from "@/util/utils.js";

let service = axios.create({
    baseURL: "http://localhost:8080/", // dev
    // baseURL: "http://192.168.66.150/api-Rinko-Community", // test
    // baseURL: "http://175.178.244.172/api-Rinko-Community", // prod

    // timeout: 3000
})

service.interceptors.response.use((resp) => {

}, (error) => {
    console.log(error)
})

export default service