/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue')
import router from './router'
import store from './store'
// import store from './modules/tokenStore'
// import userStore from './modules/userStore'

import App from './views/App.vue'

// import Vuetify
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// Add this fo install vuetify-dialog¿
import "vuetify-dialog/dist/vuetify-dialog.min.css";
import Vuetify from 'vuetify';
import VuetifyDialog from "vuetify-dialog";


// vuetify options
const opts = {

  icons: {
    iconfont:  'mdi' || 'md'
  },

};


//use Vuetify
Vue.use(Vuetify, opts);

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!store.getters.loggedIn) {
        next({
          name: 'login',
        })
      } else {
        next()
      }
    } else {
      next() // make sure to always call next()!
    }
  })

  /**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,
    vuetify: new Vuetify(),
});

// impor axios from node_modules
// import axios from 'axios';

// use axios
//Vue.use(axios);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

