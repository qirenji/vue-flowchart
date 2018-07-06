<template>
    <section class="arrow-wrap" :style="arrow" v-show="nodeId">
      <img src="@/assets/arrow.png" draggable="false"
           @mousedown="drawLineStart"
           @mouseup="drawLineSuccess"
      />
    </section>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

    export default{
        name:'Arrow',
        data() {
            return {
              pointRectPadding: 0,
              lineDrawing: false,
              lineInfo: {
                lineDrawing: false,
                startPosition: {
                  x:0,
                  y:0
                },
                endPosition: {
                  x: 0,
                  y: 0
                },
                startId: '',
                endId: ''
              }
            }
        },
        computed: {
          ...mapState(['hoverNodeData','nodeData','lineData','selLineType']),
          nodeId() {
              return this.hoverNodeData.id;
          },
          arrow() {
            if (!this.nodeId || !this.nodeData[this.nodeId]) {
              return;
            }
            let { width, height, left, top} = this.nodeData[this.nodeId];
            width = '15px';
            height = '15px';
            left = left + 33 + 'px';
            top = top + 30 + 'px';
            return {
              width,
              height,
              left,
              top
            };
          }
        },
        methods: {
          ...mapMutations(['UPDATE_SHADOW_LINE','UPDATE_LINE']),
          drawLineStart() {
            this.lineDrawing = true;
            this.lineInfo = {
              ...this.lineInfo,
              startPosition:{...this.getPointPosition(event.target)},
              startId: this.nodeId
            }
            this.$parent.$el.addEventListener('mousemove', this.lineDrawingHandle);
          },
          lineDrawingHandle() {
            const { clientX,clientY } = event;
            const { top ,left } = this.$parent.$el.getBoundingClientRect();
            const { startPosition } = this.lineInfo;
            this.UPDATE_SHADOW_LINE({
              startPosition,
              endPosition: {
                x: clientX - left,
                y: clientY - top
              },
              type: this.selLineType
            })
          },
          drawLineSuccess(){
            const {startId} = this.lineInfo;
            this.$parent.$el.removeEventListener('mousemove', this.lineDrawingHandle);
            if(!this.lineDrawing || startId === this.nodeId){
                return;
            }
            this.lineInfo ={
              ...this.lineInfo,
              endPosition: { ...this.getPointPosition(event.target)},
              endId: this.nodeId
            };
            const lineId = 'line-' + new Date().getTime();
            const lineData = JSON.parse(JSON.stringify(this.lineInfo));
            this.UPDATE_LINE({
                [lineId]:{
                  ...lineData,
                  lineId,
                  type:this.selLineType
                }
            });
            this.lineInfo.lineDrawing = false;
          },
          getPointPosition(target){
              const node = this.nodeData[this.nodeId];
              const {top,left} = node;

              return{
                  x: Number(left) + 40,
                  y:40+Number(top)
              };
          },
          drawLineEnd() {
            this.lineDrawing = false;
            this.UPDATE_SHADOW_LINE(null);
            this.$parent.$el.removeEventListener('mousemove', this.lineDrawingHandle);
          }
        },
      mounted() {
        document.addEventListener('mouseup', this.drawLineEnd);
      },
      destroyed() {
        document.removeEventListener('mouseup', this.drawLineEnd);
      }
    }
</script>

<style lang="scss">
.arrow-wrap{
  position: absolute;
  z-index: 10000;
}
</style>
