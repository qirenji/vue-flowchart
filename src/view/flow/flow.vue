<template>
    <div id="flow" class="flow">
      <flow-header></flow-header>
      <flow-main-draw></flow-main-draw>
    </div>
</template>

<script>
import FlowHeader from '@/components/flow/FlowHeader'
import FlowMainDraw from '@/components/flow/FlowMainDraw'

  export default{
    name: 'flow',
    data() {
      return {

      }
    },
    components: {
      FlowHeader,
      FlowMainDraw
    }
  }
</script>

<style lang="scss" scoped>
  .flow {
    display: flex;
    flex-direction: column;
  }


</style>
