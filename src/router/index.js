import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import * as types from '../store/mutation-types'
import index from '../components/index'
Vue.use(Router)

const notFound = () => import('../components/notFound.vue')
const login = () => import('../components/login.vue')
const products = () => import('../components/product/productList.vue')

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            component: notFound
        },
        {
            path: '/',
            name: '/',
            component: index
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/index',
            component: index,
            children: [
                {
                    path: 'products',
                    component: products
                }
            ]
        }
    ]
})

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit(types.RESET_TOKEN, {
        token: window.localStorage.getItem('token')
    })
}

// 进入每个页面时检查token
router.beforeEach((to, from, next) => {
    if (to.name === 'login') {
        next()
    } else {
        if (!store.state.auth.token) {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    }
})

export default router
