<template>
    <Phone>

        <div class="topbar" >
            <div>
                <div class="clock">22:12</div>
                <div class="notIcons">
                    <img src="https://i.ibb.co/b6p3Z4N/not-icons.png" alt="not-icons" border="0">
                </div>
            </div>
            <h1 class='titlechats'>Mensages</h1>
        </div>

        <div class='userlist'>
            <div  class="xyz-in" xyz="fade down" v-for="index in 2" :key="index">
                <router-link class="nav-link" :to="{name:'chat'}" @click= "changeUser(this.$store.getters.getUserInfo(index+1).id)"> 
                    <div class="user">
                        <img :src="this.$store.getters.getUserInfo(index+1).image">
                        <div class="username">{{this.$store.getters.getUserInfo(index+1).name}}</div>
                        <i class="fas fasArrow fa-chevron-right fa-lg"></i>
                    </div>
                    <div class="vertical"></div>
                </router-link>
            </div>
        </div>

        <div class='bottombar' >
            <router-link  :to="{name:'info'}"> <vue-feather type="info" stroke="white" size="36px"></vue-feather> </router-link>
            <vue-feather type="refresh-cw" stroke="white" size="36px"></vue-feather>
            <router-link  :to="{name:'settings'}"> <vue-feather type="settings" stroke="white" size="36px"></vue-feather>  </router-link>
        </div>

    </Phone>
</template>

<script>
export default({
    name: 'chatslist',
    methods: {
        changeUser: function (id){
            this.$store.commit('setUserChat', id)
        }
    }
})
</script>

<style scoped>
.userlist{
    padding-top: 20px;
    min-height: 480px;
}
.user {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f1f1f1;
  background-color: white;
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
.username{
    font-size: 20px;
    font-weight: bold;
    text-align: left;
}
.fasArrow{
    color: var(--main-color);
}
.titlechats{
    margin: 70px 0px 15px 20px;
}
</style>
