<template>
  <v-layout column>
    <v-flex xs12 offset-md3 md6>
      <panel title="Login">
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
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import AuthenticationService from '@/services/AuthenticationService'
import tappy from 'tappy'
export default {
  data () {
    return {
      email: '',
      rhythm: null,
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
        const response = await AuthenticationService.userLogin({
          email: this.email,
          password: this.password,
          rhythm: JSON.stringify(this.rhythm)
        })
        this.$store.dispatch('setUserToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({name: 'UserProfile'})
      } catch (e) {
        this.error = e.response.data.error
      }
    },
    tapThat () {
      if (this.rhythm != null) { this.rhythm.tap() }
    },
    finish () {
      this.rhythm.done()
    }
  },
  mounted () {
    this.rhythm = new tappy.Rhythm()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>