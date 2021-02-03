<template>
  <v-app>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

};
</script>

<style>
.nav{
  text-align: center;
  margin-top: 1em;
}
</style>

