<template>
 <Phone>
    <div class="frame"  id="screen" >
        <IntroDay v-if="this.$store.getters.getShownDayInfo"></IntroDay>
            <h1 v-if='endGame != true' class="chatListTile">Mensajes</h1>
            <div class="userList xyz-in" xyz="fade down" id="userlist" v-if='endGame != true'>
                <div v-if="this.$store.getters.getTestMode == true">
                    <button type="button" class="skiptoEnding" @click="endSelector(3)">
                        SKIP GOOD ENDING
                    </button>
                    <button type="button" class=" skiptoEnding" @click="endSelector(1)">
                        SKIP NEUTRAL ENDING
                    </button>  
                    <button type="button" class=" skiptoEnding" @click="endSelector(-2)">
                        SKIP BAD ENDING
                    </button>  
                </div>
                
                <div  class="xyz-in" xyz="fade down"   v-for="index in this.$store.getters.getChatOrder" :key="index">
                    <router-link class="nav-link" :to="{name:'chat'}" @click= "changeUser(this.$store.getters.getUserInfo(index).id)">
                            <div class="usuario">
                                <div class="photoPerfil">
                                    <img class="photoPerfil" :src="this.$store.getters.getUserInfo(index).image">
                                </div>
                                <div class=" userText userName">
                                    <p style="margin: 0%">{{this.$store.getters.getUserInfo(index).name}}</p>
                                </div>

                                <div class=" userText previewMsg">
                                    <div class="previewMsg" style='font-weight: 800' v-if="this.$store.getters.getNumUnseenMsgFromUser(index) != 0">
                                        {{this.$store.getters.getLastMsgChat(index).text}}
                                    </div>

                                    <div  class="previewMsg" style='font-weight: 500' v-if="this.$store.getters.getNumUnseenMsgFromUser(index) == 0">
                                        {{this.$store.getters.getLastMsgChat(index).text}}
                                    </div>
                                    <p v-if="this.$store.getters.getLastMsgChat(index).text == null">Sin mensajes</p>
                                </div>

                                <div class="icon">
                                    <div class='numNewMsg' v-if="this.$store.getters.getNumUnseenMsgFromUser(index) != 0">
                                        {{this.$store.getters.getNumUnseenMsgFromUser(index)}}
                                    </div>
                                    <i class="fas fasArrowList fa-chevron-right fa-lg"></i>
                                </div>
                            </div>
                        
                    </router-link>
                </div>

                <div style="height: 10%">

                </div>
            </div>
            <div class="endGame xyz-in" xyz='fade' v-if='endGame == true'>
                <img class='avatar' src="https://i.ibb.co/M2pV632/intro.png" alt="not-icons" border="0">
                <div class="textbox">
                    <!--Mensaje final bueno -->
                    <p v-if="this.finalMsg() == 1"> Y aqui acaba este minijuego. Felicidades! Has ayudado mucho a Marcos y has actuado 
                        muy bien.  Por favor responder lo mas sinceramente posible a unas ultimas preguntas y ya habremos acabado esta actividad.
                        Muchas gracias de antemano!
                    </p>
                    <!--Mensaje final neutro -->
                    <p v-if="this.finalMsg() == 0"> Y aqui acaba este minijuego. En algunos momentos has ayudado a Marcos pero en otros no has actuado todo lo mejor posible.
                        Espero que te haya ayudado esta actividad para en el futur poder escoger mejores elecciones
                        Por favor responder lo mas sinceramente posible a unas ultimas preguntas y ya habremos acabado esta actividad.
                        Muchas gracias de antemano!
                    </p>
                    <!--Mensaje final malo -->
                    <p v-if="this.finalMsg() == -1"> Y aqui acaba este minijuego. Durante la actividad has elegido muchas acciones que han perjudicado a Marcos.
                        Si crees que has actuado bien, recomiendo que vuelvas a jugar con diferentes elecciones y veas como cambian las respuestas de 
                        los personajes. Por favor responder lo mas sinceramente posible a unas ultimas preguntas y ya habremos acabado esta actividad.
                        Muchas gracias de antemano!
                    </p>
                </div>
                <router-link  class="nav-link" :to="{name:'formulario2'}"> 
                    <button  type="button" class="cssbuttons-io-button" style="margin: auto" @click="sendEmail()">FINALIZAR
                        <div class="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                        </div>
                    </button>
                </router-link>
            </div>
        </div>
