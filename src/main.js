import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Register from './components/Register'
import CreateAccount from './components/AccountCreate.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const router = new VueRouter({
  routes: [
    {path:'/login', component: Login },
    {path:'/', component: Index },
    {path: '/register', component: Register},
    {path: '/create', component: CreateAccount}
    
  ],
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
