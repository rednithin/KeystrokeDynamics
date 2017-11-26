<template>
  <warning v-if="!$store.state.isUserLoggedIn">
  </warning>
  <v-layout column v-else>
    <v-flex xs12>
      <panel title="Search">
        <v-text-field
          label="Type Friend's Name"
          v-model="user.name"
          @input="onSearchInput"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex>
      <panel title="Users">
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex d-flex xs12 md6 v-for="user in users" :key="user.id">
              <v-card color="indigo darken-1" dark>
                <v-card-title primary class="title">{{user.name}}</v-card-title>
                <v-card-text>
                  <v-btn 
                    dark 
                    class="indigo lighten-1" 
                    :to="{
                      name: 'UserViewProfile',
                      params: {
                        userId: user.id
                      }
                    }">
                    View
                  </v-btn>
                  <v-btn 
                    dark 
                    class="indigo lighten-1" 
                    @click="follow(user.id)">
                    Follow
                  </v-btn>
                  <v-btn 
                    dark 
                    class="indigo lighten-1" 
                    @click="report(user.id)">
                    Report
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
      users: null,
      user: {
        name: ''
      },
      output: ''
    }
  },
  methods: {
    async onSearchInput () {
      this.users = (await UserServices.getUsers(this.user)).data
      this.users = this.users.filter(user => user.id !== this.$store.state.user.id)
    },
    async follow (id) {
      this.output = ''
      let body = {
        UserId: this.$store.state.user.id,
        FollowingId: id
      }
      this.output = (await UserServices.followUser(body)).data.output
    },
    async report (id) {
      this.output = ''
      let body = {
        UserId: this.$store.state.user.id,
        ReportedId: id
      }
      this.output = (await UserServices.reportUser(body)).data.output
    }
  },
  async mounted () {
    this.users = (await UserServices.getUsers(this.user)).data
    this.users = this.users.filter(user => user.id !== this.$store.state.user.id)
  }
}
</script>
