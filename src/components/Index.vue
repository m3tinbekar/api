<template>
    <div>
        <navbar></navbar>
        
        <account :persons="persons"></account>
        

    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Account from './Account.vue'




export default {
    name : 'index',
    components: {Account,Navbar},
  data(){
    return{
      persons:[]
    }
  },
  
  methods:{
    

    
    

  },
  
  created() {
    
     
    
  }
}
</script>
