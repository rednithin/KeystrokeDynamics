<template>
  <warning v-if="!$store.state.isUserLoggedIn">
  </warning>
  <v-layout justify-center align-center v-else>
    <v-flex>
      This is <span>{{ user.name }}'s</span> Profile Page!!!
    </v-flex>
  </v-layout>
</template>

<script>
import Warning from '@/components/Warning'
import UserServices from '@/services/UserServices'
export default {
  data () {
    return {
      user: null
    }
  },
  components: {
    Warning
  },
  async mounted () {
    const userId = this.$store.state.route.params.userId
    console.log(userId)
    this.user = (await UserServices.getUsers({id: userId})).data
  }
}
</script>

<style scoped>

</style>

