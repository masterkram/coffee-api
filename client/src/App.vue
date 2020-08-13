<template>
  <v-app>
    <Drawer />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Drawer from './components/Drawer';

export default {
  name: 'App',

  components: {
    Drawer,
  },

  data: () => ({
    //
  }),
};
</script>
