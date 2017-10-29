<template>
  <warning v-if="!$store.state.isUserLoggedIn">
  </warning>
  <v-layout column v-else>
    <v-flex>
      <panel title="Following">
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex d-flex xs12 md6 v-for="following in followings" :key="following.id">
              <v-card color="indigo darken-1" dark>
                <v-card-title primary class="title">{{following.name}}</v-card-title>
                <v-card-text>
                  <v-btn 
                    dark 
                    class="indigo lighten-1" 
                    :to="{
                      name: 'UserViewProfile',
                      params: {
                        userId: following.FollowingId
                      }
                    }">
                    View
                  </v-btn>
                  <v-btn 
                    dark 
                    class="indigo lighten-1" 
                    @click="unfollow(following)">
                    UnFollow
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <p>{{output}}</p>
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
      followings: [],
      output: ''
    }
  },
  methods: {
    async unfollow (following) {
      this.output = ''
      let response = (await UserServices.unfollowUser(following)).data
      this.output = response.output
      this.followings = (await UserServices.getFollowing({id: this.$store.state.user.id})).data
      this.followings.forEach(async (following, index) => {
        let name = await this.getUserName(following.FollowingId)
        this.$set(this.followings[index], 'name', name)
      })
    },
    async getUserName (id) {
      let user = (await UserServices.getUserName({id: id})).data
      console.log(user)
      return user.name
    }
  },
  async beforeMount () {
    console.log('Enter mounted')
    this.followings = (await UserServices.getFollowing({id: this.$store.state.user.id})).data
    console.log('Following' + JSON.stringify(this.users))
    this.followings.forEach(async (following, index) => {
      let name = await this.getUserName(following.FollowingId)
      this.$set(this.followings[index], 'name', name)
    })
  }
}
</script>
