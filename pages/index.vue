<template>
  <div>
    <Nav />
    <Footer/>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Index",
  components: {
    Nav,
    Footer
},

  data() {
    return {
      data: [],
    };
  },
};
</script>

<style>
body {
  background: #e5e5e5;
}
</style>
