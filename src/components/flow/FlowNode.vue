<template>
    <div class="flow-node" :draggable="true" :style="nodePostion"
         @dragstart="nodeDragStart(id)"
         @drag="nodeDragging(id)"
         @mouseenter="mouseEnterNode(id)">
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
        ...mapState(['nodeData','lineData']),
        nodePostion() {
            return {
              left: `${this.option.left}px`,
              top: `${this.option.top}px`
            }
        }
      },
      methods: {
        ...mapMutations(['UPDATE_HOVER_NODE','UPDATE_LINE']),
//        开始拖拽节点
        nodeDragStart(id) {
          let dataTransfer = event.dataTransfer;

          dataTransfer.dropEffect = 'move';
          dataTransfer.setData('ID',`update:${this.id}`);
          dataTransfer.setData('Type',this.option.type);

        },
//        移动节点
        nodeDragging(id) {
          const x = event.clientX;
          const y = event.clientY;

          const nodeOffsetX = x - 8;
          const nodeOffsetY = y - 43;
console.log(this)
          this.updateLine(Number(nodeOffsetX), Number(nodeOffsetY), id)
        },

        updateLine(nodeOffsetX,nodeOffsetY,id){
          let data = {};
          for (var key in this.lineData) {
            const {startId,endId} = this.lineData[key]

            if (startId === id) {
                console.log(this.lineData[key].startPosition.x )
              data = {
                ...data,
                [key]: {
                  ...this.lineData[key],
                  startPosition: {
                    x: nodeOffsetX,
                    y: nodeOffsetY
                  }
                }
              };
            } else if (endId === id) {
              data = {
                ...data,
                [key]: {
                  ...this.lineData[key],
                  endPosition: {
                    x: nodeOffsetX,
                    y: nodeOffsetY
                  }
                }
              };
            }
          }
          this.UPDATE_LINE(data);
        },
//
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
