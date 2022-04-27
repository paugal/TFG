<template>
    <Phone>
        <div class="screenForm xyz-in" id='screenForm' xyz="fade in">
            <div class="topbarchat xyz-in" xyz="up">
                
                <div class="tituloForm">INTRODUCCIÓN</div>
            </div>
            <div class='chatbox chatboxForm' id='chatbox'>
                <router-link id='startButton' class="nav-link text"  :to="{name:'endGame'}" > SKIP FORM </router-link>
                <div class='scrollChat' id='scrollChat'>
                    
                    <form ref="from" >
                        
                        <XyzTransition xyz="fade left-100% out-right-25%">
                            <div class="formRadio xyz-in"  xyz="fade left" id="p1">
                                <p class='text'>¿Has visto situaciones parecidas a las de la historia anterior en tu colegio?</p>
                                <input type="radio" id="p11" name="p1" value="1">
                                <label for="p11"> Sí  </label>
                                <input type="radio" id="p12" name="p1" value="2">
                                <label for="p12"> No </label>
                                <button type="button" class="cssbuttons-io-button" style="margin: auto; margin-top: 20px" @click="nextQuestion('p1','p2'); ">Siguiente
                                    <div class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>                            
                            </div>
                        </XyzTransition>

                        <XyzTransition xyz="fade left-100% out-right-25%">
                            <div class="formRadio xyz-in"  xyz="fade left" id="p2">
                                <p class='text'>Has actuado en el juego diferente a como actuarias en la vida real?</p>
                                <input type="radio" id="p21" name="p2" value="1">
                                <label for="p21"> Sí  </label>
                                <input type="radio" id="p22" name="p2" value="2">
                                <label for="p22"> No </label>
                                <button type="button" class="cssbuttons-io-button" style="margin: auto; margin-top: 20px" @click="nextQuestion('p2','p3'); ">Siguiente
                                    <div class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>   
                            </div>
                        </XyzTransition>

                        <XyzTransition xyz="fade left-100% out-right-25%">
                            <div class="formRadio xyz-in"  xyz="fade left" id="p3">
                            <p class='text'>Al principio de la historia, Óscar te ha enviado un mensaje insultando a tu amigo Marcos. ¿Te has encontrado en alguna situación similar en la vida real?</p>
                                <input type="radio" id="p31" name="p3" value="1">
                                <label for="p31"> Sí </label>
                                <input type="radio" id="p32" name="p3" value="2">
                                <label for="p32"> No </label>
                                <button type="button" class="cssbuttons-io-button" style="margin: auto; margin-top: 20px" @click="nextQuestion('p3','p4'); ">Siguiente
                                    <div class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>   
                            </div>
                        </XyzTransition>

                        <XyzTransition xyz="fade left-100% out-right-25%">
                            <div class="formRadio xyz-in"  xyz="fade left" id="p4">
                                <p class='text'>¿Si alguna vez visto acoso, defendiste a la persona o avisaste algún adulto de lo que habías visto?</p>
                                <input type="radio" id="p41" name="p4" value="1">
                                <label for="p41"> Sí </label>
                                <input type="radio" id="p42" name="p4" value="2">
                                <label for="p42"> No </label>
                                <input type="radio" id="p43" name="p4" value="3">
                                <label for="p43"> Nunca he visto acoso </label>
                                <button type="button" class="cssbuttons-io-button" style="margin: auto; margin-top: 20px" @click="nextQuestion('p4','p6'); ">Siguiente
                                    <div class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>   
                            </div>
                        </XyzTransition>

                        <XyzTransition xyz="fade left-100% out-right-25%">
                            <div class="formRadio xyz-in"  xyz="fade left" id="p6">
                                <p class='text'>Recuerda que estas respuestas son anónimas y no se asocian a ninguna persona. ¿Has insultado a algunos de tus compañeros?</p>
                                <input type="radio" id="p61" name="p6" value="1">
                                <label for="p61"> Sí  </label>
                                <input type="radio" id="p62" name="p6" value="2">
                                <label for="p62"> No </label>
                                <button type="button" class="cssbuttons-io-button" style="margin: auto; margin-top: 20px" @click="nextQuestion('p6','p7'); ">Siguiente
                                    <div class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>   
                            </div>
                        </XyzTransition>

                        <XyzTransition xyz="fade left-100% out-right-25%">
                            <div class="formRadio xyz-in"  xyz="fade left" id="p7">
                                <p class='text'>¿Crees que la historia que cuenta este minijuego es realista?</p>
                                <input type="radio" id="p71" name="p7" value="1">
                                <label for="p71"> Sí </label>
                                <input type="radio" id="p72" name="p7" value="2">
                                <label for="p72"> No </label>
                                <input type="radio" id="p73" name="p7" value="3">
                                <label for="p73"> Más o menos </label>
                                <button type="button" class="cssbuttons-io-button" style="margin: auto; margin-top: 20px" @click="nextQuestion('p7','p8'); ">Siguiente
                                    <div class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button>   
                            </div>
                        </XyzTransition>

                        <XyzTransition xyz="fade left-100% out-right-25%">
                            <div class="formRadio xyz-in"  xyz="fade left" id="p8">
                                <p class='text'>Crees que has aprendido algo con este juego?</p>
                                <input type="radio" id="p81" name="p8" value="1">
                                <label for="p81"> Sí </label>
                                <input type="radio" id="p82" name="p8" value="2">
                                <label for="p82"> No </label>
                                <input type="radio" id="p83" name="p8" value="3">
                                <label for="p83"> Un poco </label>
                                <button type="button" class="cssbuttons-io-button" style="margin: auto; margin-top: 20px" @click="nextQuestion('p8','p9'); ">Siguiente
                                    <div class="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                    </div>
                                </button> 
                            </div>
                        </XyzTransition>

                        <XyzTransition xyz="fade left-100% out-right-25%">
                            <div class="formRadio xyz-in"  xyz="fade left" id="p9" @click="finalQuestion()">
                                <p class='text'>¿Crees que actúas diferente cuando te encuentres en situaciones similares gracias a este juego?</p>
                                <input type="radio" id="p91" name="p9" value="1">
                                <label for="p91"> Sí </label>
                                <input type="radio" id="p92" name="p9" value="2">
                                <label for="p92"> No </label>
                                <input type="radio" id="p93" name="p9" value="3">
                                <label for="p93"> Tal vez </label>
                            </div>
                        </XyzTransition>

                        <router-link id='startButton' class='nav-link' v-if="showlink == true" @click="nextQuestion('p9','send')" :to="{name:'endGame'}" >
                            <button  type="button" class="cssbuttons-io-button" style="margin: auto" @click="isChatList = true">FINALIZAR!
                                <div class="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                                </div>
                            </button>
                        </router-link>
                    </form>
                </div>
            </div>
        </div>
    </Phone>
