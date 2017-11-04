<template>
  <warning v-if="!$store.state.isUserLoggedIn">
  </warning>
  <v-layout column v-else>
    <v-flex xs12>
      <panel title="Following Wall">
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
        <v-container fluid grid-list-md v-if="show">
          <v-layout justify-center align-center v-if="posts.length === 0">
            <v-flex>
              You need to follow someone first or there are no posts from the people you are following.
            </v-flex>
          </v-layout>
          <v-layout row wrap v-else>
            <v-flex d-flex xs12 md6 v-for="(post, index) in posts" :key="post.id">
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <div class="headline" style="text-align: left;">{{post.title}}</div>
                    <div class="grey--text" style="text-align: left;"> Created by {{post.author}}</div>
                    <div style="text-align: left;">
                      <p style="word-break: break-all;">
                        {{post.description}}
                      </p>
                    </div>  
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
      posts: null,
      show: false
    }
  },
  async beforeMount () {
    this.posts = (await UserServices.getFollowingWall(this.$store.state.user)).data
    this.show = true
  }
}
</script>
