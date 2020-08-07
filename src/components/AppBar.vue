<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title v-if="googleUser">{{googleUser['Ot']['Cd']}} :</v-toolbar-title>
      <v-toolbar-items v-if="googleUser"> <!-- class="hidden-sm-and-down"  -->
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn 
              text 
              @click="to_projects"
              v-bind="attrs"
              v-on="on" 
            >projects</v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(project, index) in projects"
              :key="index"
              @click="to_project(project)"
            >
              <v-list-item-title>{{ project }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn @click="signIn" text v-if="!googleUser">Sign In</v-btn>
        <v-btn @click="signOut" text v-if="googleUser">Sign Out</v-btn>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  methods: {
    async signIn() {
      const googleUser = await this.$gAuth.signIn()
      this.updateUser(googleUser)
    },
    async signOut(){
      await this.$gAuth.signOut()
      this.updateUser(undefined)
    },
    to_projects(){
      this.$router.push({ name: 'Projects'}).catch(err => {err})
    },
    to_project(project){
      this.$router.push({ name: 'Project', params: {'project': project}}).catch(err => {err})
    },
    ...mapMutations(['updateUser'])
  },
  computed: {
  ...mapState({
    googleUser: state => state.user,
    projects: state => state.projects
  })
},
};
</script>