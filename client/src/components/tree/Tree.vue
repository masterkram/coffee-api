<template>
  <v-container>
    <v-row>
      <v-col>
      <v-card
        outlined
        class="tree mx-auto my-auto"
      >
      <v-card-title><font-awesome-icon icon="leaf" class="mr-2" />Varieties</v-card-title>
        <svg xmlns="http://www.w3.org/2000/svg" :view-box.camel="viewbox">
          <TreeNode :nodes="treeData" :depth="0"></TreeNode>
        </svg>
      </v-card>
      </v-col>
      <v-col>
        <v-card
          outlined
        >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TreeNode from "./TreeNode";

export default {
  props: {
    treeData: Array,
  },
  components: {
    TreeNode
  },
  data: () => ({
    size: 1000,
  }),
  computed: {
    viewbox() {
      return "0 0 " + this.size + " " + this.size;
    }
  }
};
</script>

<style>
  .tree svg {
    width: 100%;
    height: 100%;
  }

  .tree {
    max-height: 80vh;
    max-width: 40vw;
  }
</style>