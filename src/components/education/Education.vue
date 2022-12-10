<template>
  <div class="educations">
    <h1>{{ title }}</h1>
    <p class="date">{{ date }}</p>
    <p>{{ description }}</p>
    <p>{{ school }}</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Education",
  props: {
    title: String,
    date: String,
    description: String,
    school: String,
  }
}
</script>

<style scoped>

h1 {
  font-size: 1.5em;
  font-weight: bold;
}

p {
  font-size: 1em;
  font-weight: normal;
}

.date {
  font-size: 0.8em;
  font-style: italic;
}

</style>