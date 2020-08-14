<template>
  <v-container>
    <!-- {{ nodes }} -->
      <li v-for="node in nodes" v-bind:key="node.id">
        <p>{{ node.name }}</p>
        <ul v-if="node.children && node.children.length">
          <TreeNode :nodes="node.children"></TreeNode>
        </ul>
      </li>
  </v-container>
</template>

<script>
  export default {
    name: "TreeNode",
    props: {
      nodes: Array
    }
  };
</script>

<style>

</style>