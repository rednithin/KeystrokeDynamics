<template>
  <v-layout row column>
    <v-flex xs12 md6 offset-md3>
      <panel title="Welcome to Socio">
        <div>
          <h5>You are on the homepage. Browse around.</h5>
        </div>
        <br>
        <div>
          <p><h5>Count Users: {{userCount}}</h5></p>
          <p><h5>Count Admins: {{adminCount}}</h5></p>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import UserServices from '@/services/UserServices'
export default {
  data () {
    return {
      userCount: '',
      adminCount: ''
    }
  },
  components: {
    Panel
  },
  async mounted () {
    if (process.env.NODE_ENV !== 'production') {
      let response = (await UserServices.getStats()).data
      console.log('RESPONSE : ' + JSON.stringify(response))
      this.userCount = response.userCount
      this.adminCount = response.adminCount
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
