<template>
  <div class="Bar">
    <ul>
      <li><router-link to>Informations personnelles</router-link></li>
      <li><router-link to>Réseaux Sociaux</router-link></li>
      <li><router-link to>Education</router-link></li>
      <li><router-link to>Expérience professionnelle</router-link></li>
      <li><router-link to>Compétences</router-link></li>
      <li><router-link to>Langues</router-link></li>
      <li><router-link to>Centres d'intérêts</router-link></li>
    </ul>
    <div class="titlediv">
      <h1 class="title">Hugo.G</h1>
    </div>
  </div>

</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Bar",
  mounted() {
    //set link active
    let links = document.querySelectorAll("router-link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((link) => {
          link.classList.remove("active");
        });
        link.classList.add("active");
      });
    });
  }
}
</script>

<style scoped>

.Bar {
  width: 100%;
  height: 75px;
  border-bottom: white solid 1px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  overflow: hidden;
  top: 0;
  position: fixed;
  background: #1a1a1a;
  z-index: 10;
}
.Bar ul {
  list-style: none;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2%;
  width: 100vh;
  height: 100%;
  flex-wrap: nowrap;
}
.Bar ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 14px;
}

router-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

router-link:hover, .active{
  color: #4cbb7e;
}
</style>