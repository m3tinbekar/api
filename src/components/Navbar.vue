<template>

  <b-navbar type="dark" variant="dark">
    <b-navbar-nav >
      <b-navbar-brand router-link to="/">Home</b-navbar-brand>
      
      <b-nav-item router-link to="/list">List</b-nav-item>
      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item router-link to="/login" v-if="!$store.getters.loggedIn">Login</b-dropdown-item>
        <b-dropdown-item router-link to="/register" v-if="!$store.getters.loggedIn">Register</b-dropdown-item>
        <b-dropdown-item router-link to="/profile" v-if="this.$store.getters.loggedIn" >Profile</b-dropdown-item>
        <b-dropdown-item  v-if="$store.getters.loggedIn" @click="logout">Logout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>



</template>






<script>
//import axios from 'axios'


export default {
    name: 'navbar',
    data(){
      return{
        profile : []
      }
    },
    methods : {
      logout(){
        this.$store.dispatch('destroyToken')
      .then(response => {
        this.$router.push("/login")
        console.log(response)
      })
      },
      
      

    }   
    }

</script>
