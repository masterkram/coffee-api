<template>
  <v-card>
    <v-card-title>{{ coffee.name }}</v-card-title>
    <v-card-subtitle></v-card-subtitle>
    <v-card-text></v-card-text>
    <v-card-actions></v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Coffee',
  props: {
    coffee: Object
  }
}
</script>

<style>

</style>