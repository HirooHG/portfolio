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
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 2400) {
        document.querySelectorAll(".expdiv").forEach((expro) => {
          expro.classList.add("active");
        });
      }
    });
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

.active {
  animation-name: expanim;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  animation-iteration-count: 1;
}

@keyframes expanim {
  0% {
    opacity: 0;
    transform: translateY(200px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
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
  opacity: 0;
}

</style>