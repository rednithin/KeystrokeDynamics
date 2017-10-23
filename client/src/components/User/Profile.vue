<template>
  <div>
    <v-layout justify-center align-center v-if="!$store.state.isUserLoggedIn">
      <v-flex>
        Sorry you need to login first.
      </v-flex>
    </v-layout>
    <v-layout justify-center align-center v-else>
      <v-flex>
        Welcome <span>{{ $store.state.user.name }}</span> !!!
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
