<template>
  <div class="goods-item">
    <div class="g-img">
      <img :src="goodsImg" />
      <div v-if="isSelfOperated">自营</div>
    </div>
    <div class="g-name">
      <span>{{name}}</span>
    </div>
    <div class="g-price-goodrate">
      <strong>
        <em>¥</em>
        <i>{{price}}</i>
      </strong>
      <strong>
        <i>{{goodRate}}</i>
        <em>%</em>
      </strong>
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
  .goods-item {
    width: 220px;
    height: 300px;
  }
  .g-img {
    width: 220px;
    height: 220px;
  }
</style>
