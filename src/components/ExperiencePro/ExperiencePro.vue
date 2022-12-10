<template>
  <div class="data">
    <p>{{ date }}</p>
    <p>{{ precision }}</p>
  </div>
  <div class="desc">
    <p>{{ title }}</p>
    <p>{{ description }}</p>
  </div>

</template>

<script>
export default {
  name: "ExperiencePro",
  props: {
    date: String,
    precision: String,
    title: String,
    company: String,
    task: Array,
  }
}
</script>

<style scoped>

</style>