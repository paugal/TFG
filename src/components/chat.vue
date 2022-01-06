<template>
    <div id="chat">
    

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
            <div class="screen" style='background-image: url("https://i.ibb.co/7SFMs56/Captura-de-pantalla-2022-01-04-165226.png"); background-repeat: no-repeat; background-size: cover; background-position: center; position: relative;'>
                <div class="xyz-in" xyz="fade right">
                    
                
                <div class="topbar" >

                    <div class="clock">22:12</div>
                    <div class="notIcons">
                        <img src="https://i.ibb.co/b6p3Z4N/not-icons.png" alt="not-icons" border="0">
                    </div>

                    <router-link to="/chatslist"> <i class="fas fasArrow fa-chevron-left"></i> </router-link>
                    <img class="userImage" :src="this.$store.getters.getChatUserInfo.image" alt="user_image_bully" border="0">                 
                    <div class="userName">{{this.$store.getters.getChatUserInfo.name}}</div>
                    
                </div>
                
                <div class='chatbox'>
                        <scrollbar v-if="this.$store.getters.getMsgLenght > 0">
                        <div v-for="index in this.$store.getters.getMsgLenght" :key="index">
                            <div v-if="this.$store.getters.getMsg[index-1].sender === 1" class ="chattext send xyz-in" xyz="fade right"> {{this.$store.getters.getMsg[index-1].text}}</div>
                            <div v-else class="chattext receive xyz-in" xyz="fade left"> {{this.$store.getters.getMsg[index-1].text}}</div>
                        </div>                      
                        </scrollbar>
                </div>

                <div class='bottombar' >
                    <div v-for="index in this.$store.getters.getOptionsLenght" :key="index">
                        <div class='msgSelector' v-if="this.$store.getters.getOptionsLenght > 0"  
                        @click= "enablePathOptions(this.$store.getters.getOptions[index-1].id);
                        setLastPath(this.$store.getters.getOptions[index-1].id); 
                        activePathMsg(this.$store.getters.getActivedMsgforOption.activator);
                        disablePathOptions(this.$store.getters.getOptions[index-1].question)"> 
                                <div>{{this.$store.getters.getOptions[index-1].text}}</div>
                        </div>
                    </div>

                </div>
            
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Scrollbar from "vue3-smooth-scrollbar";

export default {
    components: { Scrollbar },
    props: ["userid"],
    mounted () {
        
        //console.log(this.$store.getters.getChatUser);
        //console.log(this.$store.getters.getMsgLenght);
        
        
        /*
        this.$store.commit('setUserChat', 3);
        console.log(this.$store.getters.getChatUser);
        console.log(this.$store.getters.getChatUserInfo);*/
    },
    methods: {
        setLastPath: function (optionId){
            this.$store.commit('setLastPath', optionId)
            console.log(this.$store.getters.getActivedMsgforOption.activator.length);
        },

        activePathMsg: function (msgsId){
            this.$store.commit('activePathMsg', msgsId)
        },

        disablePathOptions: function (questionId){
            this.$store.commit('disablePathOptions', questionId)
        }, 
        enablePathOptions: function (pathId){
            this.$store.commit('enablePathOptions', pathId)
        }, 


        reload(){
            this.$forceUpdate();
        },
    }
}
</script>

<style scoped>
.topbar{
    background: rgb(228, 228, 228);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.05);
    transition: 0.3s;
    border: 1px solid rgb(185, 185, 185);
}
.msgSelector{
    
    background: white ;
    border: 2px solid #07C286;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 35px;
    margin: 10px;
    padding: 5px 15px 5px 15px;
    position: relative;
}
.msgSelector:hover{
    background: #07C286;
}

.chatbox{
    
    background-image: url("https://i.ibb.co/ZWgR5BJ/wallpaper.jpg");
    background-image: url("https://i.ibb.co/zRNQYd5/wp4410724.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    height: 500px;
    padding: 10px;
}
.chattext{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 35px;
    width: fit-content;
    max-width: 80%;
    position: relative;
    padding: 5px 20px 5px 20px;
}
.chattext.receive{
    background: rgba(245, 245, 245, 0.9);
    float: left;
    text-align: left;
    margin: 5px 15% 5px 5px;

}
.chattext.send{
    background: #DCF8C6;
    float: right;
    text-align: right;
    margin: 5px 5px 5px 15%;

}
.bottombar{
    background: rgb(228, 228, 228);
    transition: 0.3s;
    border: 1px solid rgb(185, 185, 185);
    height: 300px;
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