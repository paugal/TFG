<template>
    <Phone>
      <div class="screenIntro">
        <div v-if="isLoading || (!isChatList)">
          <div v-if="isLoading" class="centredelement">
            <div class="half-circle-spinner">
                <div class="circle circle-1"></div>
                <div class="circle circle-2"></div>
            </div>
          </div>
          <div class="xyz-in" xyz='fade delay-20' >
            <img class='avatar' src="https://i.ibb.co/M2pV632/intro.png" alt="not-icons" border="0">
            <div class="textbox">
                <p>¡Hola! En este juego se simularán conversaciones de WhatsApp.
                    Tu amigo Marcos tiene problemas, durante el juego podrás escoger diferentes
                    opciones. ¡Pero cuidado cada acción tiene sus consecuencias!
                </p>
            </div>
            <router-link  class="nav-link" :to="{name:'chatslist'}"> 
              <button  type="button" class="cssbuttons-io-button" style="margin: auto" @click="isChatList = true">EMPEZAR
                <div class="icon">
                  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                </div>
              </button>
            </router-link>
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
