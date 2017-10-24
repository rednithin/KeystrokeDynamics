<template>
  <v-layout column>
    <v-flex xs12>
      <panel title="Posts">
        <v-btn
          @click="navigateTo({name: 'UserCreatePost'})" 
          slot="action"
          class="indigo accent-2"
          light
          medium
          absolute
          right
          middle
          fab>
          <v-icon>add</v-icon>
        </v-btn>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex d-flex xs12 md6 v-for="post in posts" :key="post.id">
              <v-card color="indigo darken-1" dark>
                <v-card-title primary class="title">{{post.title}}</v-card-title>
                <v-card-text>
                  {{post.description}}
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>         
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import UserServices from '@/services/UserServices'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      posts: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.posts = (await UserServices.getWall()).data
  }
}
</script>
