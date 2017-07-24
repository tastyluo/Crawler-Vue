<template>
  <div class="goods">
    <div class="g-list">
      <goods-item v-for="item in goodsList" :key="item.id" v-bind="item">
      </goods-item>
    </div>
    <div class="g-pagination">
      <el-pagination 
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
  import goodsItem from './goodsItem'
  export default {
    data () {
      return {
        pageSize: 20,
        pageNum: 1,
        url: '/api/jdGoods/page',
        pageData: null
      }
    },
    created () {
      this.updateData()
    },
    computed: {
      goodsList () {
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
    components: { 'goods-item': goodsItem }
  }
</script>

<style lang="scss" scoped>
  .g-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
  }


</style>

