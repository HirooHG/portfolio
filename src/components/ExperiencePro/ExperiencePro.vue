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
    description: String,
  }
}
</script>

<style scoped>

</style>