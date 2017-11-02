<template>
  <warning v-if="!$store.state.isUserLoggedIn">
  </warning>
  <v-layout column v-else>
    <v-flex xs12 offset-md3 md6>
      <panel title="My Profile">
        <v-text-field
          class="text-field"
          label="Name"
          readonly
          v-model="$store.state.user.name"
          @input="tapThat"
          @blur="finish"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Age"
          readonly
          v-model="$store.state.user.age"
        ></v-text-field>
        <v-text-field
          v-model="$store.state.user.gender"
          label="Gender"
          readonly
          class="text-field"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Phone"
          readonly
          v-model="$store.state.user.phone"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Email"
          readonly
          v-model="$store.state.user.email"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Status"
          readonly
          v-model="$store.state.user.status"
        ></v-text-field>
        <v-text-field
          class="text-field"
          label="Objective"
          readonly
          v-model="$store.state.user.objective"
          multi-line
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
