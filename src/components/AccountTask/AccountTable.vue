<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-table-simple responsive>
          <b-thead>
            <b-tr>
              <b-th>ID</b-th>
              <b-th>First Name</b-th>
              <b-th>Last Name</b-th>
              <b-th>E-Mail</b-th>
              <b-th></b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="item in items.data" :key="item.id">
              <b-td>{{ item.id }}</b-td>
              <b-td>{{ item.first_name }}</b-td>
              <b-td>{{ item.last_name }}</b-td>
              <b-td>{{ item.email }}</b-td>
              <b-td>
              
        <b-button
          @click="editForm(item.first_name,item.last_name,item.email,item.id)"
          class="buttons"
          v-b-modal.modal-prevent-edit
          variant="success"
          v-if="$store.getters.loggedIn"
          >Edit</b-button
          
        >
        
        
        <b-button
          @click="onDelete(item.id)"
          class="buttons"
          variant="danger"
          v-if="$store.getters.loggedIn"
          >Delete</b-button
          
        >
            </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-row>

      <div>
        <b-button
          v-b-modal.modal-prevent-closing
          variant="primary"
          v-if="$store.getters.loggedIn"
          >Create</b-button
          
        >
        
       
        <b-modal
          id="modal-prevent-closing"
          ref="modal"
          title="Create Person"
          @ok="onCreate(first_name, last_name, email)"
        >
        
        
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
              label="Name"
              label-for="name-input"
              invalid-feedback="Name is required"
            >
              <b-form-input
                id="name-input"
                v-model="first_name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Last Name"
              label-for="last-name-input"
              invalid-feedback="Last Name is required"
            >
              <b-form-input
                id="last-name-input"
                v-model="last_name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Email"
              label-for="email-input"
              invalid-feedback="Email is required"
            >
              <b-form-input
                id="email-input"
                v-model="email"
                required
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
        <b-modal
          
          id="modal-prevent-edit"
          ref="modal"
          title="Edit Person"
          @ok="onEdit(first_name,last_name,email,id)"
        >
        
        
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
              label="Name"
              label-for="name-input"
              invalid-feedback="Name is required"
            >
              <b-form-input
                id="name-input"
                v-model="first_name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Last Name"
              label-for="last-name-input"
              invalid-feedback="Last Name is required"
            >
              <b-form-input
                id="last-name-input"
                v-model="last_name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Email"
              label-for="email-input"
              invalid-feedback="Email is required"
            >
              <b-form-input
                id="email-input"
                v-model="email"
                required
              ></b-form-input>
            </b-form-group>

            
          </form>
        </b-modal>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      
      items: [],
    };
  },
  methods: {
    getData() {
      axios.get("https://reqres.in/api/users").then((res) => {
        console.log(res);
        this.items = res.data;
        console.log(this.items.data);
      });
    },
    onCreate(first_name, last_name, email) {
      var id = this.items.data.length + 1;
      this.items.data.push({ first_name, last_name, email, id });
      this.first_name = "";
      this.last_name = "";
      this.email = "";
      
    },
    onDelete(id){
      var removeIndex = this.items.data.map(item => item.id).indexOf(id);
      this.items.data.splice(removeIndex,1)
    },
    onEdit(first_name, last_name, email,id){
      var editIndex = this.items.data.map(item => item.id).indexOf(id);
      this.items.data.splice(editIndex,1,{id,first_name,last_name,email})
    },
    editForm(first_name, last_name, email,id){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.id = id;
        
    },
    
  },
  created() {
    this.getData();
  },
};
</script>

<style>
.edit {
  width: 100px;
  margin-top: 30px;
  
  float: left;
}
.editLabel {
  width: 300px !important;
  margin-top: 15px;
}
.buttons {
  margin-right: 5px;
  
}
</style>