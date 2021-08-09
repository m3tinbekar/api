<template>
  <div>
    <navbar></navbar>
    <b-container class="bv-example-row">
      <b-form @submit="onSubmit" v-if="show" class="loginForm">
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

        <b-button type="submit" variant="primary" class="edit">Login</b-button>
        <b-button v-on:click="onRegister" variant="danger" class="edit">Register</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
//import axios from "axios";
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },

  data() {
    return {
      form: {
        email: "",
        password: "",
      },

      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      this.login();
    },
    login() {
      // axios.post("https://reqres.in/api/login", {
      //     email: this.form.email,
      //     password: this.form.password,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     this.$swal(JSON.stringify(res));
      //     localStorage.setItem("token", res.data.token);
      //     localStorage.setItem("email", this.form.email);
      //     localStorage.setItem("password", this.form.password);
      //     this.$router.push("/");
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      this.$store.dispatch('retrieveToken', {
        email: this.form.email,
        password: this.form.password,
        
      })
       .then(response => {
          this.$router.push("/")
          console.log(response)
        })
    },

    onRegister() {
      this.$router.push("/register");
    },
  },
  created() {},
};
</script>

<style>
.loginForm {
  margin-top: 15%;
  margin-left: 25%;
  margin-right: 25%;
  
}
.edit{
  margin-right: 5px;
  width: 85px!important;
}
</style>