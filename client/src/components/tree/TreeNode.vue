<template>
  <g class="node">
    <g v-for="(node, i) in nodes" v-bind:key="node.id">
      <rect
        :width="rectWidth(node)"
        :height="100"
        :x="calculateXPos(i) - rectWidth(node) / 2"
        :y="calculateYPos() - 40">
      </rect>
      <text
        :x="calculateXPos(i)"
        :y="calculateYPos()"
      >
        {{ node.name }}
      </text>
      <g v-if="node.children && node.children.length">
        <polyline :points="points(node, i)" />
        <TreeNode :nodes="node.children" :depth="depth + 1"></TreeNode>
      </g>
    </g>
  </g>
</template>

<script>
export default {
  name: "TreeNode",
  props: {
    nodes: Array,
    depth: Number,
  },
  data: () => ({
    size: 1000,
  }),
  computed: {
    topHeight() {
    // 20% of the size
    return this.size * 0.2;
    },
    bottomHeight() {
    // 80% of the size
    return this.size * 0.8;
    },
    width() {
    return this.size;
    },
    halfSize() {
    return this.size * 0.5;
    },
    distance() {
      // distance between two array items on the horizon
      return Math.round(this.width / this.nodes.length);
    },
    radius() {
      return (this.topHeight*0.5)
    },
    viewbox() {
      return "0 0 " + this.size + " " + this.size;
    },
  },
  methods: {
    points(node, i) {
      let childCoords = [];
      let parentCoords = `${this.calculateXPos(i)}, ${this.getYRectOffset()}`

      for (let j = 0; j < node.children.length; j++) {
        childCoords.push(`${this.calculateXPosChild(node, j)}, ${this.getYPosDepth(this.depth + 1)}`);
        // go back to the parent
        if (node.children.length - j > 1) {
          childCoords.push(parentCoords);
        }
      }
      return `${parentCoords} ${childCoords.join(' ')}`;
    },
    calculateXPos(i) {
      let x = this.distance * i + this.distance * 0.5;
      return Math.round(x);
    },
    calculateYPos() {
      let y = this.depth * 200 + 80;
      return Math.round(y);
    },
    calculateXPosChild(parent, i) {
      let distance = Math.round(this.width / parent.children.length)
      let x = distance * i + distance * 0.5;
      return x; 
    },
    getYPos(newDepth) {
      let y = newDepth * 200 + 80;
      return Math.round(y);
    },
    getYRectOffset() {
      return this.calculateYPos() + 60;
    },
    getYPosDepth(newDepth) {
      let y = newDepth * 200 + 40;
      return Math.round(y);
    },
    rectWidth(node) {
      return node.name.length * 10 + 100;
    }
  },
};
</script>

<style>
  .node text {
    font-size: 20px;
    text-anchor: middle;
  }
  
  .node rect {
    fill: none;
    stroke: black;
    stroke-width: 4;
  }
  .node text:hover .node rect {
    fill: #333;
  }

  .node polyline {
    stroke: #000;
    fill: none;
    stroke-width: 4;
    stroke-linecap: round;
  }
</style>