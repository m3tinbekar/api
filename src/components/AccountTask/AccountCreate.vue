<template>
    
  <div>
    <navbar></navbar>
    <b-form @submit="onCreate" @reset="onReset" v-if="show" class="createForm">
      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
        
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Job:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.job"
          placeholder="Enter job"
          required
        ></b-form-input>
      </b-form-group>

      


      <b-button type="submit" variant="primary">Create</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button v-on:click="clickBack" variant="success">Back</b-button>
    </b-form>
    
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../Navbar.vue'
  export default {
      components: {Navbar},
    data() {
      return {
        form: {
          job: '',
          name: '',
          
        },
        
        show: true
      }
    },
    methods: {
      onCreate(event) {
          event.preventDefault()
          axios.post("https://reqres.in/api/users",{
              name : this.form.name,
              job : this.form.job
          })
          .then((res) => {
              console.log(res)
              this.$swal(JSON.stringify(res))
          })
          
      },
      onReset(event) {
        event.preventDefault()
        
        this.form.name = ''
        this.form.job = ''
        
       
      },
      clickBack(event){
        event.preventDefault()
        this.$router.push('/');
      }
    }
  }
</script>

<style>
    .createForm{
        margin-left:20%;
        margin-right:20%;
    }
</style>