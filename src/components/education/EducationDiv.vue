<template>
  <div class="educationDiv">
    <div class="titlediv">
      <h1 class="title">Education</h1>
    </div>
    <div class="education_logo">
      <div class="education">
        <div class="BUT">
          <FaComputer class="icon"/>
          <Education
              title="2e année de BUT Informatique"
              date="2022"
              description="Parcours A : Réalisation d'applications : conception, développment, validation"
              school="IUT d'Annecy (74)"
          />
        </div>
        <svg class="line">
          <line x1="35" y1="-10" x2="35" y2="160" style="stroke:rgb(255,255,255);stroke-width:2" />
        </svg>
        <div class="lycee">
          <CaDevelopment class="icon"/>
          <Education
              title="Baccalauréat STI2D (mention Bien)"
              date="2021"
              description="Option Sciences et Technologies de l'Industrie et du Développement Durable"
              school="Lycée de l'Albanais, France"
          />
        </div>
        <svg class="line" height="400">
          <line x1="35" y1="-10" x2="35" y2="300" style="stroke:rgb(255,255,255);stroke-width:2" />
        </svg>
      </div>
      <div class="logos">
        <div class="INFO">
          <img src="@/assets/info.png" alt="INFO" class="INFOimg" >
        </div>
        <div class="Albanais">
          <img src="@/assets/alba.jpeg" alt="Albanais">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Education from "@/components/education/Education.vue";
import { FaComputer } from "@kalimahapps/vue-icons/fa";
import { CaDevelopment } from "@kalimahapps/vue-icons/ca";

export default {
  name: "EducationDiv",
  components: {
    Education,
    FaComputer,
    CaDevelopment,
  },
}
</script>

<style scoped>

.titlediv {
  margin-top: 50px;
  margin-left: 10%;
}

.educationDiv {
  color: white;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.education_logo {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

img {
  height: 200px;
}

.education {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 5%;
}

.BUT, .lycee {
  display: flex;
  gap: 10vh;
  justify-content: center;
  align-items: center;
}

.icon {
  font-size: 3em;
  border: white solid 1px;
  padding: 10px;
  border-radius: 20%;
}

.logos {
  width: 30%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20%;
}

.INFOimg {
  background-color: white;
  padding: 10px;
}

.Albanais {
  display: flex;
  justify-content: end;
}

</style>