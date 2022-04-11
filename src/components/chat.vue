<template>
    <Phone>
        
        <div class="screen xyz-in" id='screen' xyz="fade in" style='background-image: url("https://i.ibb.co/zRNQYd5/wp4410724.jpg"); background-repeat: no-repeat; background-size: cover; background-position: center; position: relative;'>
                
                
                <div class="topbarchat xyz-in" xyz="up">
                    <!-- <Notificacion v-if="this.$store.getters.getNotificacion.new" /> -->
                    <div>
                        <div class="clock">22:12</div>
                        
                        <div class="notIcons">
                            <vue-feather type="wifi" stroke="white" size="15px"></vue-feather>
                            <vue-feather type="battery" stroke="white" size="15px"></vue-feather>
                            <vue-feather type="bar-chart" stroke="white" size="15px"></vue-feather>
                        </div>
                    </div>
                    
                    <div style="margin: 20px 0px 10px 35px; display: flex; gap: 25px; align-items: center;">
                        <router-link :to="{name:'chatslist'}" @click="setSeenMsg(this.$store.getters.getChatUser); setUserChat(0)"> <i class="fas fa-chevron-left"></i> </router-link>
                        <img v-if='this.$store.getters.getChatUser != 0' class="userImage" :src="this.$store.getters.getChatUserInfo.image" alt="user_image_bully" border="0">                 
                        <div v-if='this.$store.getters.getChatUser != 0' class="userName">{{this.$store.getters.getChatUserInfo.name}}</div>
                    </div>
                    
                </div>
                
                <div class='chatbox' id='chatbox'>
                    <!--
                    <scrollbar v-if="this.$store.getters.getMsgLenght > 0 ">
                        <div v-for="index in this.$store.getters.getMsgLenght" :key="index">
                            <div v-if="this.$store.getters.getMsg[index-1].sender === 1" class ="chattext send xyz-in" xyz="fade right"> {{this.$store.getters.getMsg[index-1].text}}</div>
                            <div v-else class="chattext receive xyz-in" xyz="fade left"> {{this.$store.getters.getMsg[index-1].text}}
                                {{enablePathQuestion(this.$store.getters.getMsg[index-1].question)}}
                            </div>
                        </div>                      
                    </scrollbar>
                    -->
                    <div class='scrollChat' id='scrollChat' v-if="this.$store.getters.getMsgLenght > 0 ">
                        <div v-for="index in this.$store.getters.getMsgLenght" :key="index">
                            
                            <div v-if="this.$store.getters.getMsg[index-1].sender === 1" class ="chattext send xyz-in" xyz="fade right delay-5"> 
                                {{this.$store.getters.getMsg[index-1].text}}
                                {{enablePathQuestion(this.$store.getters.getMsg[index-1].question)}}
                                {{nextDay(this.$store.getters.getMsg[index-1].id)}}
                            </div>
                            <!--
                            <div id='unseenBox' v-if='this.$store.getters.getMsg[index-1].visto === false && notRepetDiv()'>
                                <div id='aux2' class="chattext newMsg xyz-in" xyz="fade left">
                                    {{'Mensajes sin leer'}}
                                </div>
                            </div>
                            -->
                            <div v-if="this.$store.getters.getMsg[index-1].sender !== 1" class="chattext receive xyz-in" xyz="fade left delay-5">
                                {{this.$store.getters.getMsg[index-1].text}}
                                {{enablePathQuestion(this.$store.getters.getMsg[index-1].question)}}
                                {{nextDay(this.$store.getters.getMsg[index-1].id)}}
                            </div>
                            
                        </div>
                    </div>
                    
                </div>

                <div class='bottombarchat xyz-in' xyz="down" >
                    <div v-for="index in this.$store.getters.getOptionsLenght" :key="index">
                        <div class='msgSelector xyz-in'  xyz="fade down" v-if="this.$store.getters.getOptionsLenght > 0"  
                        @click= " show = !show; enablePathOptions(this.$store.getters.getOptions[index-1].id);
                        setSeenMsg(this.$store.getters.getChatUser);
                        enablePathQuestion(this.$store.getters.getOptions[index-1].question);
                        setLastPath(this.$store.getters.getOptions[index-1].id); 
                        activePathMsg(this.$store.getters.getActivedMsgforOption.activator);
                        disablePathOptions(this.$store.getters.getOptions[index-1].question); testCalculKarma()"> 
                            <div>{{this.$store.getters.getOptions[index-1].text}}</div>
                        </div>
                    </div>
                    <div v-if="this.$store.getters.getOptionsLenght == 0">
                        <div class="tipmsg"> De momento no puedes decir nada mas, prueva a hablar con otra persona
                        </div>
                    </div>
                </div>
            
        </div>
    </Phone>
