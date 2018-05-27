import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

/**
 * 格式化JSON
 */
Vue.http.options.emulateJSON = true

/**
 * 添加跨域允许cookie设置，默认情况下跨域请求不允许携带cookie
 * interceptors 拦截器
 */
Vue.http.interceptors.push(function(request, next) {
    // request.credentials = true
    next()
})

const serverHost = 'http://localhost:8081'

const urlHandler = (url) => {
    return serverHost + url
}

// the promise way of get service data
const _getPromise = (url, data, extend = {}) => {
    return new Promise((resolve, reject) => {
        Vue.http.get(urlHandler(url), {
            params: data
        }).then((response) => {
            resolve(response.data)
        }, (response) => {
            console.log(response)
        })
    }).catch((err) => {
        console.log(err)
    })
}

// the promise way of post service data
const _postPromise = (url, data, extend = {}) => {
    return new Promise((resolve, reject) => {
        Vue.http.post(urlHandler(url), data).then((response) => {
            resolve(response.body)
        }, (response) => {
            console.log(response.body)
        })
    }).catch((err) => {
        console.log(err)
    })
}

// 具体接口部分
// 菜单
export const getAllMenu = (data) => {
    return _postPromise('/api/getAllMenu', data, { showLoading: true })
}
export const addMenu = (data) => {
    return _postPromise('/api/addMenu', data, { showLoading: true })
}
export const delMenu = (data) => {
    return _postPromise('/api/delMenu', data, { showLoading: true })
}
export const updateMenu = (data) => {
    return _postPromise('/api/updateMenu', data, { showLoading: true })
}
