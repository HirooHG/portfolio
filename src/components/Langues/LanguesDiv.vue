<template>
  <div class="LanguesDiv">
    <div class="titlediv">
      <h1 class="title">Langues</h1>
    </div>
    <div v-for="langue in langues" :key="langue.id">
      <Langue :langue="langue"/>
    </div>
  </div>
</template>

<script>
import Langue from "@/components/Langues/Langue.vue";

export default {
  name: "LanguesDiv",
  components: {
    Langue
  },
  data() {
    return {
      langues: [
        {
          id: 1,
          name: "Anglais",
          level: "niveau intermédiaire supérieur",
          isAsiat: false
        },
        {
          id: 2,
          name: "Espagnol",
          level: "A2 : intermédiaire",
          isAsiat: false
        },
        {
          id: 3,
          name: "Chinois",
          level: "débutant",
          isAsiat: true
        }
      ]
    };
  }
}
</script>

<style scoped>
.LanguesDiv {
  height: 70vh;
  width: 100%;
  color: white;
}
</style>