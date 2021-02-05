<template>
    <div class="menu-bar">
        <v-toolbar dark class="pink lighten-3">
            <v-toolbar-title class="display-1">Besquare</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-toolbar>
        <v-navigation-drawer
              color='pink lighten-3'
              v-model="drawer"
              absolute
              temporary
              >
                <v-list-item>
                    <v-list-item-icon>
                        <v-img :src="img"></v-img>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="title">Vuetify</v-list-item-title>
                    </v-list-item-content>   
                </v-list-item>

                <v-divider></v-divider>

                <v-list>
                    <router-link class="no-anchor " to="/">
                        <v-list-item link >
                            <v-list-item-title class="nav-item-list"><strong>Home Page</strong></v-list-item-title>    
                        </v-list-item> 
                    </router-link>
                    <router-link class="no-anchor" to="/crudapp">
                        <v-list-item link>
                            <v-list-item-title class="nav-item-list"><strong>Crud App</strong></v-list-item-title>    
                        </v-list-item> 
                    </router-link>
                                       
                </v-list> 
            </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'MenuBar',
    data() {
        return{
            drawer: false,
            img : window.location.origin + this.$route.path + '/favicon.ico'
        }
    }
}
</script>
<style>

.no-anchor{
    text-decoration: none;
    
}
.nav-item-list{
    color: white;
    padding: 0 0 0 1em;
}
</style>
