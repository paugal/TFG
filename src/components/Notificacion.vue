<template>
<div id='Notificacion' class="notificaciones xyz-in" xyz="fade up delay-5">
    <div class="notContainer xyz-out" xyz="fade up  ease-out-back delay-30">
        <div class="notiText"> Nuevo mensaje de {{this.$store.getters.getNotificacion.username}} </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Notificacion',
    methods: {
        changeShownNot: function (visibility, username) {
        this.$store.commit("setNotificacion", visibility, username);
        },
    },
    mounted() {
        var info = document.getElementById("Notificacion");
        if (info != null) {
        setTimeout(() => this.changeShownNot(false, null), 5000);
        }
  },
}
</script>

<style scoped>
.notificaciones{
    z-index: 1000;
}
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
    padding: 10px;
    font-size: 20px;
    margin: 40px;
}
</style>