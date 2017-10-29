<template>
  <v-layout column>
    <v-flex xs12 offset-md3 md6>
      <panel title="Admin Register">
        <v-text-field
          class="text-field"
          label="Name"
          v-model="admin.name"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Email"
          v-model="admin.email"
        ></v-text-field>
        <v-text-field
          type="password"
          class="text-field"
          label="Password"
          v-model="admin.password"
        ></v-text-field>
        <v-btn dark class="indigo lighten-1" @click="register">Add Admin</v-btn>
        <br>
        <p>{{ output }}</p>
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
      admin: {
        name: '',
        email: '',
        password: ''
      },
      ouput: ''
    }
  },
  components: {
    Panel
  },
  methods: {
    async register () {
      try {
        this.output = ''
        this.error = ''
        await AuthenticationService.adminRegister(this.admin)
        this.admin = {
          name: '',
          email: '',
          password: ''
        }
        this.output = 'Admin added.'
      } catch (e) {
        this.output = e.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>