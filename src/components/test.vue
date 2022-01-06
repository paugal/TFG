<template>
    <div>
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">

      <div v-if="!isChatList && !isChat" class="marvel-device iphone-x">
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
        <div class="screen " style="background: var(--main-color)">
        
          <div v-if="isLoading || (!isChatList)">
            <!--Pantalla de carga -->
            <div v-if="isLoading" class="centredelement">
              
                  <div class="half-circle-spinner">
                      <div class="circle circle-1"></div>
                      <div class="circle circle-2"></div>
                  </div>
            </div>

            <!-- Introduccion -->
            <div v-if="!isLoading && !isChatList && !isChat" >
                  <Intro/>
              <button  type="button" class="btn btn-primary" style="margin: 20px 60px 0px 60px" 
              @click="isChatList = true">NEXT</button>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>


export default({
    name: 'test',
    data() {
        return{
            isLoading: true,
            isChatList: false,
            isChat: false
        }
    },
    mounted() {
        setTimeout(() => {
        this.isLoading = false;
        }, 3500);
  }
})


</script>

<style scoped>

#app {
  
  font-family: "Segoe UI";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fas{
    color: white;
    float: right;
    margin-right: 5px;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
.btn{
  color:whitesmoke;
  border-color:whitesmoke;
}

.card{
    background: #EEEEEF;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.0);
    transition: 0.3s;
    border-radius: 35px; /* 5px rounded corners */
    border: 0px solid black;

    height: 800px;
    width: 380px;
    
    margin: auto;
    padding: 20px 30px 30px 30px;
    background-image: url("https://i.ibb.co/Lrk1RHy/phone-01-generated2-sinfondo.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
}

.loadscreen{
    background: var(--main-color);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.0);
    transition: 0.3s;
    border-radius: 35px; /* 5px rounded corners */
    border: 0px solid black;

    height: 800px;
    width: 380px;
    
    margin: auto;
    padding: 20px 30px 30px 30px;
    background-image: url("https://i.ibb.co/Lrk1RHy/phone-01-generated2-sinfondo.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
}



.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
.centredelement{
    padding: 320px 110px 320px 140px;
}

.half-circle-spinner, .half-circle-spinner * {
      box-sizing: border-box;
    }

    .half-circle-spinner {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      position: relative;
    }

    .half-circle-spinner .circle {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: calc(100px / 10) solid transparent;
    }

    .half-circle-spinner .circle.circle-1 {
      border-top-color: whitesmoke;
      animation: half-circle-spinner-animation 1s infinite;
    }

    .half-circle-spinner .circle.circle-2 {
      border-bottom-color: whitesmoke;
      animation: half-circle-spinner-animation 1s infinite alternate;
    }

    @keyframes half-circle-spinner-animation {
      0% {
        transform: rotate(0deg);

      }
      100%{
        transform: rotate(360deg);
      }
    }

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

</style>