</template>

<script>

import emailjs from 'emailjs-com';
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
        }
        this.startForm(); 
        this.nextQuestion(null, 'p1');
    },

    methods: {

        finalQuestion: function(){
            if(document.querySelector('input[type=radio][name=p8]:checked')){
                this.showlink = true;
            }
            
        },
        //Plataforma: https://dashboard.emailjs.com/
        //Correo usado: upf.tfg.paugalan@gmail.com
        //Contraseña: en proceso de recuperacion.
        sendEmail() {
            var templateParams = {
                name: this.$store.getters.getID,
                message: JSON.stringify(this.$store.getters.getPreFormulary)
            };  
            try {
                emailjs.send('service_3mckqye','template_g8kvx5s', templateParams, 'user_19PVjLKPzVGUG5VUn6jOU')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                }, function(error) {
                    console.log('FAILED...', error);
                });
            } catch(error) {
                console.log({error})
            }
        },
        nextQuestion: function(id, idNext){
            if(idNext == 'send' && document.querySelector('input[type=radio][name='+id+']:checked')){
                this.saveForm();
            }else if(id == null){
                if(document.getElementById(idNext)){
                    setTimeout(() => {
                        document.getElementById(idNext).classList.add("xyz-in");
                        document.getElementById(idNext).style.display = 'block';
                    }, 510);
                    
                }
                if(document.getElementById(id)){
                    document.getElementById(id).classList.add("xyz-out");
                    document.getElementById(id).
                    setTimeout(() => {
                        document.getElementById(id).style.display = 'none';
                    }, 500);
                }
            }
            else if(document.querySelector('input[type=radio][name='+id+']:checked')){
                if(document.getElementById(idNext)){
                    setTimeout(() => {
                        document.getElementById(idNext).style.display = 'block';
                    }, 500);
                    
                }
                if(document.getElementById(id)){
                    document.getElementById(id).classList.add("xyz-out");
                    setTimeout(() => {
                        document.getElementById(id).style.display = 'none';
                    }, 500);
                    
                }
            }
        },
        startForm: function(){
            this.start = true;
        },
        saveForm: function(){
            var p1 = document.querySelector('input[type=radio][name=p1]:checked').value;
            var p2 = document.querySelector('input[type=radio][name=p2]:checked').value;
            var p3 = document.querySelector('input[type=radio][name=p3]:checked').value;
            var p4 = document.querySelector('input[type=radio][name=p4]:checked').value;
            var p6 = document.querySelector('input[type=radio][name=p6]:checked').value;
            var p7 = document.querySelector('input[type=radio][name=p7]:checked').value;
            var p8 = document.querySelector('input[type=radio][name=p8]:checked').value;
            var p9 = document.querySelector('input[type=radio][name=p9]:checked').value;

            var posFormulary = [2, p1, p2, p3, p4, p6, p7, p8, p9];
            console.log(posFormulary);
            this.$store.commit('setPosFormulary', posFormulary);
            this.sendEmail()
        },
    }
}
</script>

<style scoped>

.formRadio{
  display: none;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 15px;
  width: fit-content;
  height: fit-content;
  position: relative;
  margin: auto;
  padding: 5px 20px 5px 20px;
  overflow-x: hidden;
  background-color:whitesmoke;
  font-size: 20px;
  padding: 10px 15px 10px 15px;
  margin-bottom: 25px;
  margin-top: 10px;
}
.formRadio input[type="radio"] + label {
    border: 2px solid var(--main-color);
    background: white;
    padding: 5px 5px 5px 5px;
    border-radius: 15px;
    height: auto;
    width: 100%;
    font-size: 17px;
    margin: 0%;
    margin-bottom: 8px;
}
.formRadio input[type="radio"]:checked + label {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
  background-color:var(--main-color);
  border-color: var(--main-color);
  font-weight: bold;
  color: white;
  
}
.formRadio input[type="radio"]:hover + label {
  background: #A370F0;
  border-color: #A370F0;
  color: white;
}

.formRadio input[type="radio"]{
  display: none;
}
.formRadio label{
  justify-content: space-evenly;
}

</style>