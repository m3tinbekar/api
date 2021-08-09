<template>
  <div>
    <navbar></navbar>
    <account-table></account-table>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import AccountTable from "./AccountTask/AccountTable.vue";

export default {
  components: { Navbar, AccountTable },

  data() {
    return{
      
    }
  },
};
</script>
