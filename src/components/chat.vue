<template>
    <div id="chat">
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">

        <div class="marvel-device iphone-x">
            <div class="notch">
                <div class="camera"></div>
                <div class="speaker"></div>
            </div>
            <div class="top-bar"></div>
            <div class="sleep"></div>
            <div class="bottom-bar"></div>
            <div class="volume"></div>
            <div class="overflow">
                <div class="shadow shadow--tr"></div>
                <div class="shadow shadow--tl"></div>
                <div class="shadow shadow--br"></div>
                <div class="shadow shadow--bl"></div>
            </div>
            <div class="inner-shadow"></div>
            <div class="screen">
                <div class="xyz-in" xyz="fade left">
                    
                
                <div class="topbar" >

                    <div class="clock">22:12</div>
                    <div class="notIcons">
                        <img src="https://i.ibb.co/b6p3Z4N/not-icons.png" alt="not-icons" border="0">
                    </div>

                    <i class="fas fa-chevron-left"></i>
                    <img class="userImage" src="https://i.ibb.co/yh14wQs/user-image-bully.jpg" alt="user_image_bully" border="0">                 
                    <div class="userName">Oscar clase</div>
                    
                </div> 

                <div class='chatbox'>
                     <div class='chattext receive'> Holaaa</div>
                     <div class='chattext receive'> Como estas?</div>
                </div>

                <div class='bottombar'></div>
            
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.topbar{
    background: rgb(228, 228, 228);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.05);
    transition: 0.3s;
    border: 1px solid rgb(185, 185, 185);
}
.chatbox{
    background-image: url("https://i.ibb.co/ZWgR5BJ/wallpaper.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    height: 500px;
    padding: 10px;
}
.chattext{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.05);
    transition: 0.3s;
    border-radius: 35px;
    text-align: left;
    padding: 5px 15px 5px 15px;
    position: relative;
}
.chattext.receive{
    background: whitesmoke;
    border: 1px solid rgb(185, 185, 185);
    float: left;
    text-align: left;
    margin: 5px 50% 5px 5px;
}
.chattext.send{

}
.bottombar{
    background: rgb(228, 228, 228);
    transition: 0.3s;
    border: 1px solid rgb(185, 185, 185);
    height: 300px;
}
.clock{
    margin-left: 25px;
}

.notIcons{
    margin-right: 20px;
}
.fas{
    color: #07c286;
    text-shadow: 0 0 1px black;
    font-size: 25px;
    float: left;
    margin-left: -10px;
    margin-top: 65px;
    top: 50%;
}
.userImage{
    width: 70px;
    border-radius: 25px;
    margin: 40px 10px 10px 20px;
    position: relative;
    border: 3px solid #07c286;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.13);

}
.userName{
    text-align: center;
    margin-bottom: 5px;
    text-shadow: 0 0 0.5px black;
}


.card2{
    
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.0);
    transition: 0.3s;
    border-radius: 35px; /* 5px rounded corners */
    border: 0px solid black;

    height: 810px;
    width: 400px;
    
    margin: auto;
    padding: 20px 30px 30px 30px;

    background-image: url("https://i.ibb.co/kJ4WFjG/phone-01-generated2-sinfondo.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
}

@import "../assets/devices.min.css"

</style>