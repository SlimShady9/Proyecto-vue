<template>
  <v-app>
    <v-main>
      <MenuBar/>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import MenuBar from '@/components/MenuBar.vue';

export default {
  name: 'App',

  components: {
    MenuBar
  },

};
</script>

<style>
.nav{
  text-align: center;
  margin-top: 1em;
}
</style>

