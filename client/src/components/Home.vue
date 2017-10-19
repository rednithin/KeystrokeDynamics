<template>
  <v-layout row wrap>
    <v-flex d-flex xs12 sm6>
      <v-text-field
        name="input-1"
        label="Enter here"
        @input="tapThat"
        @blur="mergeThat"
        v-model="email"
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
      rhythm: null,
      newRhythm: null,
      email: ''
    }
  },
  methods: {
    tapThat () {
      this.newRhythm.tap()
    },
    mergeThat () {
      this.newRhythm.done()
      if (!this.rhythm) {
        this.rhythm = this.newRhythm
        this.email = ''
        this.newRhythm = new tappy.Rhythm()
        return
      }
      if (this.rhythm.length === this.newRhythm.length) {
        let similarity =
          tappy.compare(this.rhythm, this.newRhythm, true) * 100
        console.log(similarity)
        if (similarity > 80.0) {
          this.rhythm = tappy.average(this.rhythm, this.newRhythm)
          console.log('SUCCESS')
        }
      } else {
        console.log('Failed')
      }
      this.email = ''
      this.newRhythm = new tappy.Rhythm()
    }
  },
  mounted () {
    this.newRhythm = new tappy.Rhythm()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
