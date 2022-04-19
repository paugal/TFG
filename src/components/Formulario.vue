<template>
    <Phone>
        <div class="screenForm xyz-in" id='screen' xyz="fade in" style='background-image: url("https://i.ibb.co/zRNQYd5/wp4410724.jpg"); background-repeat: no-repeat; background-size: cover; background-position: center; position: relative;'>
            <div class="topbarchat xyz-in" xyz="up">
                <div>
                    <div class="clock">22:12</div>
                    <div class="notIcons">
                        <vue-feather type="wifi" stroke="white" size="15px"></vue-feather>
                        <vue-feather type="battery" stroke="white" size="15px"></vue-feather>
                        <vue-feather type="bar-chart" stroke="white" size="15px"></vue-feather>
                    </div>
                </div>
                <div style="margin: 20px 0px 10px 35px; display: flex; gap: 25px; align-items: center;">
                    <img  class="userImage" src= "https://i.ibb.co/0XP20dZ/Optimized-paugalansmall.jpg" alt="user_image_bully" border="0">                 
                    <div  class="userName">Pau Galan</div>
                </div>
            </div>
            <div class='chatbox' id='chatbox'>
                <div class='scrollChat' id='scrollChat'>
                    <p class='text' v-if="start != true">Hola👋🏼, mi nombre es Pau y soy el autor de este pequeño minijuego. 
                    Esto forma parte de mi trabajo de final de carrera y os agradezco tu el tiempo y el esfuerzo.
                    Este ejercicio consta de tres partes, en primer lugar un pequeño test.
                    Seguido de un pequeño minijuego, el cual acabara con otro test muy cortito</p>
                    <p class='text' v-if="start != true">Por favor os pido que respondais con sinceridad. Y tranquilos, las respuestas son ANONIMAS.
                    Bueno eso es todo, empecemos con el test!</p>
                    <div class="startForm" @click="startForm()" v-if="start != true">EMPEZAR!</div>
                    <form v-if="start == true" class="xyz-in" xyz="fade up" ref="from">
                        <p class='text'>Con que genero de identificas?</p>
                        <div class="formRadio">
                            <input type="radio" id="mujer" name="genero" value="mujer" required>
                            <label for="mujer">Mujer</label>
                            <input type="radio" id="hombre" name="genero" value="hombre">
                            <label for="hombre">Hombre</label>
                            <input type="radio" id="otro" name="genero" value="otro">
                            <label for="otro">Otro</label>
                        </div>
                        <p class='text'>Que edad tienes?</p>
                        <div class="formRadio">
                            <input type="radio" id="10" name="edad" value="10" required>
                            <label for="10">De 10 a 12</label>
                            <input type="radio" id="13" name="edad" value="13">
                            <label for="13">De 13 a 15</label>
                            <input type="radio" id="16" name="edad" value="16">
                            <label for="16">De 16 a 18</label>
                        </div>
                        <p class='text'>A menudo tengo sentimientos de compasión y preocupación hacia gente menos afortunada que yo.</p>
                        <div class="formRadio">
                            <input type="radio" id="p11" name="p1" value="1">
                            <label for="p11"> 1 </label>
                            <input type="radio" id="p12" name="p1" value="2">
                            <label for="p12"> 2 </label>
                            <input type="radio" id="p13" name="p1" value="3">
                            <label for="p13"> 3 </label>
                            <input type="radio" id="p14" name="p1" value="4">
                            <label for="p14"> 4 </label>
                            <input type="radio" id="p15" name="p2" value="5">
                            <label for="p15"> 5 </label>
                        </div>
                        <p class='text'>Me describiría como una persona bastante sensible.</p>
                        <div class="formRadio">
                            <input type="radio" id="p21" name="p2" value="1">
                            <label for="p21"> 1 </label>
                            <input type="radio" id="p22" name="p2" value="2">
                            <label for="p22"> 2 </label>
                            <input type="radio" id="p23" name="p2" value="3">
                            <label for="p23"> 3 </label>
                            <input type="radio" id="p24" name="p2" value="4">
                            <label for="p24"> 4 </label>
                            <input type="radio" id="p25" name="p2" value="5">
                            <label for="p25"> 5 </label>
                        </div>
                        <p class='text'>A veces no me dan mucha lástima otras personas cuando tienen problemas(R).</p>
                        <div class="formRadio">
                            <input type="radio" id="p31" name="p3" value="1">
                            <label for="p31"> 1 </label>
                            <input type="radio" id="p32" name="p3" value="2">
                            <label for="p32"> 2 </label>
                            <input type="radio" id="p33" name="p3" value="3">
                            <label for="p33"> 3 </label>
                            <input type="radio" id="p34" name="p3" value="4">
                            <label for="p34"> 4 </label>
                            <input type="radio" id="p35" name="p3" value="5">
                            <label for="p35"> 5 </label>
                        </div>
                        <p class='text'>Cuando veo que se aprovechan de alguien, siento necesidad de protegerle.</p>
                        <div class="formRadio">
                            <input type="radio" id="p41" name="p4" value="1">
                            <label for="p41"> 1 </label>
                            <input type="radio" id="p42" name="p4" value="2">
                            <label for="p42"> 2 </label>
                            <input type="radio" id="p43" name="p4" value="3">
                            <label for="p43"> 3 </label>
                            <input type="radio" id="p44" name="p4" value="4">
                            <label for="p44"> 4 </label>
                            <input type="radio" id="p45" name="p4" value="5">
                            <label for="p45"> 5 </label>
                        </div>
                        <p class='text'>Cuando veo que alguien se hace daño, tiendo a permanecer tranquilo(R).</p>
                        <div class="formRadio">
                            <input type="radio" id="p51" name="p5" value="1">
                            <label for="p51"> 1 </label>
                            <input type="radio" id="p52" name="p5" value="2">
                            <label for="p52"> 2 </label>
                            <input type="radio" id="p53" name="p5" value="3">
                            <label for="p53"> 3 </label>
                            <input type="radio" id="p54" name="p5" value="4">
                            <label for="p54"> 4 </label>
                            <input type="radio" id="p55" name="p5" value="5">
                            <label for="p55"> 5 </label>
                        </div>
                        <p class='text'>Las desgracias de otros no suelen angustiarme mucho (R).</p>
                        <div class="formRadio">
                            <input type="radio" id="p61" name="p6" value="1">
                            <label for="p61"> 1 </label>
                            <input type="radio" id="p62" name="p6" value="2">
                            <label for="p62"> 2 </label>
                            <input type="radio" id="p63" name="p6" value="3">
                            <label for="p63"> 3 </label>
                            <input type="radio" id="p64" name="p6" value="4">
                            <label for="p64"> 4 </label>
                            <input type="radio" id="p65" name="p6" value="5">
                            <label for="p65"> 5 </label>
                        </div>
                        <p class='text'>Cuando veo que alguien está siendo tratado injustamente, no suelo sentir mucha pena por él (R).</p>
                        <div class="formRadio">
                            <input type="radio" id="p71" name="p7" value="1">
                            <label for="p71"> 1 </label>
                            <input type="radio" id="p72" name="p7" value="2">
                            <label for="p72"> 2 </label>
                            <input type="radio" id="p73" name="p7" value="3">
                            <label for="p73"> 3 </label>
                            <input type="radio" id="p74" name="p7" value="4">
                            <label for="p74"> 4 </label>
                            <input type="radio" id="p75" name="p7" value="5">
                            <label for="p75"> 5 </label>
                        </div>
                        <p class='text'>A menudo me conmueven las cosas que veo que pasan.</p>
                        <div class="formRadio">
                            <input type="radio" id="p81" name="p8" value="1">
                            <label for="p81"> 1 </label>
                            <input type="radio" id="p82" name="p8" value="2">
                            <label for="p82"> 2 </label>
                            <input type="radio" id="p83" name="p8" value="3">
                            <label for="p83"> 3 </label>
                            <input type="radio" id="p84" name="p8" value="4">
                            <label for="p84"> 4 </label>
                            <input type="radio" id="p85" name="p8" value="5">
                            <label for="p85"> 5 </label>
                        </div>
                        
                        <div  class="aviso" id="aviso" style="display: none">Ups! Parece que quedan preguntas por responder</div>
                        
                        <div v-if="showlink == false" class="startForm" @click="saveForm()">Siguiente!</div>
                        <router-link v-if="showlink == true" id='startButton' class="startForm" v-on:click='saveForm(); sendEmail()' :to="{name:'Home'}" > Siguiente! </router-link>

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
        document.getElementById('screen').style.height = '100vh';
        }
        setInterval(() => { this.saveForm(); }, 1000);
    },

    methods: {

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

        startForm: function(){
            this.start = true;
        },

        saveForm: function(){
            if(document.querySelector('input[type=radio][name=genero]:checked') &&
            document.querySelector('input[type=radio][name=edad]:checked') &&
            document.querySelector('input[type=radio][name=p1]:checked') &&
            document.querySelector('input[type=radio][name=p2]:checked') &&
            document.querySelector('input[type=radio][name=p3]:checked') &&
            document.querySelector('input[type=radio][name=p4]:checked') &&
            document.querySelector('input[type=radio][name=p5]:checked') &&
            document.querySelector('input[type=radio][name=p6]:checked') &&
            document.querySelector('input[type=radio][name=p7]:checked') &&
            document.querySelector('input[type=radio][name=p8]:checked')){
                var genero = document.querySelector('input[type=radio][name=genero]:checked').value;
                var edad = document.querySelector('input[type=radio][name=edad]:checked').value;
                var p1 = document.querySelector('input[type=radio][name=p1]:checked').value;
                var p2 = document.querySelector('input[type=radio][name=p2]:checked').value;
                var p3 = document.querySelector('input[type=radio][name=p3]:checked').value;
                var p4 = document.querySelector('input[type=radio][name=p4]:checked').value;
                var p5 = document.querySelector('input[type=radio][name=p5]:checked').value;
                var p6 = document.querySelector('input[type=radio][name=p6]:checked').value;
                var p7 = document.querySelector('input[type=radio][name=p7]:checked').value;
                var p8 = document.querySelector('input[type=radio][name=p8]:checked').value;
                document.getElementById('aviso').style.display = 'none'
                var preFormulary = [genero, edad, p1, p2, p3, p4, p5, p6, p7, p8];
                console.log(preFormulary);
                this.$store.commit('setPreFormulary', preFormulary);
                this.showlink = true;
            }else{
                try {
                document.getElementById('aviso').style.display = 'block'
                this.showlink = false;
                }catch(error){
                    return 0;
                }
            }
        }
    }
}
</script>
