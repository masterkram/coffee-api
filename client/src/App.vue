<template>
  <v-app>
    <Drawer />

    <v-main>
      <MyCoffee />
    </v-main>
  </v-app>
</template>

<script>
import MyCoffee from './components/MyCoffee';
import Drawer from './components/Drawer';

export default {
  name: 'App',

  components: {
    MyCoffee,
    Drawer,
  },

  data: () => ({
    //
  }),
};
</script>
