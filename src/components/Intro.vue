<template>
    <Phone>
      <div class="screen">
        <div v-if="isLoading || (!isChatList)">
              <!--Pantalla de carga -->
              <div v-if="isLoading" class="centredelement">
                
                    <div class="half-circle-spinner">
                        <div class="circle circle-1"></div>
                        <div class="circle circle-2"></div>
                    </div>
              </div>

              <!-- Introduccion -->
              <div class="xyz-in" xyz='fade delay-20' >
                    <img class='avatar' src="https://i.ibb.co/M2pV632/intro.png" alt="not-icons" border="0">
                    <div class="textbox">
                        <p>¡Hola! En este juego se simularán conversaciones de WhatsApp.
                            Tu amigo Marcos tiene problemas, durante el juego podrás escoger diferentes
                            opciones. ¡Pero cuidado cada acción tiene sus consecuencias!
                        </p>
                    </div>
                    
                
                <router-link  class="nav-link" :to="{name:'chatslist'}"> 
                <button  type="button" class="cssbuttons-io-button" style="margin: auto" 
                @click="isChatList = true">EMPEZAR
                
                <div class="icon">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                </div>

                </button>  </router-link>
              </div>
        </div>
      </div>
    </Phone>
</template>

<script>


export default({
    name: 'Intro',
    data() {
        return{
            isLoading: true,
            isChatList: false,
            isChat: false,
        }
    },
    methods: {
    },
    mounted() {
        setTimeout(() => {
        this.isLoading = false;
        }, 1500);
  }
})


</script>

<style scoped>
.screen{
    height: 100vh;
    margin: 0%;
    background: var(--lila);
}
.textbox{
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    transition: 0.3s;
    border-radius: 20px; /* 5px rounded corners */
    border: 0px solid black;
    padding: 10px 20px 5px 20px;;
    margin: 10px 10px 10px 10px;
    font-size: 21px;
    text-align: justify;
}
.avatar{
    margin-top: 6%;
    width: 80%;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter:         drop-shadow(5px 5px 5px #222);
}
.fas{
    color: white;
}
.btn{
  color:white;
  background: var(--main-color);
  border: 2px solid var(--main-color);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
  transition: 0.3s;
  border-radius: 15px;
  font-size: 25px;
}
.btn:hover{
  color:white;
  border: 4px solid var(--main-color);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
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

.centredelement{
    padding: 320px 110px 320px 140px;
}

.half-circle-spinner, .half-circle-spinner * {
      box-sizing: border-box;
    }

    .half-circle-spinner {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      position: relative;
    }

    .half-circle-spinner .circle {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: calc(100px / 10) solid transparent;
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

</style>
