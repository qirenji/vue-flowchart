<template>
    <div id="FlowNodeDarw" class="node-draw">
      <flow-node v-for="(item,index) in nodeData"
        :key="index"
        :id="index"
        :option="item"
      ></flow-node>
    </div>
</template>

<script>
  import FlowNode from './FlowNode'
  import { mapState, mapMutations } from 'vuex';

  export default{
    name: 'FlowNodeDarw',
    data() {
      return {

      }
    },
    computed: {
      ...mapState(['nodeData'])
    },
    components: {
      FlowNode
    },
    methods: {
        drawMouseover() {
          if (event.target === event.currentTarget) {
            console.log(123);
          }
        }
    }
  }
</script>

<style lang="scss">

</style>
