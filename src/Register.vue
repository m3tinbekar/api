<template>
  <div>
    <navbar></navbar>
    <b-container class="bv-example-row">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="loginForm">
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
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Re-Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.repassword"
          type="password"
          placeholder="Enter re-password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="edit">Submit</b-button>
      <b-button type="reset" variant="danger" class="edit">Reset</b-button>
    </b-form>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from './components/Navbar.vue';
export default {
  components: { Navbar },
  data() {
    return {
      form: {
        email: "",
        name: "",
      },

      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      if (this.form.password == this.form.repassword) {
        axios
          .post("https://reqres.in/api/register", {
            email: this.form.email,
            password: this.form.password,
          })
          .then((res) => {
            if (res.status == 200) {
              this.$swal(JSON.stringify(res))
              console.log(res);
              this.$router.push("/");
            }
          });
      } else {
        this.$swal("The password confirmation does not match.");
        this.form.email = "";
        this.form.password = "";
        this.form.repassword = "";
      }
    },
    onReset(event) {
      event.preventDefault();
      this.form.email = "";
      this.form.password = "";
      
    },
  },
};
</script>