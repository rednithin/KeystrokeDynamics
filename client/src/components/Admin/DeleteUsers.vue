<template>
  <warning v-if="!$store.state.isAdminLoggedIn">
  </warning>
  <v-layout column v-else>
    <v-flex xs12>
      <panel title="Search">
        <v-text-field
          label="Type User's Name"
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
                  <div>
                    <div class="grey--text" style="text-align: left;"> No of Reports: {{user.reports}}</div>
                  </div>
                  <v-btn 
                    dark 
                    class="indigo lighten-1" 
                    @click="deleteUser(user.id)">
                    Delete
                  </v-btn>
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
      }
    }
  },
  methods: {
    async onSearchInput () {
      this.users = (await UserServices.getUsers(this.user)).data
      this.users.forEach(async (user, index) => {
        let reports = (await UserServices.countUserReports({id: user.id})).data
        this.$set(this.users[index], 'reports', reports)
      })
    },
    async deleteUser (userId) {
      console.log(userId)
      await UserServices.deleteUser({id: userId})
      this.users = (await UserServices.getUsers(this.user)).data
    }
  },
  async beforeMount () {
    this.users = (await UserServices.getUsers(this.user)).data
    this.users.forEach(async (user, index) => {
      let reports = (await UserServices.countUserReports({id: user.id})).data.count
      this.$set(this.users[index], 'reports', reports)
    })
  }
}
</script>
