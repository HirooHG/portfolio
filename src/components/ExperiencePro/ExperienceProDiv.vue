<template>
  <div class="ExperienceProDiv">
    <div class="titlediv">
      <h1 class="title">Expérience professionnelle</h1>
    </div>
    <div class="expdiv">
      <ExperiencePro
          date="2021 - 2022"
          precision="travail d'été en intérim"
          title="Pôle juridique - patrimonial"
          desc="Haute-Savoie Habitat - Annecy (74)"
          :tasks="tasks"
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
      tasks: {
        "1": "Travail sur une base de données Excel",
      }
    };
  }
}
</script>

<style scoped>
.ExperienceProDiv {
  color: white;
  border-bottom: white solid 1px;
  border-top: white solid 1px;
  padding-bottom: 10vh;
}

.titlediv {
  margin-left: 10%;
  margin-top: 5%;
}

.expdiv {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
}

</style>