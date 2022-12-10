<template>
  <div class="educationDiv">
    <div class="titlediv">
      <h1 class="title">Education</h1>
    </div>
    <div class="education">
      <Education
        title="2e année de BUT Informatique"
        date="2022"
        description="Parcours A : Réalisation d'applications : conception, développment, validation"
        school="IUT d'Annecy (74)"
      />
      <Education
          title="Baccalauréat STI2D (mention Bien)"
          date="2021"
          description="Option Sciences et Technologies de l'Industrie et du Développement Durable"
          school="Lycée de l'Albanais, France"
      />
    </div>
  </div>
</template>

<script>
import Education from "@/components/education/Education.vue";

export default {
  name: "EducationDiv",
  components: {
    Education,
  },
}
</script>

<style scoped>
.educationDiv {
  color: white;
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

</style>