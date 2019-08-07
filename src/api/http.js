
const host = 'http://172.16.15.102:6666/api/v1'

export const http = (url, method, body ) =>{
    const fetchParams = {
        headers: {'content-type': 'application/json'},
        method: method,
        body:body
    }

    return fetch(host + url,fetchParams).then(res=>{
        return res.json()
    }).catch(err => {
        console.log(err)
    })
}