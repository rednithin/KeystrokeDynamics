<template>
  <v-layout column>
    <v-flex xs12 offset-md3 md6>
      <panel title="Register">
        <v-text-field
          class="text-field"
          label="Name"
          v-model="user.name"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Age"
          v-model="user.age"
        ></v-text-field>
        <v-select
          v-bind:items="genders"
          v-model="user.gender"
          label="Gender"
          single-line
          bottom
        ></v-select>
        <v-text-field
          class="text-field"
          label="Phone"
          v-model="user.phone"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Status"
          v-model="user.status"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Objective"
          v-model="user.objective"
          multi-line
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Email"
          v-model="user.email"
          @input="tapThat"
          @blur="finish"
        ></v-text-field>
        <v-text-field
          type="password"
          class="text-field"
          label="Password"
          v-model="user.password"
        ></v-text-field>
        <v-btn dark class="indigo lighten-1" @click="register">Register</v-btn>
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
      user: {
        name: '',
        email: '',
        rhythm: '',
        password: '',
        phone: '',
        gender: '',
        age: '',
        status: '',
        objective: ''
      },
      genders: ['Male', 'Female'],
      rhythm: null,
      error: ''
    }
  },
  components: {
    Panel
  },
  methods: {
    async register () {
      try {
        this.error = ''
        this.user.rhythm = JSON.stringify(this.rhythm)
        const response = await AuthenticationService.userRegister(this.user)
        console.log(response)
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