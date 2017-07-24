import axios from 'axios'

const GET_JD_GOODS_URL = '/api/jdGoods/page'

const state = {
  pageGoodsInfo: null
}

const mutations = {
  // 更新数据
  updateData (state, obj) {
    // state = {...state, goodsList: obj.list, total: obj.total}
    state.pageGoodsInfo = obj
  }
}

const getter = {
  list: state => {
    if (state.pageGoodsInfo != null) {
      return state.pageGoodsInfo.list
    }
    return null
  },
  total: state => {
    if (state.pageGoodsInfo != null) {
      return state.pageGoodsInfo.total
    }
    return null
  }
}

const actions = {
  getJdGoods ({commit}, params) {
    axios.get(GET_JD_GOODS_URL, {
      params: {
        pageNum: params.pageNum,
        pageSize: params.pageSize
      }
    })
    .then(function (response) {
      commit('updateData', response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}

export default {
  state,
  getter,
  mutations,
  actions
}

