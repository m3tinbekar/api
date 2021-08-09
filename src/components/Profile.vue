<template>
    <div>
        <navbar></navbar>
        <b-container class="bv-example-row">
            <b-card
             
       :key="profile.id"        
      :title="profile.first_name + ' ' + profile.last_name"
      :img-src="profile.avatar"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="editForm"
    >
      <b-card-text>
        <h5><b>ID:</b>{{profile.id}}</h5>
        <h5><b>Mail:</b>{{profile.email}}</h5>   
      </b-card-text>

      
    </b-card>
    <b-form  v-if="show" class="editForm">
      <b-form-group id="input-group-1" label="E-mail:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="text"
          readonly
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="text"
          v-model="form.password"
          readonly
          required
        ></b-form-input>
      </b-form-group>

      
      <b-button v-on:click="clickBack" variant="success" class="edit">Back</b-button>
    </b-form>
          </b-container>  
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import axios from 'axios'
import store from '../store.js'

export default ({
    components : {Navbar},
    data() {
        
    return {
      form: {
        job: "",
        name: "",
      },

      show: true,
      
      persons: [],
      profile : []
    };
  },
  methods: {
    getData(){
         axios.get("https://reqres.in/api/users/")
        .then((res) => {
            this.persons = res.data
            
            for (let index = 0; index <6 ; index++) {
                 if(store.getters.getEmail==this.persons.data[index].email){
                    
                    this.profile = this.persons.data[index]
          }  
                
            }     
        this.form.email = store.getters.getEmail 
        this.form.password = store.getters.getPassword
        })
      },
      clickBack(event) {
      event.preventDefault();
      this.$router.push("/");
    },
    
    
  },
  created(){
      this.getData();
  }
})
</script>
