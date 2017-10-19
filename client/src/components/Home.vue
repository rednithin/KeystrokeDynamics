<template>
  <v-layout row wrap>
    <v-flex d-flex xs12 sm6>
      <v-text-field
        name="input-1"
        label="Enter here"
        @input="tapThat"
        @blur="mergeThat"
        v-model="username"
      ></v-text-field>
      <br>
      <v-text-field
        name="input-2"
        label="Label Text"
      ></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
import tappy from 'tappy'
export default {
  data () {
    return {
      password: null,
      newPassword: null,
      username: ''
    }
  },
  methods: {
    tapThat () {
      this.newPassword.tap()
    },
    mergeThat () {
      this.newPassword.done()
      if (!this.password) {
        this.password = this.newPassword
        this.username = ''
        this.newPassword = new tappy.Rhythm()
        return
      }
      if (this.password.length === this.newPassword.length) {
        let similarity =
          tappy.compare(this.password, this.newPassword, true) * 100
        console.log(similarity)
        if (similarity > 80.0) {
          this.password = tappy.average(this.password, this.newPassword)
          console.log('SUCCESS')
        }
      } else {
        console.log('Failed')
      }
      this.username = ''
      this.newPassword = new tappy.Rhythm()
    }
  },
  mounted () {
    this.newPassword = new tappy.Rhythm()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
