<template>
  <v-app id="app">
    <v-navigation-drawer
      clipped
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list dense>
        <v-list-tile @click="navigateTo({name: 'FindUsers'})">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Find Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title id="title" @click="navigateTo({name: 'Home'})">
        Socio
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn
          v-if="!$store.state.isLoggedIn" 
          flat 
          dark
          @click="navigateTo({name: 'Login'})"
        >Login
        </v-btn>
        <v-btn 
          v-if="!$store.state.isLoggedIn" 
          flat 
          dark
          @click="navigateTo({name: 'Register'})"
        >SignUp
        </v-btn>
        <v-btn
          v-else
          flat 
          dark
          @click="logout()"
        >Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid grid-list-md>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    drawer: false
  }),
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.navigateTo({ name: 'Home' })
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#title {
  cursor: pointer;
}
</style>
