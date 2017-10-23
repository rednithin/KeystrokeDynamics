<template>
  <v-app id="app">
    <v-navigation-drawer
      clipped
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-flex ml-3 mt-2 mb-0>
        <v-switch
          color="indigo"
          label="Admin Mode"
          v-model="isAdmin"
          @change="toggleMode"
        ></v-switch>
      </v-flex>
      <v-list dense>
        <v-list-tile @click="navigateTo({name: 'Home'})">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
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
          v-if="!$store.state.isUserLoggedIn && !isAdmin" 
          flat 
          dark
          @click="navigateTo({name: 'UserLogin'})"
        >User Login
        </v-btn>
        <v-btn 
          v-if="!$store.state.isUserLoggedIn && !isAdmin" 
          flat 
          dark
          @click="navigateTo({name: 'UserRegister'})"
        >User Register
        </v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn && !isAdmin"
          flat 
          dark
          @click="userLogout()"
        >User Logout
        </v-btn>
        <v-btn
          v-if="!$store.state.isAdminLoggedIn && isAdmin" 
          flat 
          dark
          @click="navigateTo({name: 'AdminLogin'})"
        >Admin Login
        </v-btn>
        <v-btn
          v-if="$store.state.isAdminLoggedIn && isAdmin"
          flat 
          dark
          @click="adminLogout()"
        >Admin Logout
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
    drawer: false,
    isAdmin: false
  }),
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    userLogout () {
      this.$store.dispatch('setUserToken', null)
      this.$store.dispatch('setUser', null)
      this.navigateTo({ name: 'Home' })
    },
    adminLogout () {
      this.$store.dispatch('setAdminToken', null)
      this.$store.dispatch('setAdmin', null)
      this.navigateTo({ name: 'Home' })
    },
    toggleMode () {
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
