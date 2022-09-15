<template>
    <div>
        <div class="nav-bar">

            <div class="nav-menu">


                <img src="../images/CheckBox.png" alt="">
            </div>

            <div class="nav-menu-item-corona d-flex  ">
                <a class="general" href="">Genel</a>
                <a class="politics" href="">Politika</a>
                <a class="sports" href="">Spor</a>
                <a class="economi" href="">Ekonomi</a>
                <a class="technology" href="">Teknoloji</a>

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
            <div></div>
            <div v-if="news != null" class="mask-group">

                <a :href="news[0].url" target="_blank">

                    <img :src="news[0].image" alt="" />
                </a>
            </div>

            <div v-if="news != null" class="title">
                <h2>{{news[0].name}}</h2>
                <p>{{news[0].description}}</p>
                <h5>Kaynak: {{news[0].source}}</h5>
            </div>

            <div class="place-holder">
                <img src="../images/Placeholder.png" alt="">
            </div>

        </div>
        <div v-if="news != null" class="card">
            <a :href="news[1].url" target="_blank">
                <img class="card-img-top" :src="news[1].image" alt="Card image cap" />
            </a>
            <div class="card-body">
                <h5 class="card-title">{{news[1].name}}</h5>
                <p class="card-text">{{news[1].description}}</p>
                <p class="card-text"><small class="text-muted">Kaynak: {{news[1].source}}</small></p>
            </div>
        </div>
        <div v-if="news != null" class="card-2">
            <a :href="news[2].url" target="_blank">
                <img class="card-img-top" :src="news[2].image" alt="Card image cap" />
            </a>
            <div class="card-body">
                <h5 class="card-title">{{news[2].name}}</h5>
                <p class="card-text">{{news[2].description}}</p>
                <p class="card-text"><small class="text-muted">Kaynak: {{news[2].source}}</small></p>

            </div>
        </div>
        <div v-if="news != null" class="card-3">
            <a :href="news[3].url" target="_blank">
                <img class="card-img-top" :src="news[3].image" alt="Card image cap" />
            </a>
            <div class="card-body">
                <h5 class="card-title">{{news[3].name}}</h5>
                <p class="card-text">{{news[3].description}}</p>
                <p class="card-text"><small class="text-muted">Kaynak: {{news[3].source}}</small></p>

            </div>
        </div>
        <div v-if="news != null" class="card-4">
            <a :href="news[4].url" target="_blank">
                <img class="card-img-top" :src="news[4].image" alt="Card image cap" />
            </a>
            <div class="card-body">
                <h5 class="card-title">{{news[4].name}}</h5>
                <p class="card-text">{{news[4].description}}</p>
                <p class="card-text"><small class="text-muted">Kaynak: {{news[4].source}}</small></p>

            </div>
        </div>
        <div v-if="news != null" class="card-5">
            <a :href="news[5].url" target="_blank">
                <img class="card-img-top" :src="news[5].image" alt="Card image cap" />
            </a>
            <div class="card-body">
                <h5 class="card-title">{{news[5].name}}</h5>
                <p class="card-text">{{news[5].description}}</p>


            </div>
        </div>
        <div v-if="news != null" class="card-6">
            <a :href="news[6].url" target="_blank">
                <img class="card-img-top" :src="news[6].image" alt="Card image cap" />
            </a>
            <div class="card-body">
                <h5 class="card-title">{{news[6].name}}</h5>
                <p class="card-text">{{news[6].description}}</p>


            </div>
        </div>
        <div>

            <img class="live-news-img" src="../images/Live.png" alt="">
            <h1 class="live-h1">Canlı</h1>

            <div v-if="news != null" class="live-title">
                <h1>{{news[7].name}}</h1>
            </div>

        </div>
        <div v-if="news != null" class="live-news">

            <a :href="news[7].url" target="_blank">
                <img class="card-img-top" :src="news[7].image" alt="Card image cap" />
            </a>


        </div>
        <div>
            <div class="location-news-title">
                <h1>Bölgesel Haberler</h1>
            </div>
        </div>
        <div class="form">
            <h1>Konumla İlgili Haberleri Alın</h1>
            <form>
                <input type="search" placeholder="Lokasyon Giriniz">
                <button type="submit">Gönder </button>
            </form>
        </div>
        <div class="editor-pics">
            <h1>Editorün Seçtikleri</h1>
            <img src="../images/star.png" alt="">
        </div>
        <div class="view-more">
            <button>Daha fazla</button>
        </div>
    
        <div v-if="news != null" class="breaking-news">
            
            <img src="../images/breaking-news.png" alt="">
            <h1>{{news[0].name}}</h1>
            
            
        </div>
        <div class="breaking-news-white">
            <img src="../images/breaking-news-white.png" alt="">
            <h1>SON DAKİKA</h1>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'



