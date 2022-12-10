<template>
  <div class="CompetenceDiv">
    <div class="titlediv">
      <h1 class="title">Compétences</h1>
    </div>
    <div class="competences" v-for="comp of competences" :key="comp.id">
      <Competence :competence="comp"/>
    </div>
  </div>
</template>

<script>
import Competence from "@/components/Competences/Competence.vue";

export default {
  name: "CompetenceDiv",
components: {
    Competence
  },
  data() {
    return {
      competences: [
        {
          id: 1,
          title: "Flutter",
          desc: "Dart",
        },
        {
          id: 2,
          title: "NodeJS",
          desc: "Javascript - Typescript",
        },
        {
          id: 3,
          title: "Git",
          desc: "Github",
        },
        {
          id: 4,
          title: "Base de données",
          desc: "SQLite - PostgreSQL",
        },
      ]
    }
  }
}
</script>

<style scoped>

.CompetenceDiv {
  width: 100%;
  height: 70vh;
  color: white;
}

</style>