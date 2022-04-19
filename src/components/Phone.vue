<template>
    <div class="marvel-device iphone-x" v-if="!ifPhone()">
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
        <div class="screen">
            <slot></slot>
        </div>
    </div>
    <div v-if="ifPhone()">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'Phone',
    
    methods: {
    ifPhone: function(){
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        return true;
      }else{
        return false;
      }
    }
  }
}
</script>
