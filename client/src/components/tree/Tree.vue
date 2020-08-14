<template>
  <div class="tree">
    <ul class="tree-list">
      <!-- {{ treeData }} -->
      <TreeNode :nodes="treeData"></TreeNode>
    </ul>
  </div>
</template>

<script>
import TreeNode from "./TreeNode";

export default {
  props: {
    treeData: Array,
  },
  components: {
    TreeNode
  }
};
</script>

<style>
.tree-list ul {
  padding-left: 16px;
  margin: 6px 0;
}
</style>