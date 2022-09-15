<template>
    <div>
        <div class="nav-bar">
            
            <div class="nav-menu"> 
                
        
            <img src="../images/CheckBox.png" alt="">
            </div>
            
            <div  class="nav-menu-item-corona d-flex  ">
                <h1 class="general">Genel</h1>
                <h1 class="politics">Politika</h1>
                <h1 class="sports">Spor</h1>
                <h1 class="economi">Ekonomi</h1>
                <h1 class="technology">Teknoloji</h1>
                
            </div>
            
            <div class="nav-menu-item-vector">
                <img src="../images/Vector.png" alt="">
            </div>
            <div class="nav-menu-item-vector-human">
                <img src="../images/Vector-human.png" alt="">
            </div>
            <div class="nav-menu-item-vector-glass">
                <img src="../images/Vector-glass.png" alt="">
            </div>
            <div class="nav-menu-item-vector-menu">
                <img src="../images/Vector-menu.png" alt="">
            </div>

            <div v-if="news != null" class="nav-menu-item-logo">
                <img src="../images/nbc.png" alt="">
                <h1></h1>
            </div>
            
            <div v-if="news != null" class="mask-group">
                <img
                :src="news[0].image"
                alt="">
               
            </div>

            <div v-if="news != null" class="title">
                <h2>{{news[0].name}}</h2>
                <p>{{news[0].description}}</p>
                <h5>Kaynak: {{news[0].source}}</h5>
            </div>

            <div class="place-holder">
            <img src="../images/Placeholder.png"  alt="">
            </div>
            
        </div>
            <div v-if="news != null" class="card">
             <img class="card-img-top" 
             :src="news[1].image" 
             alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">{{news[1].name}}</h5>
                <p class="card-text">{{news[1].description}}</p>
                <p class="card-text"><small class="text-muted">Kaynak: {{news[1].source}}</small></p>
            </div>
        </div>
        <div v-if="news != null" class="card-2">
             <img class="card-img-top" 
             :src="news[2].image" 
             alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">{{news[2].name}}</h5>
                <p class="card-text">{{news[2].description}}</p>
                <p class="card-text"><small class="text-muted">Kaynak: {{news[2].source}}</small></p>

            </div>
        </div>
        <div v-if="news != null" class="card-3">
             <img class="card-img-top" 
             :src="news[3].image" 
             alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">{{news[3].name}}</h5>
                <p class="card-text">{{news[3].description}}</p>
                <p class="card-text"><small class="text-muted">Kaynak: {{news[3].source}}</small></p>

            </div>
        </div>
        <div v-if="news != null" class="card-4">
             <img class="card-img-top" 
             :src="news[4].image" 
             alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">{{news[4].name}}</h5>
                <p class="card-text">{{news[4].description}}</p>
                <p class="card-text"><small class="text-muted">Kaynak: {{news[4].source}}</small></p>

            </div>
        </div>
        <div>
            
            <img class="live-news-img" 
            src="../images/Live.png" alt="">
            <h1 class="live-h1">Canlı</h1>
            
        </div>
        <div v-if="news != null" class="live-news">
            
            <img class="card-img-top" 
             :src="news[5].image" 
             alt="Card image cap">
             
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
import api from '../src/api.js'


