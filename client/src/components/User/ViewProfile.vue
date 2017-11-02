<template>
  <warning v-if="!$store.state.isUserLoggedIn">
  </warning>
  <v-layout column v-else>
    <v-flex xs12 offset-md3 md6>
      <panel :title="user.name + '\'s Profile'">
        <v-text-field
          class="text-field"
          label="Name"
          readonly
          v-model="user.name"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Age"
          readonly
          v-model="user.age"
        ></v-text-field>
        <v-text-field
          v-model="user.gender"
          label="Gender"
          readonly
          class="text-field"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Phone"
          readonly
          v-model="user.phone"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Email"
          readonly
          v-model="user.email"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Status"
          readonly
          v-model="user.status"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Objective"
          readonly
          v-model="user.objective"
          multi-line
        ></v-text-field>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import Warning from '@/components/Warning'
import UserServices from '@/services/UserServices'
export default {
  data () {
    return {
      user: null
    }
  },
  components: {
    Warning,
    Panel
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

