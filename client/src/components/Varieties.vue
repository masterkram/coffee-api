<template>
  <v-container>
  <div>
    <Tree :tree-data="varieties"></Tree>
  </div>
  </v-container>
</template>

<script>
import { getVarietyTree } from "../Services/CoffeeService";
import Tree from "./tree/Tree";

export default {
  name: "Varieties",
  components: {
    Tree
  },
  data: () => ({
    size: 1000,
    varieties: null,
  }),
  mounted() {
    getVarietyTree().then((data) => (this.varieties = data));
  },
};
</script>

<style>
</style>