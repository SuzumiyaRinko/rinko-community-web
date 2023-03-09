import axios from 'axios'
let service = axios.create({
    baseURL: "http://localhost:8080/", // dev
    // baseURL: "http://192.168.66.150/api-Rinko-Community", // test
    // baseURL: "http://175.178.61.207/api-Rinko-Community", // prod

    // timeout: 3000
})
export default service