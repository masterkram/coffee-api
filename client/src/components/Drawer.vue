<template>
  <v-navigation-drawer
    v-model="drawer"
    color="primary"
    permanent
    absolute
    dark
  >
    <v-list
      dense
      nav
      class="py-0"
    >
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Coffee App</v-list-item-title>
          <v-list-item-subtitle>Martin Garrix</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.href"
      >
        <v-list-item-icon>
          <font-awesome-icon :icon="item.icon" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'My Coffees', icon: 'coffee', href: '/my-coffee' },
          { title: 'Brew Methods', icon: 'blender', href: '/brew-methods' },
          { title: 'Roast Methods', icon: 'fire', href: '/roast-methods' },
          { title: 'Coffee Blends', icon: 'tags', href: '/coffee-blends' },
          { title: 'Varieties', icon: 'leaf', href: '/varieties' },
        ],
      }
    },
  }
</script>