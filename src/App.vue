<template>
  <div id="app">
   <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
    
    <div id="nav" class="nav">
      <router-link class="nav-link" :to="{name:'Home'}" > HOME </router-link>
      <router-link class="nav-link" :to="{name:'chatslist'}" > ChatsList </router-link>
      <router-link class="nav-link" :to="{name:'chat'}" > Chat </router-link>
    </div>
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoading: true,
      showWorkflow: false,
      backcolor: "#EEEEEF",
      name2: "Show Chats",
      color: '#07C286',
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3500);
  },
}
</script>

<style>
:root {
  --main-color:#07C286;
}
#app {
  
  font-family: "Segoe UI";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.nav-link{
  font-family: "Segoe UI";
  color:black
}
.nav-link:hover{
  color: var(--main-color);
}
.btn{
  background-color:var(--main-color);
  border-color:var(--main-color);
}
body{
  background-color: #EEEEEF;
  background: radial-gradient(circle, transparent 20%, #EEEEEF 20%, #EEEEEF 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #EEEEEF 20%, #EEEEEF 80%, transparent 80%, transparent) 55px 55px, linear-gradient(var(--main-color) 4.4px, transparent 4.4px) 0 -2.2px, linear-gradient(90deg, var(--main-color) 4.4px, #EEEEEF 4.4px) -2.2px 0;
  background-size: 110px 110px, 110px 110px, 55px 55px, 55px 55px;
}
.nav{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 35px;
  padding: 5px 15px 5px 15px;
  background: whitesmoke;
  margin: 0 40% 10px 40%;
  text-align: center;
  padding-left: 60px;

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
