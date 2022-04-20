<template>
  <div id="app">
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
      }else{
        document.getElementsByTagName("body")[0].style.height = '100vh';
        document.getElementsByTagName("body")[0].style.overflow = 'hidden';
        document.getElementsByTagName("body")[0].style.marginTop= '5vh';
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

<style lang="css">
  @import "./styles/global-style.css";
  @import "./styles/devicesMod.css";
</style>
