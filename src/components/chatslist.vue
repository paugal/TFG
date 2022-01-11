<template>
    <Phone>

        <div class="topbar" >
            <div>
                <div class="clock">22:12</div>
                <div class="notIcons">
                    <img src="https://i.ibb.co/b6p3Z4N/not-icons.png" alt="not-icons" border="0">
                </div>
            </div>
            <h1 class='titlechats'>Chat</h1>
        </div>

        <div class='userlist'>
            <div  class="xyz-in" xyz="fade down" v-for="index in 2" :key="index">
                <router-link class="nav-link" :to="{name:'chat'}" @click= "changeUser(this.$store.getters.getUserInfo(index+1).id)"> 
                    <div class="user">
                        <img :src="this.$store.getters.getUserInfo(index+1).image">
                        <div class="username">{{this.$store.getters.getUserInfo(index+1).name}}</div>
                        <i class="fas fasArrow fa-chevron-right fa-lg"></i>
                    </div>
                </router-link>
            </div>
        </div>

        <div class='bottombar' >
            <router-link  :to="{name:'info'}"> <i class="fas fasMenu fa-question-circle fa-2x"></i> </router-link>
            <i class="fas fasMenu fa-redo-alt fa-2x"></i>
            <router-link  :to="{name:'settings'}"> <i class="fas fasMenu fa-cogs fa-2x"></i>  </router-link>
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
  padding: 0px 10px;
  box-shadow: 0 4px 8px 0 rgba(87, 66, 66, 0.15);
  height: 70px;
  line-height:25px;
  border-radius: 5px;
  background-color: #f1f1f1;
  margin: 0%;
}
.user:hover{
    box-shadow: 0 4px 8px 0 rgba(87, 66, 66, 0.35);
}
.user img {
    float: left;
    margin: 0 0 0 -10px;
    height: 70px;
    width: 70px;
    border-radius: 5px;
}
.username{
    font-size: 20px;
    padding-top: 22px;
    padding-left: 20px;
    font-weight: bold;
    text-align: left;
    float: left;
}
.fasArrow{
    color: var(--main-color);
    float: right;
    margin-right: 5px;
    margin-top: 25px;
}
.titlechats{
    margin: 70px 0px 15px 20px;
}
</style>
