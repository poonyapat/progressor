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
export default {
  components: {
    AppBar,
  },
}
</script>
