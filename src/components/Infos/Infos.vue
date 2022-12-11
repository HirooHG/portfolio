<template>
  <div class="info" >
    <h1 class="title">Informations personnelles</h1>
    <div class="infos">
      <div class="address">
        <FaAddressCard class="icon"/>
        <p>
          24 impasse du semnoz<br>74150 SALES
        </p>
      </div>
      <div class="phone">
        <AnFilledPhone class="icon"/>
        <p>
          06.51.04.18.93
        </p>
      </div>
      <div class="dateBirth">
        <JaFillBirthdayCake class="icon"/>
        <p>02 septembre 2003 (19 ans)</p>
      </div>
      <div class="email">
        <MdEmail class="icon"/>
        <a href="mailto:hugo.golliet@etu.univ-smb.fr">hugo.golliet@etu.univ-smb.fr</a>
      </div>
      <div class="permis">
        <MdDriveEta class="icon"/>
        <p>Permis B</p>
      </div>
    </div>
  </div>
</template>

<script>
import { AnFilledPhone } from "@kalimahapps/vue-icons/an";
import { FaAddressCard } from "@kalimahapps/vue-icons/fa";
import { JaFillBirthdayCake } from "@kalimahapps/vue-icons/ja";
import { MdEmail } from "@kalimahapps/vue-icons/md";
import { MdDriveEta } from "@kalimahapps/vue-icons/md";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Infos",
  components: {
    AnFilledPhone,
    FaAddressCard,
    JaFillBirthdayCake,
    MdEmail,
    MdDriveEta,
  }
}
</script>

<style scoped>
.address, .phone, .dateBirth, .email, .permis {
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  opacity: 0;
  animation-name: infos;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}

.address {
  animation-delay: 0.5s;
}

.phone {
  animation-delay: 1.5s;
}

.dateBirth {
  animation-delay: 2.5s;
}

.email {
  animation-delay: 3.5s;
}

.permis {
  animation-delay: 4.5s;
}

@keyframes infos {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.info {
  color: white;
  position: relative;
}

h1 {
  position: absolute;
  width: 100vh;
  top: -100px;
  left: -210px;
}

p {
  font-size: 1.2em;
}

a {
  color: #4cbb7e;
  font-weight: bold;
  text-decoration: none;
}

.infos {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.1em;
}

.icon {
  font-size: 1.5em;
}
</style>