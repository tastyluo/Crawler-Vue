<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    #app {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
</style>
