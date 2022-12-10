<template>
  <div class="reseauxDiv">
    <div class="linkdiv">
      <h1 class="title">Réseaux Sociaux</h1>
      <Linkedin/>
    </div>
    <Github/>
  </div>
</template>

<script>
import Linkedin from "@/components/reseaux/Linkedin.vue";
import Github from "@/components/reseaux/Github.vue";

export default {
  name: "ReseauDiv",
  components: {
    Linkedin,
    Github
  }
}
</script>

<style scoped>
* {
  background-color: white;
  position: relative;
}

h1 {
  font-size: 3.5em;
  font-weight: bold;
  margin: 10px;
}

.linkdiv {
  position: relative;

}

.linkdiv h1 {
  position: absolute;
  top: -100px;
  left: -200px;
  width: 100vh;
}

.reseauxDiv {
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: white solid 1px;
}
</style>