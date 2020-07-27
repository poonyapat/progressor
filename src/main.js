import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import GAuth from 'vue-google-oauth2'
import '@babel/polyfill'

Vue.config.productionTip = false

const gauthOption = {
  clientId: '27339545554-qi7vnrp523n3kq99qllurm6rrj3ikjlc.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)

Vue.mixin({
  data: function() {
    return {
      get projectName() {
        return "Progreaxaz"
      }
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
