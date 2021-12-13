<template>
    <div>
        <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
        <h1 class='titlechats'>Chat</h1>

            <div class="user">
                <img src="https://i.ibb.co/S7vP88k/user-image-marcos.jpg" alt="user-image-marcos" border="0">
                <div class="username">Marcoos</div>
                <i class="fas fa-chevron-right"></i>
                <div class="msgpreview">text preview</div>
            </div>

            <div class="user">
                <img src="https://i.ibb.co/yh14wQs/user-image-bully.jpg" alt="user_image_bully" border="0">                 
                <div class="username">Oscar clase</div>
                <i class="fas fa-chevron-right"></i>
                <div class="msgpreview">text preview</div>
            </div>

            <div class="user">
                <div class="block">
                    <img src="https://i.ibb.co/S7vP88k/user-image-marcos.jpg" alt="user-image-marcos" border="0">
                    <div class="username">Marcoos</div>
                    <i class="fas fa-chevron-right"></i>
                    <div class="msgpreview">text preview </div>
                </div>
            </div>

            <div class="user">
                <div class="block">
                    <img src="https://i.ibb.co/yh14wQs/user-image-bully.jpg" alt="user_image_bully" border="0">                 
                    <div class="username">Oscar clase</div>
                    <i class="fas fa-chevron-right"></i>
                    <div class="msgpreview">text preview</div>
                </div>
            </div>
            
    </div>
</template>

<script>

export default({
    name: 'test',
    data() {
        return{
        }
    },
})


</script>

<style scoped>
.card{
    background: #EEEEEF;
    
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.0);
    transition: 0.3s;
    border-radius: 55px; /* 5px rounded corners */
    border: 0px solid black;


    height: 800px;
    width: 350px;
    
    margin: auto;
    padding: 20px 20px 20px 20px;
    

    background-image: url("https://i.ibb.co/kJ4WFjG/phone-01-generated2-sinfondo.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.titlechats{
    color: black;
    text-align: left;
    margin-top:40px;
    margin-left: 20px;

}
.user {
  padding: 0px 10px;
  box-shadow: 0 4px 8px 0 rgba(87, 66, 66, 0.05);
  height: 70px;
  line-height:25px;
  border-radius: 5px;
  background-color: #f1f1f1;
  margin: 5%;
}
.user .block{
    opacity: 0.5;
}
.clock{
    width: 12%;
    margin: 0px;
    text-align: left;
    margin-top: 4px;
    margin-left: 10px;
    font-weight: bold;
    float: left;
}
.notIcons{
    float: right;
    text-align: right;
    margin-top: 4px;
    margin-right: 12px;
}
.notIcons img{
    width: 60px;
}
.user img {
    float: left;
    margin: 0 0 0 -10px;
    height: 70px;
    width: 70px;
    border-radius: 5px;
}
.username{
    font-size: 16px;
    font-weight: bold;
    padding: 10px 0px 0px 0px;
    text-align: left;
    padding-left: 70px;
}
.msgpreview{
    font-size: 12px;
    text-align: left;
    padding-left: 70px;
    color: grey;
}
.fas{
    color: #07c286;
    float: right;
    margin-right: 5px;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.iphone_bar{
    background: black;
    border-radius: 5px;
    margin: 5px 90px 30px 90px;
    padding: 2px;
    bottom: 0px;
    box-shadow: 0 4px 8px 0 rgba(87, 66, 66, 0.1);
}
.space{
    margin: 300px;
}
</style>
