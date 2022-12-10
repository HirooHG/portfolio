<template>
  <div class="centresInteret">
    <div class="titlediv">
      <h1 class="title">Centres d'intérêt</h1>
    </div>
    <div v-for="centreInteret of centreInterets" :key="centreInteret.id">
      <CentreInteret :centreInteret="centreInteret"/>
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
          desc: "Développement mobile d'applications utiles à la vie de tous les jours : liste de course sur un serveur" +
              "local, gestionnaire de mots de passe cryptés et plein d'autres."
        },
        {
          id: 2,
          desc: "Jeux-vidéo type exploration d'environnement avec une histoire remplie d'énigmes."
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
.centresInteret {
  height: 70vh;
  background-color: white;
}
</style>