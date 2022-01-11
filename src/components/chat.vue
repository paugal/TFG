<template>
    <Phone>
        <div class="screen" style='background-image: url("https://i.ibb.co/7SFMs56/Captura-de-pantalla-2022-01-04-165226.png"); background-repeat: no-repeat; background-size: cover; background-position: center; position: relative;'>
            <div class="xyz-in" xyz="fade right">
                
                <div class="topbar" style="box-shadow: inset 0px -5px 10px 5px rgba(0,0,0,0.2);">
                    <div>
                        <div class="clock">22:12</div>
                        <div class="notIcons">
                            <img src="https://i.ibb.co/b6p3Z4N/not-icons.png" alt="not-icons" border="0">
                        </div>
                    </div>
                    
                    <div style="margin: 50px 0px 7px 20px; display: flex; gap: 15px; align-items: center;">
                        <router-link :to="{name:'chatslist'}"> <i class="fas fa-chevron-left"></i> </router-link>
                        <img class="userImage" :src="this.$store.getters.getChatUserInfo.image" alt="user_image_bully" border="0">                 
                        <div class="userName">{{this.$store.getters.getChatUserInfo.name}}</div>
                    </div>
                    
                    
                </div>
                
                <div class='chatbox'>
                        <scrollbar v-if="this.$store.getters.getMsgLenght > 0">
                        <div v-for="index in this.$store.getters.getMsgLenght" :key="index">
                            <div v-if="this.$store.getters.getMsg[index-1].sender === 1" class ="chattext send xyz-in" xyz="fade right"> {{this.$store.getters.getMsg[index-1].text}}</div>
                            <div v-else class="chattext receive xyz-in" xyz="fade left"> {{this.$store.getters.getMsg[index-1].text}}</div>
                        </div>                      
                        </scrollbar>
                </div>

                <div class='bottombarchat' >
                    <div v-for="index in this.$store.getters.getOptionsLenght" :key="index">
                        <div class='msgSelector xyz-in'  xyz="fade down" v-if="this.$store.getters.getOptionsLenght > 0"  
                        @click= " show = !show; enablePathOptions(this.$store.getters.getOptions[index-1].id);
                        setLastPath(this.$store.getters.getOptions[index-1].id); 
                        activePathMsg(this.$store.getters.getActivedMsgforOption.activator);
                        disablePathOptions(this.$store.getters.getOptions[index-1].question)"> 
                                <div>{{this.$store.getters.getOptions[index-1].text}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Phone>
</template>

<script>
import Scrollbar from "vue3-smooth-scrollbar";

export default {
    components: { Scrollbar },
    mounted () {
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
        enablePathOptions: function (questionId){
            this.$store.commit('enablePathOptions', questionId)
        }, 

        reload(){
            this.$forceUpdate();
        },
    }
}
</script>

<style scoped>

.msgSelector{
    background: white ;
    border: 2px solid var(--main-color);
    box-shadow: inset 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 35px;
    margin: 10px;
    padding: 5px 15px 5px 15px;
    position: relative;
}
.msgSelector:hover{
    background: var(--main-color);
}
.bottombarchat{
    box-shadow: inset 0 4px 8px 0 rgba(0,0,0,0.2);
    background: rgb(228, 228, 228);
    transition: 0.3s;
    border: 1px solid rgb(185, 185, 185);
    height: 300px;
}
.chatbox{
    background-image: url("https://i.ibb.co/ZWgR5BJ/wallpaper.jpg");
    background-image: url("https://i.ibb.co/zRNQYd5/wp4410724.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    height: 400px;
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
    overflow-x: hidden;
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
.fas{
    color: var(--main-color);
    text-shadow: 0 0 1px black;
    font-size: 25px;
}
.userImage{
    width: 70px;
    height: 70px;
    border-radius: 25px;
    border: 3px solid var(--main-color);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.13);
}
.userName{
    text-align: center;
    margin-bottom: 5px;
    text-shadow: 0 0 0.5px black;
    font-weight: bold;
    font-size: 20px;
}

</style>