<template>

    <div v-if="isLoading || (!isChatList)">
        <!--Pantalla de carga  -->
        <div v-if="isLoading" class="centredelementMobile">
            <div class="half-circle-spinner">
                <div class="circle circle-1"></div>
                <div class="circle circle-2"></div>
            </div>
            
        </div>

        <!-- Introduccion -->
        <div v-if="!isLoading && !isChatList && !isChat" >
            <img class='avatar xyz-in' xyz="fade in" src="https://i.ibb.co/zPnjm2k/person-talking-in-podcast-character-by-Vexels.png" alt="not-icons" border="0">
            <div class="textbox xyz-in" xyz="fade in">
                <p>Hola! En este juego se simularan conversaciones de WhatsApp.
                    Tu amigo Marcos tiene problemas, durante el juego pobras escoger diferentes 
                    opciones. Pero cuidado cada accion tiene sus consecuencias!
                </p>
            </div>

            <router-link  class="nav-link" :to="{name:'chatslist'}"> 
            <button  type="button" class="btn btn-primary" style="margin: 20px 60px 0px 60px" 
            @click="isChatList = true">NEXT</button>  </router-link>
        </div>

    </div>

    
</template>


<script>


export default({
    name: 'IntroMobile',
    data() {
        return{
            isLoading: true,
            isChatList: false,
            isChat: false
        }
    },
    mounted() {
        setTimeout(() => {
        this.isLoading = false;
        }, 3500);
  }
})

</script>

<style scoped>
#introMobile{
    background-color: black;
}
.textbox{
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    transition: 0.3s;
    border-radius: 35px; /* 5px rounded corners */
    border: 0px solid black;
    padding: 10px;
    margin: 10px;
}
.avatar{
    margin-top: 50px;
    width: 350px;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter:         drop-shadow(5px 5px 5px #222);
}


#app {
  
  font-family: "Segoe UI";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fas{
    color: white;
    float: right;
    margin-right: 5px;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.btn{
  color:whitesmoke;
  border-color:whitesmoke;
}


.loadscreen{
    background: var(--main-color);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.0);
    transition: 0.3s;
    border-radius: 35px; /* 5px rounded corners */
    border: 0px solid black;

    height: 800px;
    width: 380px;
    
    margin: auto;
    padding: 20px 30px 30px 30px;
    background-image: url("https://i.ibb.co/Lrk1RHy/phone-01-generated2-sinfondo.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
}



.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
.centredelementMobile{
    height: 100vh; /* For 100% screen height */
    width:  100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.half-circle-spinner, .half-circle-spinner * {
      
    box-sizing: border-box;
    }

    .half-circle-spinner {
      width: 20vw;
      height: 20vw;
      border-radius: 100%;
    }

    .half-circle-spinner .circle {
      content: "";
      position: absolute;
      width: 20vw;
      height: 20vw;
      border-radius: 100%;
      border: calc(20vw / 10) solid transparent;
    }

    .half-circle-spinner .circle.circle-1 {
      border-top-color: whitesmoke;
      animation: half-circle-spinner-animation 1s infinite;
    }

    .half-circle-spinner .circle.circle-2 {
      border-bottom-color: whitesmoke;
      animation: half-circle-spinner-animation 1s infinite alternate;
    }

    @keyframes half-circle-spinner-animation {
      0% {
        transform: rotate(0deg);

      }
      100%{
        transform: rotate(360deg);
      }
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