<template>
  <div class="goods-item">
    <div class="g-img">
      <img width="180" height="180" :src="goodsImg" />
    </div>
    <div class="g-name">
      <span>{{name}}</span>
    </div>
    <div class="g-pgr">
      <strong class="g-price">
        <em>¥</em>
        <i>{{price}}</i>
      </strong>
    </div>
    <div class="g-comment">
      <span v-if="isSelfOperated" class="g-jdzy">自营</span>
      <span class="g-goodrate">{{goodRate}}%好评</span>
      <span class="g-goodrate">{{commentsNum}}条评价</span>
    </div>
  </div>
</template>

<script>

  import cpuImg from '@/assets/cpu.jpg'

  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      shopName: {
        type: String,
        default: ''
      },
      price: {
        type: Number,
        default: null
      },
      goodRate: {
        type: Number,
        default: null
      },
      selfOperated: {
        type: String,
        default: '0'
      },
      link: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        goodsImg: cpuImg
      }
    },
    computed: {
      isSelfOperated () {
        if (this.selfOperated === '0') {
          return false
        } else if (this.selfOperated === '1') {
          return true
        }
      }
    }
  }
</script>

<style lang="scss">
  strong {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
  }
  .goods-item {
    width: 180px;
    height: 250px;
    margin: 20px;
    padding-left: 5px;
    padding-right: 5px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, .2), 0 2px 2px rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12);
    &:hover {
      cursor: pointer;
    }
    >div {
      margin-bottom: 2px;
    }
  }
  
  .g-name {
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
  }

  .g-goodrate {
    color: #A7A7B6;
    font-size: 12px;
    float: right;
    margin-right: 3px;
    line-height: 20px;
    margin-left: 10px;
  }

  .g-price {
    color: #E4393C;
    font-size: 16px;
  }

  .g-jdzy {
    background-color: #e4393c;
    color: #fff;
    font-size: 13px;
    padding: 1px;
  }
</style>
