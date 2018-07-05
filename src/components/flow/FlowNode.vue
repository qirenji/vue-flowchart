<template>
    <div class="flow-node" :draggable="true" :style="nodePostion" @dragstart="nodeDragStart(option.id)" @mouseenter="mouseEnterNode(id)">
      <icon :name="option.type" :size="80" style="cursor: move" />
    </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default{
      name: 'FlowNode',
      data() {
        return {

        }
      },
      props:{
          id:String,
          option:{
              type:Object
          },

      },
      computed:{
        ...mapState(['nodeData']),
        nodePostion() {
            return {
              left: `${this.option.left}px`,
              top: `${this.option.top}px`
            }
        }
      },
      methods: {
        ...mapMutations(['UPDATE_HOVER_NODE']),
        nodeDragStart(id) {
            let dataTransfer = event.dataTransfer;

            dataTransfer.dropEffect = 'move';
            dataTransfer.setData('ID',`update:${this.id}`);
            dataTransfer.setData('Type',this.option.type);

        },
        mouseEnterNode(id) {
            this.UPDATE_HOVER_NODE({
                id
            })
        }
      }

  }
</script>

<style lang="scss">
.flow-node{
  position: absolute;
  z-index: 9999;
}


</style>
