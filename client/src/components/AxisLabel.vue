<template>
  <text :x="point.x" :y="point.y">{{stat.label}}</text>
</template>

<script>
export default {
  name: 'AxisLabel',
  props: {
    stat: Object,
    index: Number,
    total: Number
  },
  computed: {
    point: function() {
      return this.valueToPoint(
        +this.stat.value + 10,
        this.index,
        this.total
      );
    }
  },
  methods: {
    valueToPoint: (value, index, total) => {
        let x = 0;
        let y = -value * 0.8;
        let angle = ((Math.PI * 2) / total) * index;
        let cos = Math.cos(angle);
        let sin = Math.sin(angle);
        let tx = x * cos - y * sin + 100;
        let ty = x * sin + y * cos + 100;
        return {
          x: tx,
          y: ty
        };
    },
  }
}
</script>

<style scoped>
</style>