<template>
  <v-app>
    <app-bar></app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
  },
  components: {
    AppBar,
  },
  watch: {
    user() {
      if (this.user && this.$router.currentRoute.name == 'Home'){
        this.$router.push({name: 'Projects'}).catch(err => {err})
      }
      else if (!this.user){
        this.$router.push({name: 'Home'}).catch(err => {err})
      }
    }
  },
  mounted () {
    if (!this.user){
      this.$router.push({name: 'Home'}).catch(err => {err})
    }
  },
}
</script>
