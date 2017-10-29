<template>
  <warning v-if="!$store.state.isUserLoggedIn">
  </warning>
  <v-layout column v-else>
    <v-flex xs12>
      <panel title="Posts">
        <v-btn
          :to="{name: 'UserCreatePost'}" 
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
            <v-flex d-flex xs12 md6 v-for="(post, index) in posts" :key="post.id">
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <div class="headline" style="text-align: left;">{{post.title}}</div>
                    <div class="grey--text" style="text-align: left;"> Created by {{post.author}}</div>
                    <div style="text-align: left;">{{post.description}}</div>  
                  </div>
                </v-card-title>                                  
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>         
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Warning from '@/components/Warning'
import UserServices from '@/services/UserServices'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel,
    Warning
  },
  data () {
    return {
      posts: null
    }
  },
  methods: {
    async getUserName (id) {
      let user = (await UserServices.getUserName({id: id})).data
      console.log(user)
      return user.name
    }
  },
  async beforeMount () {
    this.posts = (await UserServices.getWall()).data
    this.posts.forEach(async (post, index) => {
      let author = await this.getUserName(post.UserId)
      this.$set(this.posts[index], 'author', author)
    })
  }
}
</script>