export default {
    name: "Nav",
    components: {
        api
    },

    data:() => ({

      news:null
    
    }),

  created() {
    this.getData()
  },
    methods: {
        async getData() {
        await axios.get('https://api.collectapi.com/news/getNews?country=tr&tag=general',{
            headers:{
                'content-type': 'application/json',
                'Authorization':'apikey 3gkB08WSXmyqL7OzlMxrNf:4w8QETcoP6RTBlugE8K62P',
                
            },
            
        })
        .then(response => {
            this.news = response.data.result
            console.log(this.news)
        })
        .catch(error => {
            console.log(error)
        })              
  }
 }
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
.live-news-img{
    
    position: absolute;
width: 26px;
height: 26px;
left: 1323px;
top: 795px;

}

.live-h1{
    position: absolute;
width: 36px;
height: 27px;
left: 1273px;
top: 795px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
/* identical to box height */

display: flex;
align-items: center;

/* Main Red */

color: #C31815;
}
.live-news img{
    position: absolute;
    width: 370px;
    height: 218px;
    left: 1273px;
    top: 844px;

background: #C4C4C4;
border-radius: 3px;
}

.card-4{
    position: absolute;
width: 438px;
height: 520px;
left: 753px;
top: 1394px;

background: #FFFFFF;
box-shadow: 0px 2px 14px rgba(42, 42, 42, 0.24);
border-radius: 3px;
}
.card-3{
    position: absolute;
width: 438px;
height: 520px;
left: 277px;
top: 1394px;

background: #FFFFFF;
box-shadow: 0px 2px 24px rgba(42, 42, 42, 0.54);
border-radius: 3px;
}
.card-2 {
    
    position: absolute;
width: 438px;
height: 520px;
left: 755px;
top: 844px;

background: #FFFFFF;
box-shadow: 0px 2px 14px rgba(42, 42, 42, 0.24);
border-radius: 3px;
}
.text-muted{
width: 210px;
height: 20px;
left: 405px;
top: 1267px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 165%;
/* or 21px */


/* Text */

color: #2A2A2A;

opacity: 0.7;
}
.card-text{
    
width: 388px;
height: 106px;
left: 302px;
top: 1131px;

font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
/* or 147% */


/* Text */

color: #2A2A2A;
}
.card-title{
width: 388px;
height: 45px;
left: 302px;
top: 1069px;

font-family: 'IBM Plex Serif';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;

color: #2A2A2A;
}
.card{
    position: absolute;
    width: 438px;
    height: 520px;
    left: 277px;
    top: 844px;

    background: #FFFFFF;
    box-shadow: 0px 2px 14px rgba(42, 42, 42, 0.24);
    border-radius: 3px;
}
.place-holder{
    position: absolute;
    width: 916px;
    height: 54px;
    left: 277px;
    top: 782px;

background: rgba(255, 255, 255, 0.85);
backdrop-filter: blur(28px);

}
.title h5{
    position: absolute;
width: 210px;
height: 20px;
left: 1206px;
top: 502px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 165%;
/* or 21px */


/* Text */

color: #2A2A2A;

opacity: 0.7;
}
.title p{
    
position: absolute;
width: 500px;
height: 94px;
left: 1103px;
top: 378px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 165%;


color: #2A2A2A;

}
.title h2{
    position: absolute;
width: 540px;
height: 123px;
left: 1103px;
top: 235px;

font-family: 'IBM Plex Serif';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 42px;

/* Text */

color: #2A2A2A;
}
.mask-group img{
    position: absolute;
    max-width: 750px;
    height: auto;
    left: 277px;
    top: 112px;
    border-radius: 5px;
}
.nav-bar{
    position: absolute;
    height: 80px;
    width: 1920px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    /* border : 1px solid #000000; */
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(28px);

}
.nav-menu-item-logo{
    position: absolute;
    width: 62.79px;
    height: 52px;
    left: 295px;
    top: 14px;
    background: url(../images/nbc.png);
}   
.nav-menu{
    
    width: 8px;
    height: 8px;
    margin-left: 482px;
    margin-top: 27px;
    margin-right: 0px;

}


.nav-menu-item-corona{
    
    position: absolute;
    justify-content: space-between;
width: 893px;
height: 22px;
left: 494px;
top: 29px;


font-family: 'Nunito Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
text-decoration: none;


color: #2A2A2A;
}
.nav-menu-item-corona h1{
  
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
text-decoration: none;

color: #2A2A2A;
}




.nav-menu-item-vector{
   
position: absolute;
width: 12.01px;
height: 12.01px;
left: 1419px;
top: 27px;


}
.nav-menu-item-vector-human{
   
    position: absolute;
width: 19.2px;
height: 24px;
left: 1497px;
top: 27px;

}

.nav-menu-item-vector-glass{
    position: absolute;
width: 24px;
height: 24px;
left: 1556.2px;
top: 28px;

}
.nav-menu-item-vector-menu{
    position: absolute;
width: 23.05px;
height: 22px;
left: 1643.25px;
top: 29px;

transform: matrix(-1, 0, 0, 1, 0, 0);
}
.nav-menu-item-vector-logo{
    position: absolute;
width: 62.79px;
height: 52px;
left: 295px;
top: 14px;


image-resolution: 300dpi;

}



</style>