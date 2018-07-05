<template>
    <div id="flowHeader" class="flowHeader">
      <div class="list-item" draggable="true" v-for="(item,index) in toolItems" :key="index" :title="item.title" @dragstart="selNode(item.type)" @dragend="nodeDragEnd">
        <icon :name="item.type" :size="30" transform="translate(0.5,0.5)" />
      </div>

    </div>
</template>

<script>

  export default{
    data() {
      return {
        toolItems:[
          {
            type: 'start',
            title: '开始'
          },
          {
            type: 'process',
            title: '流程'
          },
          {
            type: 'decision',
            title: '判断'
          },
          {
            type: 'terminator',
            title: '终端'
          },

        ]
      }
    },
    components: {

    },
    methods: {
      selNode(type) {
        event.dataTransfer.setData('Type', type);
        event.dataTransfer.setData('ID', '');
      },
      nodeDragEnd(type) {
      }
    }
  }
</script>

<style lang="scss" scoped>

  .flowHeader{

  }

  .list-item{
    display: inline-block;
  }

</style>
