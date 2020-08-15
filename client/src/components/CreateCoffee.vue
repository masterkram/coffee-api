<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card outlined>
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>
              <font-awesome-icon icon="coffee" class="mr-4" />
              Create Coffee
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom></v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field label="Name" name="name" type="text"></v-text-field>

              <v-textarea
                outlined
                id="description"
                label="Description"
                name="description"
                type="text"
              ></v-textarea>

              <v-autocomplete
                :items="coffeeBlends"
                item-text="Description"
                item-value="API"
                label="Coffee Blends"
                placeholder="Start typing to Search"
                return-object
              ></v-autocomplete>

              <v-select outlined  label="Roast Method" :items="roastMethods"></v-select>

              <v-select outlined label="Brew Method" :items="brewMethods"></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="4">
        <v-card outlined>
          <CuppingChart :stats="stats" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  getBrewMethods,
  getRoastMethods,
  getCoffeeBlends,
  getStats,
} from "../Services/CoffeeService";
import CuppingChart from './CuppingChart';

export default {
  name: "CreateCoffee",
  components: {
    CuppingChart,
  },
  data: () => ({
    roastMethods: [],
    brewMethods: [],
    coffeeBlends: [],
    stats: [],
  }),
  mounted() {
    getBrewMethods().then((data) => (this.brewMethods = data));
    getRoastMethods().then((data) => (this.roastMethods = data));
    getCoffeeBlends().then((data) => (this.coffeeBlends = data));
    getStats().then((data) => (this.stats = data));
  },
};
</script>

<style>
</style>