<template>
    <div>
        <div class="nav-bar">
            
            <div class="nav-menu"> 
                
        
            <img src="../images/CheckBox.png" alt="">
            </div>
            
            <div  class="nav-menu-item-corona ">
                <img src="../images/Corona.png" alt="">
                
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

            <div class="nav-menu-item-logo">
                <img src="../images/nbc.png" alt="">
            </div>
   
            
        </div>
    </div>
</template>

<script>



export default {
    name: "Nav"
}
</script>

<style scoped>

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