import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex);

const state = {
  // 节点数据
  nodeData: [],
  lineData: null,
  hoverNodedata: {
    id: ''
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
