<template>
  <div class="info" >
    <h1>Informations personnelles</h1>
    <p>
      <FaAddressCard/>
      24 impasse du semnoz<br>74150 SALES
    </p>
    <p>
      <AnFilledPhone/>
      06.51.04.18.93
    </p>
    <p>02 septembre 2003 (19 ans)</p>
    <a href="mailto:hugo.golliet@etu.univ-smb.fr">hugo.golliet@etu.univ-smb.fr</a>
    <p>Permis B</p>
  </div>
</template>

<script>
import { AnFilledPhone } from "@kalimahapps/vue-icons/an";
import { FaAddressCard } from "@kalimahapps/vue-icons/fa";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Infos",
  components: {
    AnFilledPhone,
    FaAddressCard
  }
}
</script>

<style scoped>
.info {
  color: white;
  position: relative;
}

h1 {
  position: absolute;
  width: 100vh;
  top: -70px;
  left: -200px;
  font-size: 3.2em;
}

p {
  font-size: 1.2em;
}

a {
  color: #4cbb7e;
  font-weight: bold;
  text-decoration: none;
}
</style>