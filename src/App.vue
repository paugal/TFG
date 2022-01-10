<template>
  <div id="app">    
    <router-view/>
    <div id="nav" class="nav">
      <router-link class="nav-link" :to="{name:'Home'}" > HOME </router-link>
      <router-link class="nav-link" :to="{name:'chatslist'}" > ChatsList </router-link>
      <router-link class="nav-link" :to="{name:'HomeMobile'}" > Mobile </router-link>
    </div>
    
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