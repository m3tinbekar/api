<template>
  <div>
    <navbar></navbar>
    
    <b-card
       :key="singlePerson.data.id"
      :title="singlePerson.data.first_name + ' ' + singlePerson.data.last_name"
      :img-src="singlePerson.data.avatar"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="editForm"
    >
      <b-card-text>
        <h5><b>ID:</b>{{singlePerson.data.id}}</h5>
        <h5><b>Mail:</b>{{singlePerson.data.email}}</h5>   
      </b-card-text>

      
    </b-card>
    <b-form @submit="onEdit" v-if="show" class="editForm">
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
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
          type="text"
          v-model="form.job"
          placeholder="Enter job"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="edit">Edit</b-button>
      <b-button v-on:click="clickBack" variant="success" class="edit">Back</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../Navbar.vue";
export default {
  components: { Navbar },
  data() {
    return {
      form: {
        job: "",
        name: "",
      },

      show: true,
      
      singlePerson: []
    };
  },
  methods: {
    singleData(userId){
        userId = this.$route.params.id
        
        axios.get("https://reqres.in/api/users/"+userId)
        .then((res) =>{
            this.singlePerson = res.data
            console.log(res)
        })
    },
    onEdit(userId) {
      event.preventDefault();
      userId = this.$route.params.id
      axios
        .put("https://reqres.in/api/users/" + userId, {
          name: this.form.name,
          job: this.form.job,
        })
        .then((res) => {
            this.$swal(JSON.stringify(res))
            console.log(res)   
        });
    },
    clickBack(event) {
      event.preventDefault();
      this.$router.push("/");
    },
  },
  created(){
      this.singleData();
  }
};
</script>

<style>
.editForm {
  
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 25px;
  
}
.row > * {
  padding-left: 0px!important;
  padding-right: 0px!important;
  border-radius: 5px;
  
}


</style>
