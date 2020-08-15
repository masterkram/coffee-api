<template>
  <v-container>
    <v-card
      v-if="!coffees.length"
      outlined
      max-width="475"
      class="mx-auto"
    >
      <v-card-title class="justify-center gray--text">Looks empty right? coffees will show up here:</v-card-title>
      <v-card-actions class="justify-center">
        <v-btn link to="/create" color="primary">Create Your first.</v-btn>
      </v-card-actions>
    </v-card>

    <v-row fluid v-if="coffees.length">
      <v-col v-for="coffee in coffees" v-bind:key="coffee.id">
        <Coffee :coffee=coffee />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getUserCoffees } from '../Services/CoffeeService'
import { Coffee } from './Coffee';

export default {
  name: 'MyCoffee',
  components: {
    Coffee,
  },
  data: () => ({
    coffees: [],
  }),
  mounted () {
    getUserCoffees().then(data => this.coffees = data);
  },
}
</script>

<style>
</style>