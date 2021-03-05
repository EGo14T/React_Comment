import axios from "axios"

//默认超时时间
axios.defaults.timeout = 30000;

/**
    * get方法，对应get请求
    * @param {String} url [请求的url地址]
    * @param {Object} params [请求时携带的参数]
*/
export function getRequest(url, params) {
    return new Promise((resolve, reject) =>{
        axios.get(getRestfulParams(url, params)).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
        })
    });
}

export function getKvRequest(url, isToken ,params) {
    return new Promise((resolve, reject) =>{
        axios.get(getKvParam(url, params), {
            isToken: isToken
            }).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
        })
    });
}

export function postForJson(url, params) {
    return new Promise((resolve, reject) =>{
        axios.post(url,params).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
        })
    });
}

function getRestfulParams(url, params) {
    if (params == null) return url;
    for (const item of params) {
        url += "/" + item;
    }
    return url;
}

function getKvParam(url, params){
    let data = '';
    for(var k in params){
        let value = params[k] !==undefined ? params[k] : '';
        data += `&${k}=${encodeURIComponent(value)}`
    }
    return data ? url + '?' + data.substring(1) : ''
}