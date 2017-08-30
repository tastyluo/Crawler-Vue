<template>
    <div class="login-box">
        <div class="login-logo">
            <img src="../assets/logo.svg" />
        </div>
        <div class="login-box-wrapper">
            <div class="login-text">
                <span>登录</span>
            </div>
            <div :class="msgClass">
                <transition name="el-zoom-in-center">
                    <label v-show="loginMsg !== ''">{{loginMsg}}</label>
                </transition>
            </div>
            <el-form :model="loginForm">
                <el-form-item label="" prop="username">
                    <el-input type="text" v-model="loginForm.username" placeholder="用户名" 
                        @keyup.enter.native="onLogin" 
                        @change="clearErrorMsg">
                        <template slot="prepend">
                            <icon name="user"></icon>
                        </template>
                    </el-input>
                </el-form-item>
                <!-- 防止浏览器自动填充密码 -->
                <input type="text" style="display: none;">
                <el-form-item label="" prop="password">
                    <el-input type="password" v-model="loginForm.password" placeholder="密码" 
                        @keyup.enter.native="onLogin"
                        @change="clearErrorMsg">
                        <template slot="prepend">
                            <icon name="lock"></icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item class="login-btn">
                    <el-button type="primary" 
                    @click="onLogin" 
                    @keyup.enter="onLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="login-fill"></div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { CLEAR_AUTH_STATUS } from '@/store/mutation-types'
    const LOGIN_SUCCESS_STATUS = 1100
    const LOGIN_FAILD_STATUS = 1101
    const LOGIN_SUCCESS_MSG = '登陆成功(｡◕‿◕｡)'
    const LOGIN_FAILD_MSG = '用户名或密码错误'

    export default {
        data () {
            return {
                loginForm: {
                    username: '',
                    password: ''
                }
            }
        },
        computed: mapState({
            loginStatus: state => state.auth.status,
            loginMsg () {
                let msg = ''
                if (this.loginStatus === LOGIN_FAILD_STATUS) {
                    msg = LOGIN_FAILD_MSG
                } else if (this.loginStatus === LOGIN_SUCCESS_STATUS) {
                    msg = LOGIN_SUCCESS_MSG
                }
                return msg
            },
            msgClass () {
                return {
                    'login-msg': true,
                    'login-error-msg': this.loginStatus === LOGIN_FAILD_STATUS,
                    'login-success-msg': this.loginStatus === LOGIN_SUCCESS_STATUS
                }
            }
        }),
        methods: {
            onLogin () {
                this.$store.dispatch('login', this.loginForm)
            },
            clearErrorMsg () {
                this.$store.commit(CLEAR_AUTH_STATUS)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f7fafc;
        .login-logo {
            flex: 0 0 80px;
        }
        .login-box-wrapper {
            flex: 0 0 230px;
            width: 250px;
            padding: 30px;
            background-color: #fff;
            box-shadow: 0 1px 5px rgba(0, 0, 0, .2),
            0 2px 2px rgba(0, 0, 0, .14),
            0 3px 1px -2px rgba(0, 0, 0, .12);
            .login-text {
                text-align: center;
                font-size: 20px;
                font-weight: 600;
                color: #555;
            }
            .login-btn {
                button {
                    width: 100%;
                }
            }
        }
        .login-fill {
            flex: 0 0 200px;
        }
    }
    .login-msg {
        height: 30px;
        font-size: 14px;
        text-align: center;
        line-height: 30px;
    }
    .login-error-msg {
        color: #c33;
    }
    .login-success-msg {
        color: #13CE66;
    }
</style>
