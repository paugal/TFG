<template>
  <div id="INFODAY" class="dayInfoContainer xyz-out" xyz="fade delay-15">
    
    <div class="dayInfo">
      <div class="clock-loader"></div>
      <p v-if="this.$store.getters.getDay != 10">DIA {{ this.$store.getters.getDay }} </p>
      <p v-if="this.$store.getters.getDay == 10">Por la noche</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "introDay",
  data() {
    return {
      infoDay: true,
    };
  },
  methods: {
    changeShownInfoDay: function (visibility) {
      this.$store.commit("setShownDayInfo", visibility);
    },
  },
  mounted() {
    var info = document.getElementById("INFODAY");
    if (info != null) {
      setTimeout(() => this.changeShownInfoDay(false), 2100);
      setTimeout(() => info.classList.add("hidden"), 2100);
    }
  },
};
</script>

<style scoped>
.clock-loader {
  --clock-color: white;
  --clock-width: 4rem;
  --clock-radius: calc(var(--clock-width) / 2);
  --clock-minute-length: calc(var(--clock-width) * 0.4);
  --clock-hour-length: calc(var(--clock-width) * 0.2);
  --clock-thickness: 0.2rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--clock-width);
  height: var(--clock-width);
  border: 3px solid var(--clock-color);
  border-radius: 50%;
  margin: auto;
}
.clock-loader::before, .clock-loader::after {
  position: absolute;
  content: "";
  top: calc(var(--clock-radius) * 0.25);
  width: var(--clock-thickness);
  background: var(--clock-color);
  border-radius: 10px;
  transform-origin: center calc(100% - calc(var(--clock-thickness) / 2));
  -webkit-transform-origin: center calc(100% - calc(var(--clock-thickness) / 2));
  animation: spin infinite linear;
}
.clock-loader::before {
  height: var(--clock-minute-length);
  animation-duration: 2s;
}
.clock-loader::after {
  top: calc(var(--clock-radius) * 0.25 + var(--clock-hour-length));
  height: var(--clock-hour-length);
  animation-duration: 15s;
  -webkit-animation-duration: 15s
}

@keyframes spin {
  to {
    transform: rotate(1turn);
    -webkit-transform: rotate(1turn);
  }
}
</style>
