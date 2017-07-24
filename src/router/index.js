import Vue from 'vue'
import Router from 'vue-router'
import goodsView from '@/components/goods/goodsView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goodsView
    }
  ]
})
