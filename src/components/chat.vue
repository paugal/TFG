<template>
    <Phone>
        <div class="screen xyz-in" id='screen' xyz="fade in" style='background-image: url("https://i.ibb.co/zRNQYd5/wp4410724.jpg"); background-repeat: no-repeat; background-size: cover; background-position: center; position: relative;'>
            <div class="topbarchat xyz-in" xyz="up" id="topbarchat">
                <div>
                    <div class="clock">10:12</div>
                    <div class="notIcons">
                        <vue-feather type="wifi" stroke="white" size="15px"></vue-feather>
                        <vue-feather type="battery" stroke="white" size="15px"></vue-feather>
                        <vue-feather type="bar-chart" stroke="white" size="15px"></vue-feather>
                    </div>
                </div>
                <div style="margin: 20px 0px 10px 35px; display: flex; gap: 25px; align-items: center;">
                    <router-link :to="{name:'chatslist'}" @click="setSeenMsg(this.$store.getters.getChatUser); setUserChat(0)"> <i class="fas fasChat fa-chevron-left"></i> </router-link>
                    <img v-if='this.$store.getters.getChatUser != 0' class="userImage" :src="this.$store.getters.getChatUserInfo.image" alt="user_image_bully" border="0">                 
                    <div v-if='this.$store.getters.getChatUser != 0' class="userName">{{this.$store.getters.getChatUserInfo.name}}</div>
                </div>
            </div>
            <div class='chatboxChat' id='chatbox'>
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
            <div class='bottombarchat xyz-in' xyz="down" id="bottombarchat">
                <div v-for="index in this.$store.getters.getOptionsLenght" :key="index">
                    <div class='msgSelector xyz-in'  xyz="fade down" v-if="this.$store.getters.getOptionsLenght > 0"  
                    @click= " show = !show; enablePathOptions(this.$store.getters.getOptions[index-1].id);
                    setSeenMsg(this.$store.getters.getChatUser);
                    enablePathQuestion(this.$store.getters.getOptions[index-1].question);
                    setLastPath(this.$store.getters.getOptions[index-1].id); 
                    activePathMsg(this.$store.getters.getActivedMsgforOption.activator);
                    disablePathOptions(this.$store.getters.getOptions[index-1].question); testCalculKarma();"> 
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
export default {
    data() {
        return{
            questionId: 0,
            questinsList: [],
        }
    },
    mounted () { 
        this.autoScroll();
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            document.getElementById('screen').style.height = '100vh';
            document.getElementById('bottombarchat').style.height = '20%';
            document.getElementById('scrollChat').style.height = 'auto';
            document.getElementById('chatbox').style.height = '65%';
            document.getElementById('topbarchat').style.height = '15%';
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