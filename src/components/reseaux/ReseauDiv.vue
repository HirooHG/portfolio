<template>
  <div class="reseauxDiv">
    <div class="linkdiv">
      <h1 class="title">Réseaux Sociaux</h1>
      <Linkedin class="reseau"/>
    </div>
    <Github class="reseau"/>
  </div>
</template>

<script>
import Linkedin from "@/components/reseaux/Linkedin.vue";
import Github from "@/components/reseaux/Github.vue";

export default {
  name: "ReseauDiv",
  components: {
    Linkedin,
    Github
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 900) {
        document.querySelectorAll(".reseau").forEach((reseau) => {
          reseau.classList.add("active");
        });
      }
    });
  }
}
</script>

<style scoped>
.reseau {
  background-color: white;
  opacity: 0;
}

.reseau:hover {
  transform: scale(1.1);
  transition: transform 330ms ease-in-out;
}

.active {
  animation-name: reseau;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}

@keyframes reseau {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

* {
  position: relative;
}

h1 {
  font-size: 3.5em;
  font-weight: bold;
  margin: 10px;
}

.linkdiv {
  position: relative;
}

.linkdiv h1 {
  position: absolute;
  top: -150px;
  left: -200px;
  width: 100vh;
}

.reseauxDiv {
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: white solid 1px;
  border-top: white solid 1px;
}
</style>