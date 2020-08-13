<template>
  <v-container>
    {{ varieties }}
  </v-container>
</template>

<script>
import { getVarietyTree } from '../Services/CoffeeService'

export default {
  name: 'Varieties',
  components: {
  },
  data: () => ({
    varieties: null,
  }),
  mounted () {
    getVarietyTree().then(data => this.varieties = data);
  },
}
</script>

<style>

</style>