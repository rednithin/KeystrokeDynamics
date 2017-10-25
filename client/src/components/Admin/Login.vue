<template>
  <v-layout column>
    <v-flex xs12 offset-md3 md6>
      <panel title="Admin Login">
        <v-text-field
          class="text-field"
          label="Email"
          v-model="email"
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
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  components: {
    Panel
  },
  methods: {
    async login () {
      try {
        this.error = ''
        const response = await AuthenticationService.adminLogin({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setAdminToken', response.data.token)
        this.$store.dispatch('setAdmin', response.data.admin)
        this.$router.push({name: 'AdminProfile'})
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