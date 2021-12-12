<template>
  <div id="app">
   <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">

        <test/>
         
  </div>
</template>

<script>
import test from './components/test.vue'
//import ChatList from './components/ChatsList.vue'
//import LoadingScreen from "./components/LoadingScreen.vue"
//import SendData from './components/SendData.vue'

export default {
  name: 'App',
  components: {
    test
    //ChatList,
    //LoadingScreen
    //SendData
  },
  data() {
    /*
    */
    return {
      isLoading: true,
      showWorkflow: false,
      backcolor: "#EEEEEF",
      name2: "Show Chats",
      users: [
        {name:'player', id: 0},
        {name:'Marcos', id: 1},
        {name:'Oscar', id: 2},
        {name:'Marta', id: 3}
      ],
      chatGroups: [
        {name:'Fiesta Cumple', id: 0},
        {name:'GrupoAcoso', id: 1}
      ]
    };
  },
  computed:{
    /*<div id="maincontainer" class="card xyz-in" xyz="fade up" :style="{background: backcolor}" >
        changeMainColor(color){
      return{
        backcolor:color
      }
    } 
    */

  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3500);
  }
}
</script>

<style>
#app {
  
  font-family: "Segoe UI";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn{
  background-color:#07C286;
  border-color:#07C286;
}
body{
  background-color: #EEEEEF;
  background: radial-gradient(circle, transparent 20%, #EEEEEF 20%, #EEEEEF 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #EEEEEF 20%, #EEEEEF 80%, transparent 80%, transparent) 55px 55px, linear-gradient(#07C286 4.4px, transparent 4.4px) 0 -2.2px, linear-gradient(90deg, #07C286 4.4px, #EEEEEF 4.4px) -2.2px 0;
  background-size: 110px 110px, 110px 110px, 55px 55px, 55px 55px;
}

.card{
    background: #EEEEEF;
    
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.0);
    transition: 0.3s;
    border-radius: 35px; /* 5px rounded corners */
    border: 0px solid black;

    height: 810px;
    width: 400px;
    
    margin: auto;
    padding: 20px 30px 30px 30px;

    background-image: url("https://i.ibb.co/kJ4WFjG/phone-01-generated2-sinfondo.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
}
.clock{
    font-size: 14px;
    width: 12%;
    margin: 0px;
    text-align: left;
    margin-top: 0px;
    margin-left: 15px;
    font-weight: bold;
    float: left;
}
.notIcons{
    float: right;
    text-align: right;
    margin-top: -4px;
    margin-right: 10px;
    width: 60px;
}
.notIcons img{
    width: 60px;
}
.iphone_bar{
    background: black;
    border-radius: 5px;
    padding: 2px;
    bottom: 0px;
    position: absolute;
    width: 150px;
    margin-left: 25%;
    margin-bottom: 30px;
    box-shadow: 0 4px 8px 0 rgba(87, 66, 66, 0.1);
}
.space{
    margin: 300px;
}


.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

</style>
