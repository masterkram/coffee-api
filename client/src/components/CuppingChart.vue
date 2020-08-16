<template>
  <v-container>
    <div class="graph-container">
      <svg width="250" height="250">
        <g>
          <polygon :points="points"></polygon>
          <circle cx="100" cy="100" r="80"></circle>
          <circle cx="100" cy="100" r="60"></circle>
          <circle cx="100" cy="100" r="40"></circle>
          <circle cx="100" cy="100" r="20"></circle>
          <circle cx="100" cy="100" r="10"></circle>
          <AxisLabel
            v-for="(stat, index) in stats"
            v-bind:key="index"
            :stat="stat"
            :index="index"
            :total="stats.length">
          </AxisLabel>
        </g>
      </svg>
    </div>
    <div class="value-container">
      <div class="mx-1" v-for="(stat, index) in stats" v-bind:key="index">
        <label class="stat-label">{{stat.label}}</label>
        <br />
        <input type="range" v-model="stat.value" min="0" max="100" />
        <span class="fixed-w">{{stat.value}}</span>
      </div>
    </div>
  </v-container>
</template>

<script>
import AxisLabel from './AxisLabel';

export default {
  name: 'CuppingChart',
  components: {
    AxisLabel,
  },
  props: {
    stats: Array,
  },
  computed: {
    points: function() {
      let total = this.stats.length;
      return this.stats
        .map((stat, i) => {
          let point = this.valueToPoint(stat.value, i, total);
          return point.x + "," + point.y;
        })
        .join(" ");
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

<style>
  .graph-container {
    display: flex;
    justify-content: center;
  }

  .value-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .value-container > div {
    min-width: 157px;
  }

  polygon {
    fill: #42b983;
    opacity: 0.75;
  }

  circle {
    fill: transparent;
    stroke: #999;
  }

  text {
    font-size: 10px;
    fill: #666;
  }

  .stat-label {
    margin-left: 10px;
    width: 20px;
  }
</style>