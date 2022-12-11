<template>
  <div class="Bar">
    <div id="nav">
      <router-link :to="{ name: 'Accueil'}">Accueil</router-link>
      <router-link :to="{ name: 'Projects'}">Projets</router-link>
    </div>
    <h1 class="title" id="name">Hugo GOLLIET </h1>
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
  z-index: 1;
}
.Bar ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vh;
  height: 100%;
  flex-wrap: nowrap;
}
.Bar ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
}

#nav {
  display: flex;
  gap: 50%;
}

#nav a{
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.4em;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

#name {
  font-size: 2.5em;
}
</style>