export default {
    name: "Nav",
    components: {

    },

    data: () => ({

        news: null

    }),

    created() {
        this.getData()
    },
    methods: {
        async getData() {
            await axios.get('https://api.collectapi.com/news/getNews?country=tr&tag=general', {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'apikey 3gkB08WSXmyqL7OzlMxrNf:4w8QETcoP6RTBlugE8K62P',

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
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.breaking-news-white h1{
    
    position: absolute;
width: 157px;
height: 21px;
left: 591px;
top: 691px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 15px;
/* or 94% */

text-align: center;

color: #C31815;
}
.breaking-news-white img{
    position: absolute;
width: 157px;
height: 54px;
left: 591px;
top: 675px;

border-radius: 2px;
}
.breaking-news img{
    position: absolute;
width: 1366px;
height: 80px;
left: 277px;
top: 662px;

/* Main Red */

background: #C31815;
}
.breaking-news h1 {
    
    position: absolute;
    width: 600px;
    height: 50px;
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

.view-more button {

    position: absolute;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;

    width: 220px;
    height: 60px;

    left: 625px;
    top: 1954px;
    right: 1075px;
    bottom: 623px;

    /* opacity: 0.28; */
    border: 1px solid #C31815;
    border-radius: 2px;

    color: #C31815;
    text-transform: uppercase;
}

.editor-pics img {
    position: absolute;
    width: 15.97px;
    height: 15.99px;
    left: 445px;
    top: 2083px;

}

.editor-pics h1 {

    position: absolute;
    width: 170px;
    height: 35px;
    left: 277px;
    top: 2074px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* Text */

    color: #2A2A2A;

}

.card-img-top {
    width: 438px;
    height: 210px;

}

.form h1 {
    position: absolute;
    
    width: 180px;
    height: 20px;
    left: 20px;
    top: 30px;

    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;

    color: #141414;
}

.form {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 370px;
    height: 216px;
    left: 1273px;
    top: 1206px;

    background: #FFFFFF;
    mix-blend-mode: normal;
    border-radius: 2px;
}

.form input {
    box-sizing: border-box;

    position: absolute;
    left: 20px;
    right: 20px;
    top: 66px;
    bottom: 90px;


    mix-blend-mode: normal;
    opacity: 0.6;
    border: 1px solid #141414;
    border-radius: 2px;

}

::placeholder {

    width: 137px;
    height: 26px;
    left: 1316px;
    top: 1288px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 26px;


    display: flex;
    align-items: center;

    color: #141414;
}

.form button {
    position: absolute;
    width: 100px;
    height: 40px;
    left: 20px;
    top: 146px;
    right: 250px;


    background: #C31815;
    border-radius: 2px;
    text-transform: uppercase;
    color: #FFFFFF;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
}



.location-news-title h1 {

    position: absolute;
    width: 200px;
    height: 27px;
    left: 1273px;
    top: 1164px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    display: flex;
    align-items: center;



    /* Text */

    color: #2A2A2A;
}

.live-title h1 {
    position: absolute;
    width: 370px;
    height: 45px;
    left: 1273px;
    top: 1074px;

    font-family: 'IBM Plex Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    /* or 150% */


    /* Text */

    color: #2A2A2A;
}

.live-news-img {

    position: absolute;
    width: 26px;
    height: 26px;
    left: 1323px;
    top: 795px;

}

.live-h1 {
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

.live-news img {
    position: absolute;
    width: 370px;
    height: 218px;
    left: 1273px;
    top: 844px;

    background: #C4C4C4;
    border-radius: 3px;
}

.card-6 {
    position: absolute;
    width: 667px;
    height: 170px;
    left: 976px;
    top: 2123px;
    display: flex;
}

.card-6 img {
    width: 272px;
    height: 170px;
}

.card-5 {
    position: absolute;
    width: 667px;
    height: 170px;
    left: 277px;
    top: 2123px;
    display: flex;


}

.card-5 img {
    width: 272px;
    height: 170px;
}

.card-4 {
    position: absolute;
    width: 438px;
    height: 520px;
    left: 753px;
    top: 1394px;

    background: #FFFFFF;
    box-shadow: 0px 2px 14px rgba(42, 42, 42, 0.24);
    border-radius: 3px;



}

.card-3 {
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

.text-muted {
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

.card-text {

    width: 388px;
    height: 106px;
    left: 302px;
    top: 1131px;

    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;

    overflow: hidden;
    text-overflow: ellipsis;




    color: #2A2A2A;
}

.card-title {

    width: 388px;
    height: 50px;
    left: 302px;
    top: 1069px;

    font-family: 'IBM Plex Serif';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;

    color: #2A2A2A;

    overflow: hidden;
    text-overflow: ellipsis;



}

.card {
    position: absolute;
    width: 438px;
    height: 520px;
    left: 277px;
    top: 844px;

    background: #FFFFFF;
    box-shadow: 0px 2px 14px rgba(42, 42, 42, 0.24);
    border-radius: 3px;
}

.place-holder {
    position: absolute;
    width: 916px;
    height: 54px;
    left: 277px;
    top: 782px;

    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(28px);

}

.title h5 {
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

.title p {

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

    overflow: hidden;
    text-overflow: ellipsis;


    color: #2A2A2A;

}

.title h2 {
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

.mask-group img {
    position: absolute;
    max-width: 750px;
    height: auto;
    left: 277px;
    top: 112px;
    border-radius: 5px;
}

.nav-bar {
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

.nav-menu-item-logo {
    position: absolute;
    width: 62.79px;
    height: 52px;
    left: 295px;
    top: 14px;
    background: url(../images/nbc.png);
}

.nav-menu {

    width: 8px;
    height: 8px;
    margin-left: 482px;
    margin-top: 27px;
    margin-right: 0px;

}


.nav-menu-item-corona {

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

.nav-menu-item-corona a {

    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;

    color: #2A2A2A;
}




.nav-menu-item-vector {

    position: absolute;
    width: 12.01px;
    height: 12.01px;
    left: 1419px;
    top: 27px;


}

.nav-menu-item-vector-human {

    position: absolute;
    width: 19.2px;
    height: 24px;
    left: 1497px;
    top: 27px;

}

.nav-menu-item-vector-glass {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 1556.2px;
    top: 28px;

}

.nav-menu-item-vector-menu {
    position: absolute;
    width: 23.05px;
    height: 22px;
    left: 1643.25px;
    top: 29px;

    transform: matrix(-1, 0, 0, 1, 0, 0);
}

.nav-menu-item-vector-logo {
    position: absolute;
    width: 62.79px;
    height: 52px;
    left: 295px;
    top: 14px;


    image-resolution: 300dpi;

}
</style>