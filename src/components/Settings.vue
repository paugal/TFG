<template>
    <Phone>
        <div class="screen" style='background: white'>
            <div class="xyz-in" xyz="fade right">
                <div class="topbar" >
                    <div>
                        <div class="clock">22:12</div>
                        <div class="notIcons">
                            <img src="https://i.ibb.co/b6p3Z4N/not-icons.png" alt="not-icons" border="0">
                        </div>
                    </div>
                    <div style=" margin: 50px 0px 7px 20px; display: flex; gap: 15px; align-items: flex-start;">
                    <router-link  :to="{name:'chatslist'}"> <i class="fas fasArrow fa-chevron-left fa-2x"></i> </router-link>
                    <h1 class='titlechats'>Settings</h1>
                    </div>
                </div>
               

                <div class='settingslist'>
                    <div class='cardSettings'> 
                        <div class='textSettings'> Imagen de Fondo:</div>
                        <div style='margin:10px'>
                        <img @click= "setBackgroundImage('https://i.ibb.co/ZWgR5BJ/wallpaper.jpg')" class='backgroundImage' src="https://i.ibb.co/ZWgR5BJ/wallpaper.jpg" alt="not-icons" border="0">
                        <img class='backgroundImage' src="https://i.ibb.co/zRNQYd5/wp4410724.jpg" alt="not-icons" border="0">
                        <img  class='backgroundImage' src="https://i.ibb.co/CJQybvx/Pure-black-color-whatsapp-chat-wallpaper.jpg" alt="not-icons" border="0">
                        </div>
                    </div>
                </div>

                <div class='bottombar' >
                    <i class="fas fasMenu fa-question-circle fa-2x"></i>
                    <i class="fas fasMenu fa-redo-alt fa-2x"></i>
                    <i class="fas fasMenu fa-cogs fa-2x"></i>
                </div>

            </div>
        </div>
    </Phone>
</template>

<script>
export default({
    name: 'settings',
    data() {return{}},
    methods: {
        setBackgroundImage: function (link){
            this.$store.commit('setBackgroundImage', link)
        }
    }
})
</script>

<style scoped>
.cardSettings{
    background: rgb(228, 228, 228);
    
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 20px; /* 5px rounded corners */
    border: 0px solid black;
    margin: 10px;
    text-align: left;
    padding: 10px;
}
.textSettings{
    margin: 0px 0px 0px 25px;
    font-size: 20px;
}
.backgroundImage{
    width: 90px;
    height: 90px;
    background-size: 100%;
    border-radius: 30px;
    margin: 7px
}
.backgroundImage:hover{
    box-shadow: 0 4px 8px 0 rgba(87, 66, 66, 0.35);
    border: 2px solid var(--main-color)
}
.settingslist{
    padding-top: 20px;
    min-height: 500px;
}
</style>
