const UPDATE_NODE = 'UPDATE_NODE';
const UPDATE_HOVER_NODE = 'UPDATE_HOVER_NODE';

export default {
  [UPDATE_NODE](state, value) {
    state.nodeData = {
      ...state.nodeData,
      ...value
    }
  },
  [UPDATE_HOVER_NODE](state, value){
    state.hoverNodeData = {
      ...state.hoverNodedata,
      ...value
    }
  }
}
