<template>
    <svg id="FlowLineDarw" style="position:absolute;top: 0;left: 0;width: 100%;height: 100%;">
      <defs>
        <marker id="markerArrow"
                markerWidth="13"
                markerHeight="13"
                refX="9"
                refY="5"
                orient="auto"
                markerUnits="strokeWidth">
          <path d="M 0 0 L 12 6 L 0 12  L 4 6"
                style="fill: rgb(0,0,0);"
                transform="scale(0.8)"></path>
        </marker>
      </defs>
        <flow-line v-for="(item,index) in lineData"
                   :key="index"
                   :option="item"
                   v-if="lineData"></flow-line>
        <flow-line :option="shadowLineData"
                   v-if="shadowLineData"></flow-line>

    </svg>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import FlowLine from './FlowLine';

    export default{
        name: 'FlowLineDarw',
        data() {
            return {}
        },
        components: {
            FlowLine
        },
        computed:{
          ...mapState(['lineData','shadowLineData'])
        }
    }
</script>

<style lang="scss">

</style>
