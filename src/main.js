import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from './Index.vue'
import Login from './Login.vue'
import Register from './Register.vue'
import List from './components/List.vue'
import AccountCreate from './components/AccountTask/AccountCreate.vue'
import AccountEdit from './components/AccountTask/AccountEdit.vue'
import Profile from './components/Profile.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store.js'



Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);


const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/', component: Index },
    { path: '/register', component: Register },
    { path: '/create', component: AccountCreate },
    { path: '/list', component: List },
    { path: '/edit/:id', component: AccountEdit },
    { path: '/profile', component: Profile }

  ],
  mode: 'history'
})

new Vue({
  render: h => h(App),
  store,
  router

}).$mount('#app')
