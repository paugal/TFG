<template>
  <div id="app">
   <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
        <div class="card">
            <div class="clock">22:12</div>
            <div class="notIcons">
                <img src="https://i.ibb.co/b6p3Z4N/not-icons.png" alt="not-icons" border="0">
            </div>
            
            <div v-if="showWorkflow">
              <chat/>
            </div>

            <button @click="showWorkflow = true">Show Workflow</button>
            <div class="iphone_bar"></div>
        </div>
  </div>

  <div><test/></div>
</template>

<script>
import test from './components/test.vue'
import chat from './components/chatslist.vue'

export default {
  name: 'App',
  components: {
    test,
    chat
  },
  data() {
    return {
      showWorkflow: false,
    }
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
body{
  background-color: #EEEEEF;
  background: radial-gradient(circle, transparent 20%, #EEEEEF 20%, #EEEEEF 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #EEEEEF 20%, #EEEEEF 80%, transparent 80%, transparent) 55px 55px, linear-gradient(#07C286 4.4px, transparent 4.4px) 0 -2.2px, linear-gradient(90deg, #07C286 4.4px, #EEEEEF 4.4px) -2.2px 0;
  background-size: 110px 110px, 110px 110px, 55px 55px, 55px 55px;
}

.card{
    background: #EEEEEF;
    
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.0);
    transition: 0.3s;
    border-radius: 55px; /* 5px rounded corners */
    border: 0px solid black;


    height: 800px;
    width: 350px;
    
    margin: auto;
    padding: 20px 20px 20px 20px;
    

    background-image: url("https://i.ibb.co/kJ4WFjG/phone-01-generated2-sinfondo.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.titlechats{
    color: black;
    text-align: left;
    margin-top:90px;
    margin-left: 20px;

}
.user {
  padding: 0px 10px;
  box-shadow: 0 4px 8px 0 rgba(87, 66, 66, 0.05);
  height: 70px;
  line-height:25px;
  border-radius: 5px;
  background-color: #f1f1f1;
  margin: 5%;
}
.user .block{
    opacity: 0.5;
}
.clock{
    width: 12%;
    margin: 0px;
    text-align: left;
    margin-top: 4px;
    margin-left: 10px;
    font-weight: bold;
    float: left;
}
.notIcons{
    float: right;
    text-align: right;
    margin-top: 4px;
    margin-right: 12px;
}
.notIcons img{
    width: 60px;
}
.user img {
    float: left;
    margin: 0 0 0 -10px;
    height: 70px;
    width: 70px;
    border-radius: 5px;
}
.username{
    font-size: 16px;
    font-weight: bold;
    padding: 10px 0px 0px 0px;
    text-align: left;
    padding-left: 70px;
}
.msgpreview{
    font-size: 12px;
    text-align: left;
    padding-left: 70px;
    color: grey;
}
.fas{
    color: #07c286;
    float: right;
    margin-right: 5px;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.iphone_bar{
    background: black;
    border-radius: 5px;
    margin: 5px 90px 30px 90px;
    padding: 2px;
    bottom: 0px;
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
