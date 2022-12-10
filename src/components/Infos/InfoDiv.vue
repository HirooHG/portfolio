<template>
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
.infodiv {
  height: 70vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>