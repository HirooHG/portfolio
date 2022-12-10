<template>
  <div class="CompetenceDiv">
    <h1 class="title">Compétences</h1>
    <div class="competences">
      <div v-for="comp of competences" :key="comp.id">
        <Competence :competence="comp"/>
      </div>
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
          title: "Versioning",
          desc: "Git",
        },
        {
          id: 4,
          title: "SQLite - PostgreSQL",
          desc: "SQL",
        },
      ]
    }
  }
}
</script>

<style scoped>

.CompetenceDiv {
  width: 100%;
  color: white;
  padding-bottom: 5%;
  border-bottom: white 1px solid;
}

.title {
  margin-left: 10%;
  margin-top: 5%;
}

.competences {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%;
  row-gap: 5%;
  flex-wrap: wrap;
}

</style>