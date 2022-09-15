<template>
  <div>
    <Nav/>
    <General/>
    
    
    
  </div>



</template>


<script>


import axios from 'axios'
import Nav from '../components/Nav.vue'



export default {
  
  name: 'Index',
  components: {
    Nav,
  },


  data() {
    return {
      data: [],
    }
  },

}

</script>

<style>
  body{
  
    background: #E5E5E5;
  }

</style>
