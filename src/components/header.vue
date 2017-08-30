<template>
    <div class="app-header">
        <div class="container">
            <div class="logo">
                <a href="/">
                    <div>crawler</div>
                    <img src="../assets/logo2.png" />
                </a>
            </div>
            <div class="main-menu">
                <ul>
                    <li>
                        <span>京东</span>
                    </li>
                    <li>
                        <span>淘宝</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .app-header {
        position: fixed;
        left: 0;
        right: 0;
        height: 40px;
        z-index: 1024;
        background-color: #1D8CE0;
        color: #ffffff;
    }
    
    .container {
        margin-left: auto;
        margin-right: auto;
    }
    
    .main-menu {
        float: left;
        ul {
            list-style: none;
            li {
                display: inline-block;
                line-height: 40px;
                height: 40px;
                padding-left: 10px;
                padding-right: 10px;
                span {
                    font-weight: normal;
                    font-size: 20px;
                }
            }
            li:hover {
                cursor: pointer;
            }
        }
    }
    
    .logo {
        float: left;
        padding-left: 100px;
        padding-right: 100px;
        a {
            display: table-row
        }
        a:after {
            clear: both;
        }
        img {
            display: table-cell;
            width: 40px;
            height: 40px;
        }
        div {
            display: table-cell;
            float: left;
            line-height: 40px;
            font-size: 22px;
            font-family: Consola;
        }
    }
</style>
