<template>
  <warning v-if="!$store.state.isUserLoggedIn">
  </warning>
  <v-layout justify-center align-center v-else>
    <v-flex>
      Welcome <span>{{ $store.state.user.name }}</span> !!!
    </v-flex>
  </v-layout>
</template>

<script>
import Warning from '@/components/Warning'
export default {
  components: {
    Warning
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
