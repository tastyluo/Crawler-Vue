<template>
  <div id="app">
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
          <router-view class="main-view"></router-view>
        </transition>
      </div>
    </div>
    
    <!-- 我来组成尾部 😊-->
    <footer class="app-footer">
      <span>Copyright © crawler webpage power by vue.js</span>
    </footer>
  </div>
</template>

<script>
import AppHeader from './components/header'
export default {
  name: 'app',
  components: {'app-header': AppHeader}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #fff;
}

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
  height: 1000px;
  /*margin-top: 40px;*/
}

.app-footer {
  margin-top: 20px;
  width: 100%;
  height: 20px;
  background-color: #2e476d;
  text-align: center;
  span {
    font-size: 14px;
    color: #96a8c3;
  }
}

</style>
