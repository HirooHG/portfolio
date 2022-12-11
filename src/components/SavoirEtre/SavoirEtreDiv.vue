<template>
  <div class="SavoirEtreDiv">
    <h1 class="title">Savoir-être</h1>
    <div class="content">
      <div class="SEs">
        <div  v-for="savoirEtre of savoirEtres" :key="savoirEtre.id">
          <SavoirEtre :savoirEtre="savoirEtre" :class="savoirEtre.name" class="se"/>
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
  },
  mounted() {
    window.onscroll = () => {
      if (window.scrollY > 4100) {
        document.querySelectorAll(".se").forEach((se) => {
          se.classList.add("active");
        });
      }
    };
  }
}
</script>

<style scoped>

img {
  width: 200px;
}

.se {
  opacity: 0;
}

.active {
  animation-name: seanim;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}

.Curiosité {
  animation-delay: 0.5s;
}

.Assiduité {
  animation-delay: 1s;
}

.Autonomie {
  animation-delay: 1.5s;
}

.Organisation {
  animation-delay: 2s;
}

.Adaptabilité {
  animation-delay: 2.5s;
}

@keyframes seanim {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
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