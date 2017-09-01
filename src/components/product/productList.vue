<template>
    <div class="products">
        <ul class="product-list">
            <li v-for="item in productList" :key="item.id" >
                <product-item v-bind="item">
                </product-item>
            </li>
            <div style="clear:both;"></div>
        </ul>
        <div class="p-pagination-wrapper">
            <el-pagination 
                class="p-pagination"
                @size-change="onSizeChange" 
                @current-change="onCurrentChange" 
                :current-page="pageNum" 
                :page-sizes="[20, 40, 80, 100]" 
                :page-size="pageSize" 
                layout="->, total, sizes, prev, pager, next, jumper" 
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import productItem from './productItem'
    export default {
        data () {
            return {
                pageSize: 20,
                pageNum: 1,
                url: '/jdGoods/page',
                pageData: null
            }
        },
        created () {
            this.updateData()
        },
        computed: {
            productList () {
                if (this.pageData != null) {
                    return this.pageData.list
                }
                return null
            },
            total () {
                if (this.pageData != null) {
                    return this.pageData.total
                }
                return null
            }
        },
        methods: {
            onCurrentChange (val) {
                this.pageNum = val
                this.updateData()
            },
            onSizeChange (val) {
                this.pageSize = val
                this.updateData()
            },
            updateData () {
                let me = this
                this.$http.get(this.url, {
                    params: {
                        pageNum: this.pageNum,
                        pageSize: this.pageSize
                    }
                })
                    .then(function (response) {
                        me.pageData = response.data
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }
        },
        components: { 'product-item': productItem }
    }
</script>

<style lang="scss" scoped>
.products {
    width: 1150px;
    margin: 10px auto;
    .product-list {
        // display: flex;
        // justify-content: flex-start;
        // flex-wrap: wrap;
        // align-content: flex-start;
        // align-items: center;
        list-style: none;
        >li {
            float: left;
        }
    }
    .p-pagination-wrapper {
        margin-top: 20px;
    }
}
    
</style>

