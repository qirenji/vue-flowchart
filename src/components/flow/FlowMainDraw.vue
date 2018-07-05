<template>
    <div id="flowMainCont" class="flow-main-cont" >
      <div id="draw" @drop.prevent="dropHandle" @dragover.stop.prevent>
        <flow-node-draw></flow-node-draw>
        <flow-line-draw></flow-line-draw>
      </div>
    </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import FlowNodeDraw from './FlowNodeDraw';
  import FlowLineDraw from './FlowLineDraw';

  export default{
    name: 'flowMainDraw',
    data() {
      return {

      }
    },
    components: {
      FlowNodeDraw,
      FlowLineDraw
    },
    computed:{
      ...mapState(['nodeData'])
    },
    methods: {
      ...mapMutations(['UPDATE_NODE']),
      dropHandle(ev) {
        if (ev.target.tagName !== 'DIV') return;
        let type = ev.dataTransfer.getData('Type');
        let id = ev.dataTransfer.getData('ID');

        let x = ev.offsetX - 40;
        let y = ev.offsetY;

        //新建节点
        if(!id){
            id = 'node-' + new Date().getTime();
          this.UPDATE_NODE({
              [id]:{
                top: y,
                left: x,
                type: type,
                text: ''
              }
          })
        }else{
          id = id.replace(/.*\:/g, '');
          this.UPDATE_NODE({
            [id]:{
              ...this.nodeData[id],
              top: y,
              left: x,
            }
          })
        }
        this.nodeData;
      }
    }
  }
</script>

<style lang="scss">
  #draw{
    height: 500px;
    border: 1px solid #000;
  }


</style>
