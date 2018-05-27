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

// 食堂
export const getAllRest = (data) => {
    return _postPromise('/api/getAllRestrant', data, { showLoading: true })
}
export const addRest = (data) => {
    return _postPromise('/api/addRestrant', data, { showLoading: true })
}
export const delRest = (data) => {
    return _postPromise('/api/delRestrant', data, { showLoading: true })
}
export const updateRest = (data) => {
    return _postPromise('/api/updateRestrant', data, { showLoading: true })
}

// 房间
export const getAllRoom = (data) => {
    return _postPromise('/api/getAllRoom', data, { showLoading: true })
}
export const addRoom = (data) => {
    return _postPromise('/api/addRoom', data, { showLoading: true })
}
export const delRoom = (data) => {
    return _postPromise('/api/delRoom', data, { showLoading: true })
}
export const updateRoom = (data) => {
    return _postPromise('/api/updateRoom', data, { showLoading: true })
}

// 房间-室友
export const getAllRoomMate = (data) => {
    return _postPromise('/api/getAllRoomMate', data, { showLoading: true })
}
export const addRoomMate = (data) => {
    return _postPromise('/api/addRoomMate', data, { showLoading: true })
}
export const delRoomMate = (data) => {
    return _postPromise('/api/delRoomMate', data, { showLoading: true })
}
export const updateRoomMate = (data) => {
    return _postPromise('/api/updateRoomMate', data, { showLoading: true })
}

// 路线
export const getAllRoutesInside = (data) => {
    return _postPromise('/api/getAllRoutesInside', data, { showLoading: true })
}
export const addRoutesInside = (data) => {
    return _postPromise('/api/addRoutesInside', data, { showLoading: true })
}
export const delRoutesInside = (data) => {
    return _postPromise('/api/delRoutesInside', data, { showLoading: true })
}
export const updateRoutesInside = (data) => {
    return _postPromise('/api/updateRoutesInside', data, { showLoading: true })
}

// 路线-校外
export const getAllRoutesOutside = (data) => {
    return _postPromise('/api/getAllRoutesOutside', data, { showLoading: true })
}
export const addRoutesOutside = (data) => {
    return _postPromise('/api/addRoutesOutside', data, { showLoading: true })
}
export const delRoutesOutside = (data) => {
    return _postPromise('/api/delRoutesOutside', data, { showLoading: true })
}
export const updateRoutesOutside = (data) => {
    return _postPromise('/api/updateRoutesOutside', data, { showLoading: true })
}

// 医疗
export const getAllHelpCommon = (data) => {
    return _postPromise('/api/getAllHelpCommon', data, { showLoading: true })
}
export const addHelpCommon = (data) => {
    return _postPromise('/api/addHelpCommon', data, { showLoading: true })
}
export const delHelpCommon = (data) => {
    return _postPromise('/api/delHelpCommon', data, { showLoading: true })
}
export const updateHelpCommon = (data) => {
    return _postPromise('/api/updateHelpCommon', data, { showLoading: true })
}

// 医疗求助
export const getAllHelpCall = (data) => {
    return _postPromise('/api/getAllHelpCall', data, { showLoading: true })
}
export const addHelpCall = (data) => {
    return _postPromise('/api/addHelpCall', data, { showLoading: true })
}
export const delHelpCall = (data) => {
    return _postPromise('/api/delHelpCall', data, { showLoading: true })
}
export const updateHelpCall = (data) => {
    return _postPromise('/api/updateHelpCall', data, { showLoading: true })
}

// 问题反馈
export const getAllFeedBack = (data) => {
    return _postPromise('/api/getAllFeedBack', data, { showLoading: true })
}
export const addFeedBack = (data) => {
    return _postPromise('/api/addFeedBack', data, { showLoading: true })
}
export const delFeedBack = (data) => {
    return _postPromise('/api/delFeedBack', data, { showLoading: true })
}
export const updateFeedBack = (data) => {
    return _postPromise('/api/updateFeedBack', data, { showLoading: true })
}

