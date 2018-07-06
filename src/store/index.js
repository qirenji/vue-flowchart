import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex);

const state = {
  // 节点数据
  nodeData: [],
  hoverNodeData: {
    id: ''
  },
  //连接线
  lineData: null,
  shadowLineData: null,
  //线条样式
  selLineType: 'StraightLine',
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
