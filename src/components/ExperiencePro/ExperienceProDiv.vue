<template>
  <div class="ExperienceProDiv">
    <div class="titlediv">
      <h1 class="title">Expériences professionnelles</h1>
    </div>
    <div class="expdiv">
      <ExperiencePro
          date="2021 - 2022"
          precision="travail d'été en intérim"
          title="Pôle juridique - patrimonial"
          company="Haute-Savoie Habitat - Annecy (74)"
          :tasks=tasks1
      />
    </div>
  </div>
</template>

<script>
import ExperiencePro from "@/components/ExperiencePro/ExperiencePro.vue";

export default {
  name: "ExperienceProDiv",
  components: {
    ExperiencePro
  },
  data() {
    return {
      tasks1: [
        {
          id: 1,
          name: "Travail sur une base de données Excel"
        }
      ]
    }
  }
}
</script>

<style scoped>
.ExperienceProDiv {
  height: 70vh;
  background: white;
}
</style>