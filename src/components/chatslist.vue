<template>
    <div id="chatslist" v-if="!isChat" >
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

            <div class="topbar" >
                <div>
                    <div class="clock">22:12</div>
                    <div class="notIcons">
                        <img src="https://i.ibb.co/b6p3Z4N/not-icons.png" alt="not-icons" border="0">
                    </div>
                </div>
                <h1 class='titlechats'>Chat</h1>
            </div>
            

            <div class='userlist'>
                <div  class="xyz-in" xyz="fade down" v-for="index in 2" :key="index">
                    <router-link class="nav-link" :to="{name:'chat'}" @click= "changeUser(this.$store.getters.getUserInfo(index+1).id)"> 
                    <div class="user">
                        <img :src="this.$store.getters.getUserInfo(index+1).image">
                        <div class="username">{{this.$store.getters.getUserInfo(index+1).name}}</div>
                        <i class="fas fasArrow fa-chevron-right fa-lg"></i>
                    </div>
                    </router-link>
                </div>
            </div>

                <div class='bottombar' >
                    
                    <i class="fas fasMenu fa-question-circle fa-2x"></i>
                    <i class="fas fasMenu fa-redo-alt fa-2x"></i>
                    <router-link  :to="{name:'settings'}"> <i class="fas fasMenu fa-cogs fa-2x"></i>  </router-link>
                    
                </div>


        </div>
        </div>
    </div>
</template>

<script>
export default({
    name: 'test',
    data() {
        return{
            isChat: false,
            userid: "001102",
            link: 'yh14wQs/user-image-bully' ,
            playerId: 1,
            marcosId: 2,
            oscarId: 3,
        }
    },
    methods: {
        changeUser: function (id){
            this.$store.commit('setUserChat', id)
        }
    }
})


</script>

<style scoped>
.card{
    background: #07C286;
    
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
.topbar{
    background: rgb(228, 228, 228);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.05);
    transition: 0.3s;
    border: 1px solid rgb(185, 185, 185);
    
}
.userlist{
    padding-top: 20px;
    min-height: 555px;
}
.bottombar{
    background: rgb(228, 228, 228);
    transition: 0.3s;
    border: 1px solid rgb(185, 185, 185);
    height: 70px;
}

.titlechats{
    color: black;
    text-align: left;
    font-size: 50px;
    margin: 100px 0px 25px 20px;
}
.user {
  padding: 0px 10px;
  box-shadow: 0 4px 8px 0 rgba(87, 66, 66, 0.15);
  height: 70px;
  line-height:25px;
  border-radius: 5px;
  background-color: #f1f1f1;
  margin: 0%;
  
}
.user:hover{
    box-shadow: 0 4px 8px 0 rgba(87, 66, 66, 0.35);
}
.user .block{
    opacity: 0.5;
}
.clock{
    margin: 5px 0 0 25px;
    font-size: 17px;
}
.notIcons{
    margin: 5px 23px 0 0;
}
.notIcons img{
    width: 70px;
}
.user img {
    float: left;
    margin: 0 0 0 -10px;
    height: 70px;
    width: 70px;
    border-radius: 5px;
}
.username{
    font-size: 20px;
    font-weight: bold;
    padding-top: 22px;
    text-align: left;
    padding-left: 20px;
    float: left;
}

.fasArrow{
    color: #07c286;
    float: right;
    margin-right: 5px;
    margin-top: 25px;
}

.fasMenu{
    color: #07c286;
    margin: 20px 30px 0px 30px;

}

.iphone_bar{
    background: black;
    border-radius: 5px;
    margin: 5px 90px 30px 90px;
    padding: 2px;
    bottom: 0px;
    box-shadow: 0 4px 8px 0 rgba(87, 66, 66, 0.1);
}

</style>