</Phone>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name: 'NewChatList',
    data() {
        return{
            infoDay: true,
            endGame: false,
        }
    },
    methods: {

        finalMsg: function(){
            document.getElementById('screen').style.overflow = 'scroll';
            document.getElementById('screen').style.overflowX = 'hidden';
            let totalKarma = this.$store.getters.getKarma + this.$store.getters.getSpecialKarma;
            if(totalKarma >= 2){
                return 1;
            }else if(totalKarma >= 0){
                return 0;
            }else if(totalKarma < 0){
                return -1;
            }

            

        },

        changeUser: function (id){
            this.$store.commit('setUserChat', id)
        },
        
        sendEmail() {
            let path = this.$store.getters.getPlayerPath;
            path.unshift(1);
            var templateParams = {
                name: this.$store.getters.getID,
                message: JSON.stringify(path)
            };  
            try {
                emailjs.send('service_3mckqye','template_g8kvx5s', templateParams, 'user_19PVjLKPzVGUG5VUn6jOU')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                }, function(error) {
                    console.log('FAILED...', error);
                });
            } catch(error) {
                console.log({error})
            }
        },
        endSelector: function(totalKarma){
            if(totalKarma >= 2){
                this.$store.commit('activePathMsg', [146, 147, 148, 149]);
            }else if(totalKarma >= 0){
                this.$store.commit('activePathMsg', [125, 133, 134, 135, 137]);
            }else if(totalKarma < 0){
               this.$store.commit('activePathMsg', [146, 151, 152, 153, 154]);
            }
        },
    },
    mounted(){
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            document.getElementById('screen').style.height = '100vh';
            
        }

        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
        /* iOS hides Safari address bar */
        window.addEventListener("load",function() {
            setTimeout(function() {
                window.scrollTo(0, 1);
            }, 1000);
        });
        }
        this.endGame = this.$store.getters.getEnding;
    },
}
</script>

<style scoped>
body{
    color: beige;
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.skiptoEnding{
    font-size: 14px;
    width: fit-content;
    background: white;
    border: 1px solid var(--main-color);
    border-radius: 15px;
    color: black;
    margin: 2px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
    transition: 0.3s;
}
.skiptoEnding:hover{
    background: #A370F0;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border: 1px solid #A370F0;
    color: white;
}
.frame{
    width: 100%;
    height: 100%;
    background: #7b24ff;
    margin: auto;
    padding: 0px;
    display: grid;
    grid-template: "a a a" 15%
                   "b b b" auto;
}
.chatListTile{
    grid-area: a;
    font-size: 50px;
    margin: 0%;
    color: white;
    font-weight: 600;
    text-align: left;
    padding-left: 15px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
   
}
.userList{
    grid-area: b;
    background: whitesmoke;
    border-radius: 1.3em 1.3em 0em 0em;
    padding: 20px 10px 20px 10px;
    overflow: scroll;
    overflow-x: hidden;
}
.userList::-webkit-scrollbar {
  width: 0px;
}
    
.usuario{
    display: grid;
    grid-template-columns: 20% 80% ;
    grid-template-rows: 60% 40%;
    grid-template-areas: "a b " 
                         "a d ";
    column-gap: 10px;
    padding: 0px 5px 0px 5px;
    
    color: #A370F0;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    overflow: hidden;
    position: relative;
    height: 5.0em;
    width: 100%;
}

.usuario:hover .icon {
  width: calc(15% - 0.1em);
}
.usuario .icon svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: white;
}
.usuario:hover .icon svg {
  transform: translateX(0.1em);
}
.usuario:active .icon {
  transform: scale(0.95);
}
.usuario .photoPerfil img{   
    transition: transform 0.2s ease-in-out;
}

.usuario:hover .photoPerfil img{
    transition: color 1s ease-in-out;
    transform: translateX(0.1em);
    transition: transform 0.3s;
    transform: scale(1.1);
}

.usuario .icon {
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 2.5em;
  border-radius: 0.7em;
  right: 0.3em;
  transition: all 0.3s;
  
}

.photoPerfil{
    display: flex;
    justify-content: center;
    grid-area: a;
    margin: 3px;
}
.photoPerfil img{
    width: 60px;
    height: 60px;
    border-radius: 35px;
    -webkit-border-radius: 35px;
    -moz-border-radius: 35px;
    box-shadow: 0.1em 0.1em 0.4em 0.05em #7b52b95a;
    margin: auto;
}

.usuario img:hover{
    transform: translateX(0.1em);
    transition: transform 0.3s;
    transform: scale(1.1);
}

.userText{
    color: #7b24ff;
    padding-left: 5px;
}
.userName{
    grid-area: b;
    font-size: 20px;
    font-weight: 700;
    display:flex;
    align-items:flex-end;
    margin:0%;
}
.msgAndNum{
    grid-area: d;
    display: flex;
    align-items: center;
}
.previewMsg{
    color: #7b24ff;
    font-size: 10px;
    margin: 0%;
    text-overflow: ellipsis;
    width: 160px;
    font-weight: 600;
}
.numNewMsg{
  color: white;
  background: #714da6;
  font-weight: bolder;
  font-size: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3px;
}
.fasArrowList{
    grid-area: c;
    color: #7b24ff;
    margin: auto;
    font-size: 25px;
}

.skiptoEnding{
    font-size: 14px;
    width: fit-content;
    background: white;
    border: 1px solid var(--main-color);
    border-radius: 15px;
    color: black;
    margin: 2px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
    transition: 0.3s;
}
.skiptoEnding:hover{
    background: #A370F0;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border: 1px solid #A370F0;
    color: white;
}

</style>