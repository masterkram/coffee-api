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

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,600&display=swap');

  html, body {
    font-family: 'Roboto Mono', monospace !important;
  }

  #app {
    font-family: 'Roboto Mono', monospace !important;
  }
</style>