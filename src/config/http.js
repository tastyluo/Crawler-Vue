/*
 * @Author: Luo jiaxing
 * @Date: 2017-08-23 16:05:28
 * @Last Modified by: Luo jiaxing
 * @Last Modified time: 2017-09-01 09:29:48
 * Axios 配置
 */
import axios from 'axios'
import store from '../store'
import * as types from '../store/mutation-types'
import router from '../router'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = '/api/'

// request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.auth.token) {
            config.headers.Authorization = `Bearer ${store.state.auth.token}`
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// response 拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            let status = error.response.status
            if (status === 401) {
                // 401 清除token信息并跳转到登录页面
                store.commit(types.LOGOUT)
                router.replace({
                    path: '/login'
                })
            }
        }
        return Promise.reject(error.response.data)
    }
)

export default axios
