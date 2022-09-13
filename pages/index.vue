<template>
  <div>
    <Nav/>
    <General/>
    

  </div>



</template>


<script>


import Nav from '../components/Nav.vue'
import axios from 'axios'
import main from '../src/main.js'

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
