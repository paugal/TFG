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
