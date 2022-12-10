<template>
  <div class="exppro">
    <div class="data">
      <p class="date">{{ date }}</p>
      <p class="precision">{{ precision }}</p>
    </div>
    <div class="desc">
      <p class="titleexp">{{ title }}</p>
      <p class="company">{{ desc }}</p>
      <ul v-for="task of tasks" :key="task" class="tasks">
        <li class="task">{{ task }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperiencePro",
  props: {
    date: String,
    precision: String,
    title: String,
    desc: String,
    tasks: Object
  }
}
</script>

<style scoped>
.exppro {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  background-color: #2f2f2f;
  box-shadow: white 0 0 5px ;
}

.data {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.date {
  font-size: 1.5em;
  font-weight: bold;
}

.precision {
  font-size: 1em;
  font-style: italic;
}

.desc {
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
}

.titleexp {
  font-size: 1.5em;
  font-weight: bold;
}

.company {
  font-size: 1em;
  font-style: italic;
}

.tasks {
  margin-left: 50px;
}

</style>