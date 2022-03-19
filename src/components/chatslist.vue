<template>
    <Phone>
        <div class="screen">
            <IntroDay v-if="this.$store.getters.getShownDayInfo"></IntroDay>
            
            <Notificacion v-if="this.$store.getters.getNotificacion.new" />
            
            <div class="topbar" >
                <div>
                    <div class="clock">22:12</div>
                    
                    <div class="notIcons">
                        <vue-feather type="wifi" stroke="white" size="15px"></vue-feather>
                        <vue-feather type="battery" stroke="white" size="15px"></vue-feather>
                        <vue-feather type="bar-chart" stroke="white" size="15px"></vue-feather>
                    </div>
                </div>
                <h1 class='titlechats'>Mensajes</h1> 
            </div>
            <div class='userlist'>
                <div  class="xyz-in" xyz="fade down" v-for="index in this.$store.getters.getChatOrder" :key="index">
                    <router-link class="nav-link" :to="{name:this.isPhone}" @click= "changeUser(this.$store.getters.getUserInfo(index).id)"> 
                        <div class="user">
                            <div class="groupPhotoName">
                                <img :src="this.$store.getters.getUserInfo(index).image">
                                <div class="previeAndName">
                                    <div class="username">{{this.$store.getters.getUserInfo(index).name}}</div>
                                    <p class="previewMsg">{{this.$store.getters.getLastMsgChat(index).text}}</p>
                                
                                </div>
                                <div class='numNewMsg' v-if="this.$store.getters.getNumUnseenMsgFromUser(index) != 0">{{this.$store.getters.getNumUnseenMsgFromUser(index)}}</div>
                            </div>
                            <i class="fas fasArrow fa-chevron-right fa-lg"></i>
                        </div>
                        <div class="vertical"></div>
                    </router-link>
                </div>
            </div>
            <!--
            <div class='bottombar' >
                <router-link  :to="{name:'info'}"> <vue-feather type="info" stroke="white" size="36px"></vue-feather> </router-link>
            </div>
            -->
        </div>

    </Phone>
</template>

<script>


export default({
    name: 'chatslist',
    data() {
        return{
            infoDay: true,
            newNotification: 'Notificacion',
            isPhone: 'chatM',
        }
    },
    methods: {
        changeUser: function (id){
            this.$store.commit('setUserChat', id)
        },
    },
    mounted(){
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            // true for mobile device
            this.isPhone = 'chatM';
        }else{
            // false for not mobile device
            this.isPhone = 'chat';
        }
    },
})
</script>

<style scoped>
body{
    background-color: black;
}
.screen{
    background: white;
    height: 100vh;
    margin: 0%;
}
.userlist{
    padding-top: 20px;
    min-height: 480px;
}
.user {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f1f1f1;
  background-color: white;
  padding: 20px;
}
.vertical {
    height:0px; /* you might need some positioning for this to work, see other questions about 100% height */
    margin: auto;
    width: 60%;
    background-color: rgb(109, 106, 106);
    border-radius: 20px;
    border:1px solid rgb(109, 106, 106);
    opacity: 0.2;
    margin-top: 20px;
}
.user:hover{
    border-radius: 20px;
}
.user:hover img{
    box-shadow: 0 4px 8px 0 rgba(87, 66, 66, 0.5);
    border: 3px solid var(--main-color);
}
.user img {
    height: 70px;
    width: 70px;
    border-radius: 40px;
    border: 2px solid var(--main-color);
}
.previeAndName{
    display: flex;
    align-content: center;
    flex-direction: column;
}
.username{
    font-size: 20px;
    font-weight: bold;
    text-align: left;
}
.previewMsg{
    font-size: 10px;
    font-weight: 500;
    text-align: left;
    color: rgb(77, 77, 77);
    white-space: nowrap;
    overflow: hidden;
    width: 150px;
    text-overflow: ellipsis;
}
.numNewMsg{
    background: var(--main-color);
    color: white;
    font-weight: bolder;
    width: 25px; 
    height: 25px;
    border-radius: 50%;
    display: flex; 
    align-items: center; 
    justify-content: center;
}
.groupPhotoName{
    display: flex; 
    justify-content: flex-start; 
    gap: 15px; 
    align-items: center;
}
.fasArrow{
    color: var(--main-color);
    margin-bottom: 10px;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
.titlechats{
    margin: 45px 0px 15px 40px;
    text-align: left;
}
.shadowIcon{
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 1)
}
</style>
