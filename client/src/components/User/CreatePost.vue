<template>
  <v-layout column>
    <v-flex xs12 offset-md3 md6>
      <panel title="Create a post">
        <v-text-field
          required
          :rules="[required]"
          label="Title"
          v-model="song.title"
        >
        </v-text-field>
        <v-text-field
          required         
          :rules="[required]" 
          multi-line
          label="Description"
          v-model="song.description"
        >
        </v-text-field>
        <v-btn 
          dark 
          class="indigo lighten-1" 
          @click="createPost">
          Post
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
  
</template>

<script>
import UserServices from '@/services/UserServices'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: {
        title: null,
        description: null
      },
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    Panel
  },
  methods: {
    async createPost () {
      await UserServices.createPost(this.song)
      this.$router.push({name: 'UserWall'})
    }
  }
}
</script>

<style scoped>

</style>


