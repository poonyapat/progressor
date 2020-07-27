<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <span v-if="googleUser"> {{googleUser['Ot']['Cd']}} </span>
      <v-spacer></v-spacer>
      <v-btn @click="signIn" text>Sign In</v-btn>
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
    ...mapMutations(['updateUser'])
  },
  computed: {
  ...mapState({
    googleUser: state => state.user
  })
},
};
</script>