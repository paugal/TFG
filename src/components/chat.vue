<template>
    <Phone>
        <div class="screen xyz-in" xyz="fade in" style='background-image: url("https://i.ibb.co/zRNQYd5/wp4410724.jpg"); background-repeat: no-repeat; background-size: cover; background-position: center; position: relative;'>
                <div class="topbarchat xyz-in" xyz="up">
                    <div>
                        <div class="clock">22:12</div>
                        
                        <div class="notIcons">
                            <vue-feather type="wifi" stroke="white" size="15px"></vue-feather>
                            <vue-feather type="battery" stroke="white" size="15px"></vue-feather>
                            <vue-feather type="bar-chart" stroke="white" size="15px"></vue-feather>
                        </div>
                    </div>
                    
                    <div style="margin: 20px 0px 10px 35px; display: flex; gap: 25px; align-items: center;">
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

                <div class='bottombarchat xyz-in' xyz="down" >
                    <div v-for="index in this.$store.getters.getOptionsLenght" :key="index">
                        <div class='msgSelector xyz-in'  xyz="fade down" v-if="this.$store.getters.getOptionsLenght > 0"  
                        @click= " show = !show; enablePathOptions(this.$store.getters.getOptions[index-1].id);
                        setLastPath(this.$store.getters.getOptions[index-1].id); 
                        activePathMsg(this.$store.getters.getActivedMsgforOption.activator);
                        disablePathOptions(this.$store.getters.getOptions[index-1].question)"> 
                                <div>{{this.$store.getters.getOptions[index-1].text}}</div>
                        </div>
                    </div>
                    <div v-if="this.$store.getters.getOptionsLenght == 0">
                        <div class="tipmsg"> De momento no puedes decir nada mas, prueva a hablar con otra persona</div>
                    </div>
                </div>
            
        </div>
    </Phone>
</template>

<script>
import Scrollbar from "vue3-smooth-scrollbar";

export default {
    data(){
        return{
        }
    },
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
    border: 2px solid var(--chat-color);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
    transition: 0.3s;
    border-radius: 35px;
    margin: 10px;
    padding: 5px 15px 5px 15px;
    position: relative;
}
.msgSelector:hover{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
}
.bottombarchat{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background-color: var(--chat-color);
    transition: 0.3s;
    padding: 5px;
    height: 160px;
    border-radius: 30px;
    backdrop-filter: blur(2px);
}
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .backdrop-blur {
    background-color: rgba(255, 255, 255, .5);
    -webkit-backdrop-filter: blur(2em);
    backdrop-filter: blur(2em);
  }
}

.tipmsg{
    border-radius: 35px;
    width: fit-content;
    padding: 5px 20px 5px 20px;
    background: rgba(255, 255, 255, 0.9);
}
.chatbox{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    height: 405px;
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
    background: rgba(253, 253, 253, 0.9);
    color: black;
    float: left;
    text-align: left;
    margin: 5px 15% 5px 5px;
}
.chattext.send{
    background: var(--chat-color);
    color: black;
    float: right;
    text-align: right;
    margin: 5px 5px 5px 15%;
}
.fas{
    color: white;
    font-size: 25px;
}
.userImage{
    width: 70px;
    height: 70px;
    border-radius: 40px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
}
.userName{
    text-align: center;
    margin-bottom: 5px;
    text-shadow: 0 0 0.5px black;
    font-weight: bold;
    font-size: 20px;
}

</style>