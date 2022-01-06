<template>
    <div id="Settings" >
        <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">

        <div class="marvel-device iphone-x">
        <div class="notch">
            <div class="camera"></div>
            <div class="speaker"></div>
        </div>
        <div class="top-bar"></div>
        <div class="sleep"></div>
        <div class="bottom-bar"></div>
        <div class="volume"></div>
        <div class="overflow">
            <div class="shadow shadow--tr"></div>
            <div class="shadow shadow--tl"></div>
            <div class="shadow shadow--br"></div>
            <div class="shadow shadow--bl"></div>
        </div>
        <div class="inner-shadow"></div>
        <div class="screen" style='background-image: url("https://i.ibb.co/7SFMs56/Captura-de-pantalla-2022-01-04-165226.png"); background-repeat: no-repeat; background-size: cover; background-position: center; position: relative;'>
            <div class="xyz-in" xyz="fade right">
                <div class="topbar" >
                    <div>
                        <div class="clock">22:12</div>
                        <div class="notIcons">
                            <img src="https://i.ibb.co/b6p3Z4N/not-icons.png" alt="not-icons" border="0">
                        </div>
                    </div>
                    <router-link  :to="{name:'chatslist'}"> <i class="fas fasArrow fa-chevron-left fa-2x"></i> </router-link>
                    <h2 class='titlechats'>Información</h2>
                </div>
               

                <div class='settingslist'>
                    <div class='home'>
                        {{this.msg.length}}
                        <button @click="stopper()"> Stop </button>
                        <button @click="printer()"> Start </button>
                        <div v-for="index in this.msg.length" :key="index">
                            {{setText(this.msg[index-1].text)}}
                            
                            <h1 v-html="paper"> </h1>
                        </div>     
                        
                    </div>
                    <div>
                        <button @click="show = !show"> Toggle render </button>
                        <transition name="fade">
                            <p v-if="show">hello</p>
                        </transition>
                        <button :style="btnStyles">My button</button>
                    </div>
                    
                </div>

                    <div class='bottombar' >
                        <i class="fas fasMenu fa-question-circle fa-2x"></i>
                        <i class="fas fasMenu fa-redo-alt fa-2x"></i>
                        <i class="fas fasMenu fa-cogs fa-2x"></i>
                    </div>

            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default({
    name: 'Home',
    
    data() {
        return{
            titleText:'Hello, Typewritter can type anything -----',
            paper:'',
            timer: null,
            show: true,
            msg: [
                {text: 'Holaaa'},
                {text: 'Que tal?'},
                {text: 'Coomo estas??'}
            ],

        }
    },
    props: {
        bgColor: {
        type: String,
        default: "#07C286"
        },
        height: {
        type: Number,
        default: 100
        }
    },
    mounted(){
        //this.printer()
    },
    computed: {
        btnStyles() {
        return {
            "background-color": "#07C286",
            height: `${this.height}px`
        };
        }
    },
    methods: {
        printer(){
            this.paper = ''
            this.stopper()
            let i = -1
            this.timer = setInterval(() =>{
                i++
                const x = i%this.titleText.length
                this.paper += this.titleText[x]
            }, 100-(Math.random()*50))
        },
        stopper(){
            clearInterval(this.timer)
        },
        setText(text){
            this.titleText = text;
        }
    },
    watch:{
        paper:function(){
            if(this.paper.length == this.titleText.length){
                this.stopper()
            }
        }
    }
})


</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

h1{
    border-right: 2px black solid;
    animation: typebar 0.s steps(40) infinite;
}
@keyframes typebar{
    from{border-right: 2px black solid;}
    to{border-right: 2px transparent solid;}
}
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
.topbar{
    background: rgb(228, 228, 228);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.05);
    transition: 0.3s;
    border: 1px solid rgb(185, 185, 185);
    
}
.settingslist{
    padding-top: 20px;
    min-height: 555px;
    background-color: white;
}
.bottombar{
    background: rgb(228, 228, 228);
    transition: 0.3s;
    border: 1px solid rgb(185, 185, 185);
    height: 70px;
}

.titlechats{
    color: black;
    text-align: left;
    font-size: 50px;
    margin: 100px 0px 25px 60px;
}

.clock{
    margin: 5px 0 0 25px;
    font-size: 17px;
}
.notIcons{
    margin: 5px 23px 0 0;
}


.fasArrow{
    color: var(--main-color);
    float: left;
    margin: 118px 10px 0px -50px;
}


.fasMenu{
    color: var(--main-color);
    margin: 20px 30px 0px 30px;

}


</style>
