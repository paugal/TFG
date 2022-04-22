<template>
 <Phone>
    <div class="frame"  id="screen" >
        <IntroDay v-if="this.$store.getters.getShownDayInfo"></IntroDay>
            <h1 class="chatListTile">Mensajes</h1>
            <div class="userList xyz-in" xyz="fade down" id="userlist">   
                <div  class="xyz-in" xyz="fade down"  v-for="index in this.$store.getters.getChatOrder" :key="index">
                    <router-link class="nav-link" :to="{name:'chat'}" @click= "changeUser(this.$store.getters.getUserInfo(index).id)">
                            <div class="usuario">
                                <div class="photoPerfil">
                                    <img class="photoPerfil" :src="this.$store.getters.getUserInfo(index).image">
                                </div>
                                <div class=" userText userName">
                                    <p style="margin: 0%">{{this.$store.getters.getUserInfo(index).name}}</p>
                                </div>
                                <div class="msgAndNum">
                                    <div class=" userText previewMsg">
                                        {{this.$store.getters.getLastMsgChat(index).text}}
                                        <p v-if="this.$store.getters.getLastMsgChat(index).text == null">Sin mensajes</p>
                                    </div>
                                    
                                    <div class='numNewMsg' v-if="this.$store.getters.getNumUnseenMsgFromUser(index) != 0">
                                        {{this.$store.getters.getNumUnseenMsgFromUser(index)}}
                                    </div>
                                </div>
                                <div class="icon">
                                    <svg  height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                </div>
                            </div>
                        
                    </router-link>
                </div>
                
            </div>
        </div>
</Phone>
</template>

<script>
export default {
    name: 'NewChatList',
    data() {
        return{
            infoDay: true,
        }
    },
    methods: {
        changeUser: function (id){
            this.$store.commit('setUserChat', id)
        },
    },
    mounted(){
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            document.getElementById('screen').style.height = '100%';
            document.getElementById('screen').style.overflow = 'hidden';
            document.getElementById('userlist').style.height = '82vh';
            document.getElementById('topbar').style.height = '17vh';
        }
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
.frame{
    width: 100%;
    height: 100%;
    background: #7b24ff;
    margin: auto;
    padding: 0px;
    border-radius: 35px;
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
    border-radius: 1.3em;
    padding: 20px 10px 20px 10px;
    overflow: scroll;
    overflow-x: hidden;
}
.userList::-webkit-scrollbar {
  width: 0px;
}
    
.usuario{
    display: grid;
    height: 75px;
    width: 100%;
    grid-template-columns: 20% 80% ;
    grid-template-rows: 60% 40%;
    grid-template-areas: "a b " 
                         "a d ";
    column-gap: 10px;
    border-radius: 35px;
    padding: 0px 5px 0px 5px;

    background: white;
    color: #A370F0;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    box-shadow: inset 0 0 1.6em -0.6em #714da6;
    overflow: hidden;
    position: relative;
    height: auto;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.usuario:hover .icon {
  width: calc(15% - 0.6em);
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

.usuario .icon {
  background: #A370F0;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 1.5em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b95a;
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
    box-shadow: 0.1em 0.1em 0.6em 0.05em #7b52b95a;
}

.userText{
    color: #7b24ff;
}
.userName{
    grid-area: b;
    font-size: 20px;
    font-weight: 700;
    display:flex;
    align-items:flex-end;
    margin:0%;
    margin-left: 5px;
}
.msgAndNum{
    grid-area: d;
    display: flex;
    align-items: center;
}
.previewMsg{
    
    font-size: 10px;
    margin: 0%;
    margin-left: 5px;
    text-overflow: ellipsis;
    width: 160px;
    margin-right: 5px;
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

</style>