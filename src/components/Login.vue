<template>
  <div>
    <b-form @submit="onSubmit" @register="onRegister" v-if="show" class="loginForm">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>

      

      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Register</b-button>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    
    data() {
      return {
        form: {
          email: '',
          password: '',
          
        },
        
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        
        this.login();
      },
      login() {
          axios.post("https://reqres.in/api/login", {
          email: this.form.email,
          password: this.form.password,
        })
        .then(()=> {
            
            this.$router.push('/');       
        })
        .catch((error)=> {
          console.log(error);
        });
        
    },
      
      onRegister() {
        
        this.$router.push('/');
      }
    },
    created() {
        
    }
  }
</script>

<style>
    .loginForm{
        margin-top: 20%;
        margin-left:40%;
        margin-right:40%;
        width: 400px;
    }
    
    
</style>