<template>
  <div class="Sujet">
    Stage en Développement mobile
  </div>
  <div class="infodiv">
    <Infos></Infos>
    <Three_cube_me></three_cube_me>
  </div>
</template>

<script>
import Infos from "@/components/Infos/Infos.vue";
import Three_cube_me from "@/components/Infos/Three_cube_me.vue";

export default {
  name: "InfoDiv",
  components: {
    Infos,
    Three_cube_me
  },
}
</script>

<style scoped>
.Sujet {
  display: flex;
  align-items: end;
  justify-content: center;
  color: white;

  height: 25vh;

  margin-top: 75px;
  font-size: 7em;
  font-weight: bold;
}

.infodiv {
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>