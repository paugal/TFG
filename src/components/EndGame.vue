<template>
    <Phone>
        <div class="screenIntro xyz-in" xyz="fade">
            <div class="xyz-in" xyz='fade' >
                
                <img class='avatar' src="https://i.ibb.co/M2pV632/intro.png" alt="not-icons" border="0">
                <div class="textbox">
                    <p>Muchas gracias por jugar!! Esto es todo, espero que haya sido entretenido y haya sido util.
                    </p>
                </div>
                <router-link  class="nav-link" :to="{name:'Home'}"> 
                    <button  type="button" class="cssbuttons-io-button" style="margin: auto" >Volver a Empezar
                    <div class="icon">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                    </div>
                    </button>
                </router-link>
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
.screenEnd{
  height: 100vh;
  background: var(--lila);
}

.endTitle{
    color: white;
    font-size: 60px;
    padding-top: 150px;
}
</style>