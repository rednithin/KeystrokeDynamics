<template>
  <v-layout column>
    <v-flex xs12>
      <panel title="Users">
        <v-text-field
          slot="action"
          solo
          prepend-icon="search"
          placeholder="Search"
          v-model="user.name"
          @input="onSearchInput"
        ></v-text-field>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex d-flex xs12 md6 v-for="user in users" :key="user.id">
              <v-card color="indigo darken-1" dark>
                <v-card-title primary class="title">{{user.name}}</v-card-title>
                <!-- <v-card-text>
                  {{post.description}}
                </v-card-text> -->
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
      users: null,
      user: {
        name: ''
      }
    }
  },
  methods: {
    async onSearchInput () {
      this.users = (await UserServices.getUsers(this.user)).data
    }
  },
  async mounted () {
    this.users = (await UserServices.getUsers(this.user)).data
  }
}
</script>
