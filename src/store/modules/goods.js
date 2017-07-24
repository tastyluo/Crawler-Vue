import axios from 'axios'

const GET_JD_GOODS_URL = '/api/jdGoods/page'

const state = {
  goodsList: [],
  total: 0
}

const mutations = {
  // 更新数据
  updateData (state, obj) {
    // state = {...state, goodsList: obj.list, total: obj.total}
    state.goodsList = obj.list
    state.total = obj.total
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
  mutations,
  actions
}

