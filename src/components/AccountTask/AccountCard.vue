<template>
  <div>
    <b-container class="bv-example-row">
  <b-row class="row">
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
      
      <b-button variant="success" @click="onDetail(person.id,person.email)" class="cardButton" >Detail</b-button>
      <b-button variant="primary" @click="onEdit(person.id)" class="cardButton" v-if="$store.getters.loggedIn">Edit</b-button>
      <b-button variant="danger" @click="onDelete(person.id)" class="cardButton" v-if="$store.getters.loggedIn">Delete</b-button>
      
      
    </b-card>
  </b-row>
  
   <b-button variant="primary" @click="onCreate" class="editCreate" v-if="$store.getters.loggedIn">Create</b-button>
</b-container>
   
   
  </div>
  
</template>

<script>
import axios from "axios";


export default {
  
  
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
        this.$swal(JSON.stringify(res))
        this.getData()
        
      });
    },
    onEdit(id){
      this.$router.push("/edit/"+id);
      


    },
    onDetail(id,email){
      this.$swal("ID:\t"+ id + "\nE-Mail:\t"+ email)
      
    }
  },
  created() {
    
    this.getData();
     
     
    
  }
};
</script>

<style>
.mb-2 {
  margin-right: 20px;
  
  border-color:dimgray!important;
  
  
}
.editCreate {
  
  margin-top: 30px;
  
  float: left;
}
.bv-example-row {
  margin-top: 25px;
  
}
.cardButton{
  margin-right: 5px;
}
.row{
  padding-left: none!important;
  padding-right: none!important;
}


</style>