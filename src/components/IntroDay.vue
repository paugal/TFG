<template>
  <div id="INFODAY" class="dayInfoContainer xyz-out" xyz="fade delay-10">
    <div class="dayInfo">DIA {{ this.$store.getters.getDay }}</div>
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
      setTimeout(() => this.changeShownInfoDay(false), 2000);
      setTimeout(() => info.classList.add("hidden"), 2000);
    }
  },
};
</script>

<style scoped>
.dayInfoContainer {
  z-index: 10;
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  color: white;
  justify-content: center;
  align-items: center;
  /* From https://css.glass */
  background: rgba(7, 194, 134, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.4px);
  -webkit-backdrop-filter: blur(8.4px);
  border: 1px solid rgba(7, 194, 134, 0.3);
}
.dayInfo {
  font-size: 50px;
  background: var(--main-color);
  font-weight: bold;
  padding: 30px;
  border-radius: 20px;
}
.hidden {
  display: none;
}
</style>