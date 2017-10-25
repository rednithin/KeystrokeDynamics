<template>
  <v-layout justify-center align-center>
    <v-flex>
      This is <span>{{ user.name }}'s</span> Profile Page!!!
    </v-flex>
  </v-layout>
</template>

<script>
import UserServices from '@/services/UserServices'
export default {
  data () {
    return {
      user: null
    }
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

