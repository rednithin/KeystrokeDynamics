<template>
  <v-layout column>
    <v-flex xs12 offset-sm1 sm10 offset-md2 md8>
      <div class="white elevation-2">
        <v-toolbar flat dense class='indigo lighten-1' dark>
          <v-toolbar-title>Admin Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-3 pb-0">
            <v-text-field
              class="text-field"
              label="Email"
              v-model="email"
              @input="tapThat"
              @blur="finish"
            ></v-text-field>
            <v-text-field
              type="password"
              class="text-field"
              label="Password"
              v-model="password"
            ></v-text-field>
            <v-btn dark class="indigo lighten-1" @click="login">Login</v-btn>
            <br>
            <p>{{ error }}</p>
            <br>
          </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async login () {
      try {
        this.error = ''
        const response = await AuthenticationService.adminLogin({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setAdminToken', response.data.token)
        this.$store.dispatch('setAdmin', response.data.admin)
        this.navigateTo({name: 'AdminProfile'})
      } catch (e) {
        this.error = e.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>