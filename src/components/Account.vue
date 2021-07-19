<template>
  <div>
    <b-container class="bv-example-row">
  <b-row>
    <b-card
      v-for="person in persons.data"
      :key="person.id"
      :title="person.first_name + ' ' + person.last_name"
      :img-src="person.avatar"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        <h5><b>ID:</b>{{person.id}}</h5>
        <h5><b>Mail:</b>{{person.email}}</h5>       
      </b-card-text>
      <b-button variant="primary" @click="onEdit">Edit</b-button>
      <b-button variant="danger" @click="onDelete(person.id)">Delete</b-button>
      
    </b-card>
  </b-row>
   <b-button variant="primary" @click="onCreate" class="edit">Create</b-button>
</b-container>
    
   
  </div>
</template>

<script>
import axios from "axios";
export default {
  //props: ["persons"],
  data (){
    return {
      persons:[]
    }
  },
  methods: {
    getData() {
      axios.get("https://reqres.in/api/users/")
        .then((res) => {
          this.persons = res.data
        })
        
    },
    onCreate() {
      
      this.$router.push("/create");
    },
    onDelete(id) {
      axios.delete("https://reqres.in/api/users/" + id)
      .then((res) => {
        console.log(res)
        alert(JSON.stringify(res))
        this.getData()
        
      });
    },
    onEdit(id){
      axios.put("https://reqres.in/api/users/" + id ,{
        name : this.form.name,
        job : this.form.job
      })
      .then((res) => 
      console.log(res))


    }
  },
  created() {
     this.getData();
     
     
    
  }
};
</script>

<style>
.mb-2 {
  margin: 20px;
}
.edit {
  margin-top: 30px;
  margin-left: 25px;
  float: left;
}
</style>