const UPDATE_NODE = 'UPDATE_NODE';
const UPDATE_HOVER_NODE = 'UPDATE_HOVER_NODE';
const UPDATE_SHADOW_LINE = 'UPDATE_SHADOW_LINE';
const UPDATE_LINE = 'UPDATE_LINE';

export default {
  [UPDATE_NODE](state, value) {
    state.nodeData = {
      ...state.nodeData,
      ...value
    }
  },
  [UPDATE_HOVER_NODE](state, value){
    state.hoverNodeData = {
      ...state.hoverNodeData,
      ...value
    }
  },
  [UPDATE_SHADOW_LINE](state, value){
    state.shadowLineData = value
  },
  [UPDATE_LINE](state,value){
    state.lineData ={
      ...state.lineData,
      ...value
    }
  }
}
