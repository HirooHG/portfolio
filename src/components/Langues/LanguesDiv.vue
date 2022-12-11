<template>
  <div class="LanguesDiv">
    <div class="titlediv">
      <h1 class="title">Langues</h1>
    </div>
    <div class="Langues">
      <div v-for="langue in langues" :key="langue.id" class="langue" :class="langue.name">
        <Langue :langue="langue"/>
      </div>
    </div>
  </div>
</template>

<script>
import Langue from "@/components/Langues/Langue.vue";

export default {
  name: "LanguesDiv",
  components: {
    Langue
  },
  data() {
    return {
      langues: [
        {
          id: 1,
          name: "Anglais",
          level: "niveau intermédiaire supérieur",
          isAsiat: false
        },
        {
          id: 2,
          name: "Espagnol",
          level: "intermédiaire",
          isAsiat: false
        },
        {
          id: 3,
          name: "Mandarin",
          level: "débutant",
          isAsiat: true
        }
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 4700) {
        document.querySelectorAll(".langue").forEach((langue) => {
          langue.classList.add("active");
        });
      }
    });
  }
}
</script>

<style scoped>
.LanguesDiv {
  height: 70vh;
  width: 100%;
  color: white;
}

.langue {
  opacity: 0;
}

.active {
  animation-name: langueanim;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}

.Anglais {
  animation-delay: 1s;
}

.Espagnol {
  animation-delay: 1.5s;
}

.Mandarin {
  animation-delay: 2s;
}

@keyframes langueanim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.title {
  margin-left: 10%;
  margin-top: 5%;
}

.Langues {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60%;
}
</style>