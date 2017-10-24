<template>
  <div class="white elevation-2">

    <v-toolbar flat dense class='indigo lighten-1' dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="action">
      </slot>
    </v-toolbar>

    <div class="pl-4 pr-4 pt-3 pb-0">
      <slot>
        No slot defined.
      </slot> 
    </div>

  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>