</template>

<script>
//import func from 'vue-editor-bridge';
//import Scrollbar from "vue3-smooth-scrollbar";

export default {
    data() {
        return{
            questionId: 0,
            questinsList: [],
        }
    },
    //components: { Scrollbar },
    mounted () { 
        this.autoScroll();

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        document.getElementById('screen').style.height = '100vh';
        }
        var auxScrollHeight = 0;

        setInterval(() => {
            var element = document.getElementById("scrollChat");
            if (element != null) {
                
                if(element.scrollHeight > auxScrollHeight){
                    this.autoScroll();
                    auxScrollHeight = element.scrollHeight;
                }
                
            }
        }, 100);

    },

    methods: {

        nextDay: function(msgId){
            if((msgId == 32 || msgId == 521) && this.$store.getters.getDay != 2){
                this.$store.commit('setDay', 2);
                this.$store.commit('setShownDayInfo', true);
            }else if(msgId == 86  && this.$store.getters.getDay != 3){
                this.$store.commit('setDay', 3);
                this.$store.commit('setShownDayInfo', true);
            }else if(msgId == 105  && this.$store.getters.getDay != 4){
                this.$store.commit('setDay', 4);
                this.$store.commit('setShownDayInfo', true);
            }else if(msgId == 93  && this.$store.getters.getDay != 5){
                this.$store.commit('setDay', 5);
                this.$store.commit('setShownDayInfo', true);
            }

        },

        testCalculKarma: function(){
            var playerPathAux = this.$store.getters.getPlayerPath;
            var auxKarma = 0;
            var playerPathList = [];
            var onlyOneTime = 0;
            for (let index = 0; index < playerPathAux.length; index++) {
                const element = playerPathAux[index];
                playerPathList.push(this.$store.getters.getAllPaths.find(path => path.id === element))
                auxKarma += this.$store.getters.getAllPaths.find(path => path.id === element).karma
                if([12, 13, 14].includes(element) && onlyOneTime == 0){
                    this.lieDetector(playerPathAux);
                    onlyOneTime++;
                }
            }
            auxKarma = auxKarma / playerPathList.filter(path => path.karma !== 0).length;
            console.log('Karma: ' + auxKarma)
            this.$store.commit('setKarma')
        },

        lieDetector: function(pPA){ //playerPath
            //3 - 12 //4 - 13 //5 - 14

            if((pPA.includes(3) && pPA.includes(12)) || (pPA.includes(4) && pPA.includes(13)) || (pPA.includes(5) && pPA.includes(14))){
                console.log('No miente');
                this.lieActivatorMsg(2)
            }else if(pPA.includes(5) && pPA.includes(12)){
                this.lieActivatorMsg(1)
            }else{
                console.log('Esta mintiendo!');
                this.lieActivatorMsg(pPA);

            }

        },

        lieActivatorMsg: function(lieType){
            if(lieType == 1){//Insulta a Marcos pero dice que lo ha defendido
                this.$store.commit('activePathMsg', [30, 40, 41, 42, 35, 51, 52, 45])
            }else if(lieType == 2){//Defiende a Marcos y dice la verdad
                this.$store.commit('activePathMsg', [30, 31, 32])
            }
        },

        //No funciona
        addMsg: function(msgInfo){
            console.log()
            var msg = document.createElement('div');
            if(msgInfo.sender == 1){
                msg.setAttribute('id', msgInfo.id);
                msg.setAttribute('class', 'chattext send xyz-in');
                msg.setAttribute('xyz', "fade right");
                msg.textContent = msgInfo.text;
                this.enablePathQuestion(msgInfo.question);
            }else{
                msg.setAttribute('id', msgInfo.id);
                msg.setAttribute('class', 'chattext receive xyz-in');
                msg.setAttribute('xyz', "fade left");
                msg.textContent = msgInfo.text;
                this.enablePathQuestion(msgInfo.question);
            }
            
            if(document.getElementById('scrollChat') != null){
                document.getElementById('scrollChat').appendChild(msg);
                console.log(msg)
            }

        },
        setSeenMsg: function(id){
            this.$store.commit('setSeenMsg', id )
        },
        notRepetDiv: function(){
            console.log('Hola ' + document.getElementById('aux2'))
            if(document.getElementById('aux2') == null){
                return true;
            }else{
                return false;
            }
        },

        addUnseenMsg: function(){
            console.log(document.getElementById("unseenMsg"))
            if(document.getElementById("unseenMsg") == null && document.getElementById("unseenBox") != null){
                var unseenMsg = document.createElement('div');
                unseenMsg.setAttribute("id", "unseenMsg");
                unseenMsg.setAttribute('class', "chattext receive xyz-in");
                unseenMsg.setAttribute('xyz', "fade right");
                unseenMsg.textContent = 'Mensajes sin leer';
                document.getElementById("aux2").appendChild(unseenMsg);
            }else if(document.getElementById("unseenMsg") != null && document.getElementById("unseenBox") != null){
                 document.getElementById("unseenMsg").remove();
                 unseenMsg = document.createElement('div');
                unseenMsg.setAttribute("id", "unseenMsg");
                unseenMsg.setAttribute('class', "chattext receive xyz-in");
                unseenMsg.setAttribute('xyz', "chattext receive xyz-in");
                unseenMsg.textContent = 'Mensajes sin leer';
                document.getElementById("aux2").appendChild(unseenMsg);
            }
        },

        removeUnseenMsg: function(){
            var element = document.getElementById("unseenMsg");
            while(element != null){
                document.getElementById("unseenMsg").remove();
                element = document.getElementById("unseenMsg");
            }
            
        },

        setUserChat: function(userId){
            this.$store.commit('setUserChat', userId);
        },

        autoScroll: function(){
            var element = document.getElementById("scrollChat");
            if(element != null){
                element.scrollTop = element.scrollHeight;
                this.reload
            }
        },
        
        enablePathQuestion: function(question){
            if(!this.$store.getters.getSelectedOptionsList.includes(question) && question != null){
                this.$store.commit('setSelectedOptionsList', question);
                this.$store.commit('enablePathQuestion', question);
            }
        },

        moveUserTopList: function (msgId){
            this.$store.commit('moveUserTopList', msgId )
        },

        setLastPath: function (optionId){
            this.$store.commit('setLastPath', optionId)
        },

        activePathMsg: function (msgsId){
            this.$store.commit('activePathMsg', msgsId)
        },

        disablePathOptions: function (questionId){
            this.$store.commit('disablePathOptions', questionId)
        }, 
        enablePathOptions: function (OptionId){
            this.$store.commit('enablePathOptions', OptionId);
            this.$store.commit('setPlayerPath', OptionId)
        }, 

        reload(){
            this.$forceUpdate();
        },
    }
}
</script>

<style scoped>
.screen{
    background: white;
    margin: 0%;
}

.scrollChat{
    overflow: scroll;
    overflow-x: hidden;
    height: 100%;
    width: 100%;
    
}

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
    border-radius: 30px 30px 0px 0px;
    backdrop-filter: blur(2px);
    bottom: 0%;
    
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
.chattext.newMsg{
    background: rgb(214, 193, 121);
    font-size: 12px;
    padding: 1px 5px 1px 5px;
    margin: auto;
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