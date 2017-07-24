<template>
  <div class="goods">
    <div class="g-list">
      <goods-item v-for="item in itemList" :key="item.id" v-bind="item">
      </goods-item>
    </div>
    <div class="g-pagination">
      <el-pagination 
      @size-change="onSizeChange" 
      @current-change="onCurrentChange" 
      :current-page="pageNum" 
      :page-sizes="[20, 40, 80, 100]" 
      :page-size="pageSize" 
      layout="total, sizes, prev, pager, next, jumper" 
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
        pageNum: 1
      }
    },
    computed: {
      itemList () {
        return this.$store.state.goodsList
      },
      total () {
        return this.$store.state.total
      }
    },
    created () {
      this.updateData()
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
        this.$store.dispatch('getJdGoods', {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        })
      }
    },
    components: { 'goods-item': goodsItem }
  }
</script>

<style lang="scss" scoped>
  .g-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
  }

</style>

