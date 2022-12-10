<template>
  <div class="SavoirEtreDiv">
    <div class="title&com">
      <div class="titlediv">
        <h1 class="title">Savoir-être</h1>
      </div>
      <div v-for="savoirEtre of savoirEtres" :key="savoirEtre.id">
        <SavoirEtre :savoirEtre="savoirEtre"/>
      </div>
    </div>
    <IllustrationSavoirEtre/>
  </div>
</template>

<script>
import IllustrationSavoirEtre from "@/components/SavoirEtre/IllustrationSavoirEtre.vue";
import SavoirEtre from "@/components/SavoirEtre/SavoirEtre.vue";

export default {
  name: "SavoirEtreDiv",
  components: {
    IllustrationSavoirEtre,
    SavoirEtre
  },
  data() {
    return {
      savoirEtres: [
        {
          id: 1,
          name: "Curiosité",
        },
        {
          id: 2,
          name: "Assiduité",
        },
        {
          id: 3,
          name: "Autonomie",
        },
        {
          id: 4,
          name: "Organisation",
        },
        {
          id: 5,
          name: "Adaptabilité",
        },
      ]
    }
  }
}
</script>

<style scoped>
.SavoirEtreDiv {
  background-color: white;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>