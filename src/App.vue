<template>
  <div id="app">
    
    
    <div id="nav" class="nav">
      <router-link class="nav-link" :to="{name:'Home'}" > EMPEZAR </router-link>
      
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
      isChatList: false,
      isChat: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3500);
  },
}
</script>

<style scoped lang="css">
  @import "./assets/styles/global-style.css";
  @import "./assets/styles/devicesMod.css";
</style>