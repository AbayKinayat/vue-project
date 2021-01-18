import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from "@/filters/date.filter"
import messagePlugin from "@/utils/message.plugin"
import 'materialize-css/dist/js/materialize.min'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.use(Vuelidate)
Vue.use(messagePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyAL4Ww37vX4RzhztDvREzcUtMlFegak5Lo",
  authDomain: "vue-system-10eb1.firebaseapp.com",
  projectId: "vue-system-10eb1",
  storageBucket: "vue-system-10eb1.appspot.com",
  messagingSenderId: "513631631853",
  appId: "1:513631631853:web:3a652bf1659cadbb088fe4",
  measurementId: "G-DEM4VFKNHZ"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  }
  
})

