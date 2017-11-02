<template>
  <warning v-if="!$store.state.isAdminLoggedIn">
  </warning>
  <v-layout column v-else>
    <v-flex xs12 offset-md3 md6>
      <panel title="Admin's Profile">
        <v-text-field
          class="text-field"
          label="Name"
          readonly
          v-model="$store.state.admin.name"
        ></v-text-field>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import Warning from '@/components/Warning'
export default {
  components: {
    Warning,
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
