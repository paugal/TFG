<template>
    <Phone>
        <div class="screen" id="screen">
            <IntroDay v-if="this.$store.getters.getShownDayInfo"></IntroDay>
            <div class="topbar" id="topbar" >
                <div>
                    <div class="clock">22:12</div>
                    <div class="notIcons">
                        <vue-feather type="wifi" stroke="white" size="15px"></vue-feather>
                        <vue-feather type="battery" stroke="white" size="15px"></vue-feather>
                        <vue-feather type="bar-chart" stroke="white" size="15px"></vue-feather>
                    </div>
                </div>
                <h1 class='titlechatsList'>Mensajes</h1> 
            </div>
            <div class='userlist' id="userlist">
                <div  class="xyz-in" xyz="fade down" v-for="index in this.$store.getters.getChatOrder" :key="index">
                    <router-link class="nav-link" :to="{name:this.isPhone}" @click= "changeUser(this.$store.getters.getUserInfo(index).id)"> 
                        <div class="user">
                            <div class="groupPhotoName">
                                <img :src="this.$store.getters.getUserInfo(index).image">
                                <div class="previeAndName">
                                    <div class="usernameList">{{this.$store.getters.getUserInfo(index).name}}</div>
                                    <p class="previewMsg">{{this.$store.getters.getLastMsgChat(index).text}}</p>
                                </div>
                                <div class='numNewMsg' v-if="this.$store.getters.getNumUnseenMsgFromUser(index) != 0">{{this.$store.getters.getNumUnseenMsgFromUser(index)}}</div>
                            </div>
                            <i class="fas fasArrowList fa-chevron-right fa-lg"></i>
                        </div>
                        <div class="vertical"></div>
                    </router-link>
                </div>
            </div>
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
            isPhone: 'chat',
        }
    },
    methods: {
        changeUser: function (id){
            this.$store.commit('setUserChat', id)
        },
    },
    mounted(){
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            this.isPhone = 'chat';
            document.getElementById('screen').style.height = '100%';
            document.getElementById('screen').style.overflow = 'hidden';
            document.getElementById('userlist').style.height = '82vh';
            document.getElementById('topbar').style.height = '17vh';
        }else{
            this.isPhone = 'chat';
        }
    },
})
</script>
