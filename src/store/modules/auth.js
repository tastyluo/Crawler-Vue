import axios from 'axios'
import router from '@/router'
import { LOGIN, LOGOUT, RESET_TOKEN, REFRESH_TOKEN, CLEAR_AUTH_STATUS } from '../mutation-types'
// import api from '../../config/api'

const state = {
    token: '',
    status: null
}

const mutations = {
    // 登录并获取token
    [LOGIN] (state, payload) {
        state.token = payload.token
        window.localStorage.setItem('token', payload.token)
        state.status = payload.status
        if (payload.status === 1100) {
            setTimeout(() => {
                router.push({ path: '/index/goods' })
            }, 1000)
        }
    },
    // 登出 | 注销
    [LOGOUT] (state, payload) {
        state.token = ''
        localStorage.setItem('token', '')
    },
    [CLEAR_AUTH_STATUS] (state) {
        state.status = null
    },
    // 刷新页面，重新获取localStorage中的token
    [RESET_TOKEN] (state, payload) {
        state.token = payload.token
    },
    // 刷新token
    [REFRESH_TOKEN] (state, params) { }
}

const actions = {
    login ({ commit }, params) {
        axios({
            method: 'post',
            url: 'auth/login',
            data: {
                username: params.username,
                password: params.password
            }
        })
            .then((response) => {
                commit(LOGIN, response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default {
    state,
    mutations,
    actions
}

