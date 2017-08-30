<template>
    <div class="page-404">
        <el-card class="box-card">
            <p class="page-404-notice1">
                <strong>你似乎走错了地方 (..•˘_˘•..)</strong>
            </p>
            <p class="page-404-notice2">
                <strong>404</strong>
            </p>
        </el-card>
        <div class="box-fill"></div>
    </div>
</template>

<style lang="scss" scoped>
.page-404 {
    background-color: #f7fafc;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
}
.page-404-notice1 {
    font-size: 1.1em;
    color: #000;
    text-align: center;
}
.page-404-notice2 {
    font-size: 9em;
    color: #999;
    text-align: center;
}
.box-fill {
    flex: 0 1 300px;
}
.box-card {
    flex: 0 1 250px;
    width: 400px;
}
</style>

