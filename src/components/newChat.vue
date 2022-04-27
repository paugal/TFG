<template>
    <Phone>
        <div class="frame xyz-in" id='screen' xyz="fade in" style='background-image: url("https://i.ibb.co/Xbw5gBL/bg-chat-tile-dark-a4be512e7195b6b733d9110b408f075d-1.png"); background-repeat: no-repeat; background-size: cover; background-position: center; position: relative;'>
            
            <div class=" userChat usuario" id="topBar">
                <router-link class="icon" :to="{name:'chatslist'}" @click="setSeenMsg(this.$store.getters.getChatUser);">  
                    <i class="fas fasArrowList  fa-chevron-right fa-lg"></i>
                </router-link>
            
                <div class="photoPerfil">
                    <img v-if='this.$store.getters.getChatUser != 0' class="userImage" :src="this.$store.getters.getChatUserInfo.image" alt="user_image_bully" border="0">
                </div>
                <div class=" userText userName">
                    <div v-if='this.$store.getters.getChatUser != 0' class="userName" id="userName">{{this.$store.getters.getChatUserInfo.name}}</div>
                </div>
            </div>
            
            <div class='chatBox chatboxChat' id='chatbox'>
                <div class='scrollChat' id='scrollChat' v-if="this.$store.getters.getMsgLenght > 0 ">
                    <div v-for="index in this.$store.getters.getMsgLenght" :key="index">
                        <div v-if="this.$store.getters.getMsg[index-1].sender === 1" class ="chattext send xyz-in" xyz="fade right delay-5"> 
                            {{this.$store.getters.getMsg[index-1].text}}
                            {{enablePathQuestion(this.$store.getters.getMsg[index-1].question)}}
                            {{nextDay(this.$store.getters.getMsg[index-1].id)}}
                        </div>
                        <div v-if="this.$store.getters.getMsg[index-1].sender !== 1" class="chattext receive xyz-in" xyz="fade left delay-5">
                            {{this.$store.getters.getMsg[index-1].text}}
                            {{enablePathQuestion(this.$store.getters.getMsg[index-1].question)}}
                            {{nextDay(this.$store.getters.getMsg[index-1].id)}}
                            <img class='captura' v-if='this.$store.getters.getMsg[index-1].id == 42' src="https://i.ibb.co/mBZ5bqr/Optimized-captura-chat.jpg" alt="captura">
                        </div>
                    </div>
                </div>
            </div>
            <div class='optionsBox xyz-in' xyz="down" id="bottombarchat">
                <div v-for="index in this.$store.getters.getOptionsLenght" :key="index">
                    <div class='buttonPhone xyz-in' xyz="fade down" id="option" v-if="this.$store.getters.getOptionsLenght > 0"  
                    @click= " show = !show; optionsManager(this.$store.getters.getOptions[index-1]);"> 
                        <button>
                            <div class="svg-wrapper-1">
                                <div class="svg-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span>{{this.$store.getters.getOptions[index-1].text}}</span>
                        </button>
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
export default {
    data() {
        return{
            questionId: 0,
            questinsList: [],
        }
    },
    mounted () { 
        this.autoScroll();
        if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            document.getElementById('screen').style.height = '100vh';
            document.getElementById('topBar').style.paddingTop = '10px';
            document.getElementById('screen').classList.add('framePhone');
            document.getElementById('chatbox').style.height = '97%';
            document.getElementById('userName').style.fontSize = '4vh';
            
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
            if((msgId == 32 || msgId == 521 || msgId == 1322) && this.$store.getters.getDay == 1){
                this.$store.commit('setDay', 2);
                this.$store.commit('setShownDayInfo', true);
            }else if(msgId == 86  && this.$store.getters.getDay == 2){
                this.$store.commit('setDay', 3);
                this.$store.commit('setShownDayInfo', true);
            }else if(msgId == 105  && this.$store.getters.getDay == 3){
                this.$store.commit('setDay', 4);
                this.$store.commit('setShownDayInfo', true);
            }else if(msgId == 93  && this.$store.getters.getDay == 4){
                this.$store.commit('setDay', 5);
                this.$store.commit('setShownDayInfo', true);
            }

        },
        testCalculKarma: function(){
            var playerPathAux = this.$store.getters.getPlayerPath;
            var auxKarma = 0;
            var playerPathList = [];
            let ending = false;

            for (let index = 0; index < playerPathAux.length; index++) {
                const element = playerPathAux[index];
                playerPathList.push(this.$store.getters.getAllPaths.find(path => path.id === element))
                auxKarma += this.$store.getters.getAllPaths.find(path => path.id === element).karma
                if([12, 13, 14].includes(element) && element == playerPathAux[playerPathAux.length-1]){
                    console.log('Include 12, 13, 14');
                    this.lieDetector(playerPathAux);
                }
                if([39, 40, 41].includes(element) && element == playerPathAux[playerPathAux.length-1]){
                    ending = true;
                    
                }if([42, 44].includes(element) && element == playerPathAux[playerPathAux.length-1]){
                    this.$store.commit('setEnding', true);
                }
            }
            //auxKarma = auxKarma / playerPathList.filter(path => path.karma !== 0).length;
            console.log('Karma: ' + auxKarma)
            this.$store.commit('setKarma', auxKarma)
            if(ending){
                this.endSelector();
                ending = false;
            }
        },
        lieDetector: function(pPA){ //playerPath
            //Falta añadir un karma especifico para cada opcion
            if(pPA.includes(3) && pPA.includes(12)){
                this.lieActivatorMsg(1)//Defiende a Marcos y dice la verdad
                this.$store.commit('setSpecialKarma', 1);
            }else if(pPA.includes(3) && pPA.includes(13)){
                this.lieActivatorMsg(2)//Defiende a Marcos y dice que no ha contestado
                this.$store.commit('setSpecialKarma', 1);
            }else if(pPA.includes(3) && pPA.includes(14)){
                this.lieActivatorMsg(3)//Defiende a Marcos y dice que lo ha insultado
                this.$store.commit('setSpecialKarma', -1);
            }else if(pPA.includes(4) && pPA.includes(13)){
                this.lieActivatorMsg(4)//No contesta y dice la verdad
                this.$store.commit('setSpecialKarma', 1);
            }else if(pPA.includes(4) && pPA.includes(12)){
                this.lieActivatorMsg(5)//No contesta y dice que lo ha defendido
                this.$store.commit('setSpecialKarma', -1);
            }else if(pPA.includes(4) && pPA.includes(14)){
                this.lieActivatorMsg(6)//No contesta y dice que lo ha insultado
                this.$store.commit('setSpecialKarma', -1);
            }else if(pPA.includes(5) && pPA.includes(14)){
                this.lieActivatorMsg(7)//Insulta a Marcos y dice la verdad
                this.$store.commit('setSpecialKarma', -1);
            }else if(pPA.includes(5) && pPA.includes(12)){
                this.lieActivatorMsg(8)//Insulta a Marcos y dice que lo ha defendido
                this.$store.commit('setSpecialKarma', -2);
            }else if(pPA.includes(5) && pPA.includes(13)){
                this.lieActivatorMsg(9)//Insulta a Marcos y dice que no ha contestado
                this.$store.commit('setSpecialKarma', -2);
            }
        },
        endSelector: function(){
            let totalKarma = this.$store.getters.getKarma + this.$store.getters.getSpecialKarma;
            console.log('Karma total: ', totalKarma)
            if(totalKarma >= 2){
                console.log('FINAL BUENO');
                this.lieActivatorMsg(10) //FINAL BUENO 
            }else if(totalKarma >= 0){
                console.log('FINAL NEUTRO');
                this.lieActivatorMsg(11) //FINAL BUENO 
            }else if(totalKarma < 0){
                console.log('FINAL MALO');
                this.lieActivatorMsg(12) //FINAL BUENO 
            }
        },
        lieActivatorMsg: function(lieType){
            switch(lieType){
                case 1://Defiende a Marcos y dice la verdad
                    this.$store.commit('activePathMsg', [30, 31, 32]);
                    break;
                case 2://Defiende a Marcos y dice que no ha contestado
                    this.$store.commit('activePathMsg', [28, 29]);
                    break;
                case 3://Defiende a Marcos y dice que lo ha insultado
                    this.$store.commit('activePathMsg', [33, 34, 35, 36, 37]);
                    break;
                case 4://No contesta y dice la verdad
                    this.$store.commit('activePathMsg', [28, 29]);
                    break;
                case 5://No contesta y dice que lo ha defendido
                    this.$store.commit('activePathMsg', [28, 40, 41, 42, 51, 52]);
                    break;
                case 6://No contesta y dice que lo ha insultado
                    this.$store.commit('activePathMsg', [33, 34, 35, 36, 37]);
                    break;
                case 7://Insulta a Marcos y dice la verdad
                    this.$store.commit('activePathMsg', [33, 34, 35, 36, 37]);
                    break;
                case 8://Insulta a Marcos y dice que lo ha defendido
                    this.$store.commit('activePathMsg', [30, 40, 41, 42, 35, 51, 52]);
                    break;
                case 9://Insulta a Marcos y dice que no ha contestado
                    this.$store.commit('activePathMsg', [28, 40, 41, 42, 36, 37]);
                    break;
                case 10://FINAL BUENO 
                    this.$store.commit('activePathMsg', [146, 147, 148, 149]);
                    break;
                case 11://FINAL NEUTRO 
                    this.$store.commit('activePathMsg', [125, 133, 134, 135, 137]);
                    break;
                case 12://FINAL MALO
                    this.$store.commit('activePathMsg', [146, 151, 152, 153, 154]);
                    break;
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
        notRepetDiv: function(){
            console.log('Hola ' + document.getElementById('aux2'))
            if(document.getElementById('aux2') == null){
                return true;
            }else{
                return false;
            }
        },
        autoScroll: function(){
            var element = document.getElementById("scrollChat");
            if(element != null){
                element.scrollTop = element.scrollHeight;
                this.reload
            }
        },
        moveUserTopList: function (msgId){
            this.$store.commit('moveUserTopList', msgId )
        },
        reload(){
            this.$forceUpdate();
        },
        enablePathQuestion: function(question){
            if(!this.$store.getters.getSelectedOptionsList.includes(question) && question != null){
                this.$store.commit('setSelectedOptionsList', question);
                this.$store.commit('enablePathQuestion', question);
            }
        },
        setSeenMsg: function(id){
            this.$store.commit('setSeenMsg', id )
            
        },
        
        //Funciones llamadas al hacer click en una opcion
        optionsManager: function (option){
            const options = document.querySelectorAll('#option');
            for (const opt of options) {
                opt.classList.add('xyz-out')
            }
            setTimeout(() => {
                this.$store.commit('disablePathOptions', option.question)
                this.$store.commit('setSeenMsg', this.$store.getters.getChatUser )
                this.$store.commit('setLastPath', option.id)
                let msgsId = this.$store.getters.getActivedMsgforOption.activator;
                this.$store.commit('activePathMsg', msgsId)
                
                if(!this.$store.getters.getSelectedOptionsList.includes(option.question) && option.question != null){
                    this.$store.commit('setSelectedOptionsList', option.question);
                    this.$store.commit('enablePathQuestion', option.question);
                    this.$store.commit('disablePathOptions', option.question)
                }
            }, 100);
             setTimeout(() => {
                this.$store.commit('enablePathOptions',  option.id);
                this.$store.commit('setPlayerPath',  option.id)
                this.testCalculKarma();
            }, 300);
        },       
    }
}
</script>

<style scoped>

/* From uiverse.io by @adamgiebl */
button {
 font-family: inherit;
 font-size: 17px;
 color: #7b24ff;
 padding: 0.3em 1em;
 margin: 0.5em;
 width: 93%;
 display: flex;
 align-items: center;
 border: none;
 border-radius: 16px;
 overflow: hidden;
 transition: all 0.2s;
 box-shadow: 10px 5px 15px 10px rgba(0,0,0,0.1);
}


button span {
 display: block;
 margin-left: 0.3em;
 transition: all 0.3s ease-in-out;
}

button svg {
 display: block;
 transform-origin: center center;
 transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
 animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
 transform: translateX(1.2em) rotate(45deg) scale(1.1);
}

button:hover span {
 transform: translateX(1.2em);
 font-weight: 600;
}

button:active {
 transform: scale(0.95);
}

@keyframes fly-1 {
 from {
  transform: translateY(0.1em);
 }

 to {
  transform: translateY(-0.1em);
 }
}


.frame{
    width: 100%;
    height: 700px;
    background: white;
    margin: auto;
    padding: 0px;
    border-radius: 35px;
    display: grid;
    grid-template: "a" 17% "b" auto "c" 25%;
    
}

.framePhone{
    grid-template: "a" 15% "b" 65% "c" 20%;
}
.userChat{
    grid-area: a;
    background: #7b24ff;
    border-radius: 0px 0px 35px 35px ;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 0;
    color: #A370F0;
}

.chatBox{
    margin-top: 10px;
    grid-area: b;
    border-radius: 35px;
    width: 100%;
}
.optionsBox{
    grid-area: c;
    background: #7b24ff;
    border-radius: 35px 35px 0px 0px; 
    width: 100%;
    box-shadow: 10px 5px 15px 10px rgba(0,0,0,0.3);
    padding: 5px;
    overflow: scroll;
    overflow-x: hidden;
    -o-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
}

.usuario{
    padding-top: 20px;
    display: grid;
    grid-template-columns: 15% 20% 80% ;
    grid-template-rows: 100%;
    grid-template-areas: "c a b";
    column-gap: 10px;
    letter-spacing: 0.05em;
    overflow: hidden;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.usuario svg{
    transform: rotate(180deg);
}

.usuario .icon {
    width: 40px;
    transition: transform 0.3s;
    color: white;
    grid-area: c;
    
}
.usuario:hover .icon {
  transform: translateX(0.1em);
}
.usuario:active .icon {
  transform: scale(0.95);
}

.usuario .icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 2.9em;
  transition: all 0.3s;
  
}

.photoPerfil{
    display: flex;
    justify-content: center;
    grid-area: a;
    margin: 3px;
    display: flex;
    align-items: center;
}
.photoPerfil img{
    width: 70px;
    height: 70px;
    border-radius: 100%;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100%;
    
}
::-webkit-scrollbar {
  width: 0px;
}

.userName{
    color: white;
    text-shadow: 0.1em 0.1em 0.2em 0.2em #0000005a;
    grid-area: b;
    font-size: 30px;
    font-weight: 700;
    display:flex;
    align-items:flex-end;
    margin:0%;
    margin-left: 5px;
    display: flex;
    align-items: center;
}


.fasArrowList{
    grid-area: c;
    color: white;
    margin: auto;
    font-size: 25px;
    transform: rotate(180deg);
    
}
a{
    text-decoration: none;
}
</style>