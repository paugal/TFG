<template>
  <div id="app">
    <!--
    <div id="nav" class="nav">
      <router-link id='startButton' class="nav-link" v-on:click='disableButton' :to="{name:'formulario'}" > EMPEZAR </router-link>
    </div>
    -->
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
      isChatList: false,
      isChat: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3500);
    
    this.$store.commit('setID', Math.floor(1000000 + Math.random() * 9000000))
    
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        document.getElementsByTagName("body")[0].style.background = ' var(--main-color)';
        document.getElementsByTagName("body")[0].style.overflow = 'hidden';
      }
  },

  methods: {
    disableButton: function(){
      document.getElementById('nav').hidden  = true;
    },

    ifPhone: function(){
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        return true;
      }else{
        // false for not mobile device
        return false;
      }
    }
  }
}
</script>

<style scoped lang="css">
  @import "./assets/styles/global-style.css";
  @import "./assets/styles/devicesMod.css";
</style>
