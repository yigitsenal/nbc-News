<template>
    <div>
        <!-- <div v-if="news != null" class="breaking-news-title">
            <h1>{{news[0].name}}</h1>

        </div> -->
        <div class="trending">
            
         <img src="../images/Trending.png" alt="">
              
        </div>

        <!-- <div  class="kutu">
            
            <h1 v-if="news != null">{{news[0].name}}</h1>
            
        </div> -->
        

        <div class="footer-color">
            <img src="../images/footer-rectangle .png" alt="">
        </div>

        <div class="footer-text">
            <img src="../images/footer-text.png" alt="">
        </div>

        <div class="footer-image">
            <img src="../images/footer-image.png" alt="">
        </div>

        
       
        
    </div>
    
    


</template>

<script>

import nav from '../components/Nav.vue'
export default {

    name: "General",
    components: {
        
    },
    data() {
        return {
            data: [],
        }
    },
   
}

</script>



<style>
.kutu h1 {
 
    position: absolute;
width: 521px;
height: 25px;
left: 808px;
top: 687px;

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 15px;
/* or 75% */

text-align: center;

color: #FFFFFF;

 
 }
.kutu{
 
position: relative;
width: 1366px;
height: 80px;
left: 277px;
top: 662px;

/* Main Red */

background: #C31815;

}
.footer-image{
    position: absolute;
width: 266.18px;
height: 28px;
left: 1262px;
top: 2529px;

}
.footer-color{
    
position: absolute;
width: 1920px;
height: 250px;
left: 0px;
top: 2387px;

background: #0E1E32;
}
.footer-text{
    position: absolute;
width: 1133px;
height: 117px;
left: 395px;
top: 2466px;

}
.footer{
    position: absolute;
    width: 1920px;
    height: 250px;
    top: 2387px;
    background: #0E1E32;
}


.trending{
    position: absolute;
    width: 67px;
    height: 18px;
    left: 1103px;
    top: 202px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 29px;
    letter-spacing: 0.02em;

    /* Main Red */

    color: #C31815;
    
}

</style>