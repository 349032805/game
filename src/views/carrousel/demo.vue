<template>
  <div>
 	<cascade-loop :list="list" :cur-width="400" :all-width="800" :all-height="300"
	:cur-height="280" :scale="0.8"></cascade-loop>
  </div>
</template>

<script type="text/ecmascript-6">
import carrousel from "./carrousel";
export default {
  data() {
    return {
      list: [
        { content: 'a', color: "red" },
        { content: 'b', color: "green" },
        { content: 'c', color: "blue" }
      ]
    };
  },
  created() {
  },
  methods: {},
  components: {
    cascadeLoop: carrousel
  }
};
</script>

<style lang="less">

</style>
