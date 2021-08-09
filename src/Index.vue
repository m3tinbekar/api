<template>
    <div>
        <navbar></navbar>
        <account-card></account-card>
        

    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AccountCard from './components/AccountTask/AccountCard.vue'




export default {
    name : 'index',
    components: {AccountCard,Navbar},
  data(){
    return{
     
    }
  },
  
  methods:{
    

    
    

  },
  
  created() {
    
     
    
  }
}
</script>

