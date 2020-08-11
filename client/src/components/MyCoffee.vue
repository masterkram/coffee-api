<template>
  <v-container>

  <v-row fluid>
    <Coffee
      :v-for="coffee in coffees"
      :coffee="coffee" 
    />
  </v-row>

  </v-container>
</template>

<script>
import Coffee from './Coffee';
import { getUserCoffees } from '../Services/CoffeeService'

export default {
  name: 'MyCoffee',
  components: {
    Coffee,
  },
  data: () => ({
    coffees: null,
    id: 1,
  }),
  mounted () {
    this.coffees = getUserCoffees(this.id);
  }
}
</script>

<style>

</style>