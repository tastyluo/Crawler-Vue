<template>
    <div>
        <!-- 我来组成头部 😊-->
        <header class="app-header">
            <app-header></app-header>
        </header>

        <div class="header-space"></div>
        <!-- 我来组成身体 😊 -->
        <div class="app-body">
            <!-- 我是导航菜单辣 -->
            <!--<transition name="nav-toggle">
                <div class="app-nav" v-show="!navToggle">
                  <left-nav></left-nav>
                </div>
              </transition>-->
            <!-- 我是内容主体辣 -->
            <div class="app-content">
                <transition name="view-fade-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>

        <!-- 我来组成尾部 😊-->
        <footer class="app-footer">
            <span>power by vue.js (´・ω・`)</span>
        </footer>
    </div>
</template>

<script>
    import AppHeader from './header'
    export default {
        components: { 'app-header': AppHeader }
    }
</script>

<style lang="scss">
    .clear {
        clear: both;
    }

    .header-space {
        height: 40px;
        width: 100%;
    }

    .app-body {
        /*position: relative;*/
        box-sizing: border-box;
        width: 100%;
        min-height: calc(100vh - 80px); // height: 1000px;
        /*margin-top: 40px;*/
    }

    .app-footer {
        margin-top: 50px;
        width: 100%;
        height: 30px;
        background-color: #2e476d;
        text-align: center;
        span {
            font-size: 14px;
            line-height: 30px;
            color: #f0f0f0;
        }
    }
</style>
