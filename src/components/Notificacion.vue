<template>
<div class="xyz-in" xyz="fade up delay-5">
    <div class="notContainer xyz-out" xyz="fade up  ease-out-back delay-30">
        <div class="notiText"> Nuevo mensaje de Marcos </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Notificacion',
    data(){

    },
}
</script>

<style scoped>
.notContainer{
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    
    
}
.notiText{
    background: rgba(7, 231, 160, 1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.4px);
    -webkit-backdrop-filter: blur(8.4px);
    z-index: 8;
    padding: 10px;
    font-size: 20px;
    margin: 40px;
}
</style>