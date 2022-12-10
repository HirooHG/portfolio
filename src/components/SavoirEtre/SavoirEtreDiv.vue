<template>
  <div class="SavoirEtreDiv">
    <h1 class="title">Savoir-être</h1>
    <div class="content">
      <div class="SEs">
        <div  v-for="savoirEtre of savoirEtres" :key="savoirEtre.id">
          <SavoirEtre :savoirEtre="savoirEtre"/>
        </div>
      </div>
      <img src="@/assets/se.png" alt="Noice">
    </div>
  </div>
</template>

<script>
import SavoirEtre from "@/components/SavoirEtre/SavoirEtre.vue";

export default {
  name: "SavoirEtreDiv",
  components: {
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

img {
  width: 200px;
}

.SavoirEtreDiv {
  width: 100%;
  height: 70vh;
  color: white;
  border-bottom: white 1px solid;
}

.title {
  font-size: 3.5rem;
  padding: 0;
  margin-top: 5%;
  margin-left: 10%;
}

.content {
  display: flex;
  height: 70%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
</style>