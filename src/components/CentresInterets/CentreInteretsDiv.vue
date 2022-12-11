<template>
  <div class="centresInteretDiv">
    <h1 class="title">Centres d'intérêt</h1>
    <div class="centresInteret">
      <div  v-for="centreInteret of centreInterets" :key="centreInteret.id">
        <CentreInteret :centreInteret="centreInteret"/>
      </div>
    </div>
  </div>
</template>

<script>
import CentreInteret from "@/components/CentresInterets/CentreInteret.vue";

export default {
  name: "CentreInteretsDiv",
  components: {
    CentreInteret
  },
  data() {
    return {
      centreInterets: [
        {
          id: 1,
          desc: "Développement d'applications mobile utiles à la vie de tous les jours : un jeu de poker avec des websockets en serveur" +
              " local, un gestionnaire de mots de passe cryptés et plein d'autres.",
          link: ""
        },
        {
          id: 2,
          desc: "Apprendre beaucoup de choses, toutes les nouvelles technologies que ce soit du développement\n" +
              "web, mobile ou encore de la théorie des compilateurs et des langages de programmation."
        },
        {
          id: 3,
          desc: "Animation Japonaise."
        }
      ]
    }
  }
}
</script>

<style scoped>
.centresInteretDiv {
  height: 92vh;
  border-top: white 1px solid;
}

.title {
  margin-left: 10%;
  margin-top: 5%;
}

.centresInteret {
  height: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

</style>