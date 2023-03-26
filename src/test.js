import axios from 'axios'
let service = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "X-Requested-With": "XMLHttpRequest",
    },
    timeout: 3000, 
})

var result = service({
    method: "GET",
    url: "/test/waiting",
})

console.log(result
    .then(res => {
        console.log("res.data: ", res.data)
    })
    .catch(err => {
        console.log("err: ", err)
    })
);