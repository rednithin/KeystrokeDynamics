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
        <v-list-tile :to="{name: 'UserProfile'}" v-if="$store.state.isUserLoggedIn && !isAdmin">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'UserWall'}" v-if="$store.state.isUserLoggedIn && !isAdmin">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Wall</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'UserFindUsers'}" v-if="$store.state.isUserLoggedIn && !isAdmin">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Find Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'AdminDeleteUsers'}" v-if="$store.state.isAdminLoggedIn && isAdmin">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Delete Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <router-link tag="v-toolbar-title" id="title" :to="{name: 'Home'}">
        Socio
      </router-link>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn
          v-if="!$store.state.isUserLoggedIn && !isAdmin" 
          flat 
          dark
          :to="{name: 'UserLogin'}"
        >User Login
        </v-btn>
        <v-btn 
          v-if="!$store.state.isUserLoggedIn && !isAdmin" 
          flat 
          dark
          :to="{name: 'UserRegister'}"
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
          :to="{name: 'AdminLogin'}"
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
    userLogout () {
      this.$store.dispatch('setUserToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({ name: 'Home' })
    },
    adminLogout () {
      this.$store.dispatch('setAdminToken', null)
      this.$store.dispatch('setAdmin', null)
      this.$router.push({ name: 'Home' })
    },
    toggleMode () {
      this.$router.push({ name: 'Home' })
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
