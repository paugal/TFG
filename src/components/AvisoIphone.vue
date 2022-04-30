<template>
    <Phone>
        <div class="screenForm xyz-in" id='screenForm' xyz="fade in">
            <div class="topbarchat xyz-in" xyz="up" id="topbarchat">
                
                <div class="tituloForm">INTRODUCCIÓN</div>
            </div>
            <div class="chatbox chatboxForm xyz-in" xyz="down" id='chatbox'>
                <div class='scrollChat' id='scrollChat'>
                    <div id="introText">
                        <p class='warning' > <b>AVISO:</b> como estas utilizando safari en un iPhone es recomendable que 
                            pongas la web a pantalla completa. Si no sabes como hacerlo sigue las instrucciones.
                        </p>

                        <div class="extra">
                            <p class="text"> <b>PASO 1:</b> Primero presiona el icono AA es la posicion que indica la imagen</p>
                            <img class="instrucciones" src="https://i.ibb.co/DpqQdgC/2small.jpg" alt="">
                            <p class="text"><b>PASO 2:</b> Una vez abieto el menu, selecciona la opcion "Ocultar barra de herramientas"</p>
                            <img class="instrucciones" src="https://i.ibb.co/zXRQfM9/11samll.png" alt="">
                            
                            <router-link id='startButton' class='nav-link' :to="{name:'Intro'}">
                                <button  type="button" class="cssbuttons-io-button" style="margin: auto; margin-bottom: 20px">continuar
                                    <div class="icon">
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>
                            </router-link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </Phone>
</template>

<script>

export default {
    data() {
        return{
            start: false,
            showlink: false,
        }
    },
    mounted () { 
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            document.getElementById('screenForm').style.height = '100vh';
            document.getElementById('topbarchat').style.height = '10vh';
            document.getElementById('chatbox').style.height = '90vh';
        }
    },

    methods: {

    }
}
</script>

<style scoped>

.topbarchat{
    display: flex;
    justify-content: center;
    align-items: center;
}
.tituloForm{
    margin: 0%;
}
.warning{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 15px;
  width: fit-content;
  position: relative;
  margin: 4px;
  overflow-x: hidden;
  background-color:rgba(237, 9, 9, 0.9);
  text-align: justify;
  padding: 10px;
  color: white;
}

.extra{
    margin-top: 20px;
    padding: 4px;
}
.instrucciones{
    width: 100%;
    border-radius: 15px;
    margin-bottom: 20px;
}
</style>