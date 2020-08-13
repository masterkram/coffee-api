<template>
  <v-container>

  <v-row fluid>

  </v-row>

  </v-container>
</template>

<script>
import { getUserCoffees } from '../Services/CoffeeService'

export default {
  name: 'MyCoffee',
  components: {
  },
  data: () => ({
  }),
  mounted () {
    getUserCoffees().then(data => console.log(data));
  },
}
</script>

<style>

</style>