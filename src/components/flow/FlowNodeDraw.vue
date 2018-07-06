<template>
    <div id="FlowNodeDarw" class="node-draw" ref="FlowNodeDarw"
         @mouseover.capture="drawMouseover">
      <flow-arrow></flow-arrow>
      <flow-node v-for="(item,index) in nodeData"
        :key="index"
        :id="index"
        :option="item"
      ></flow-node>
    </div>
</template>

<script>
  import FlowNode from './FlowNode';
  import FlowArrow from './FLowArrow';
  import { mapState, mapMutations } from 'vuex';

  export default{
    name: 'FlowNodeDarw',
    data() {
      return {

      }
    },
    computed: {
      ...mapState(['nodeData','lineData'])
    },
    components: {
      FlowNode,
      FlowArrow
    },
    methods: {
      ...mapMutations(['UPDATE_HOVER_NODE']),
//      节点外清除链接标记
      drawMouseover() {
          if(event.target === event.currentTarget){
            this.UPDATE_HOVER_NODE({
              id: ''
            });
          }
      }

    }
  }
</script>

<style lang="scss">
  .node-draw{
    position: relative;
    width: 100%;
    height: 100%;
    height: 500px;
    z-index: 9999;
  }
</style>
