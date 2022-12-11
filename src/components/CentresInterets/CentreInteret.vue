<template>
  <div class="centreInteret">
    <router-link to="Projects" class="link">
      <AnOutlinedLink class="icon" v-if="centreInteret.id === 1"/>
    </router-link>
    <p class="desc">{{ centreInteret.desc}}</p>
  </div>
</template>

<script>
import { AnOutlinedLink } from "@kalimahapps/vue-icons/an";

export default {
  name: "CentreInteret",
  components: {
    AnOutlinedLink
  },
  props: {
    centreInteret: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.centreInteret {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vh;
  background-color: white;
  padding: 5%;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px lightblue;
}

.centreInteret:hover {
  transform: scale(1.05);
  transition: transform 330ms ease-in-out;
}

.desc {
  text-align: end;
}

router-link {
  cursor: pointer;
}

.link {
  position: relative;
}

.link:hover::after {
  content: 'Lien Projets';
  font-weight: bold;
  position: absolute;
  top: -15px;
  left: -10px;
  font-size: 12px;
  width: 100vh;
}

.icon {
  width: 40px;
  height: 40px;
}

</style>