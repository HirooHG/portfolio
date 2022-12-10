<template>
  <p>{{ competence.desc }}</p>
  <p>{{ competence.title }}</p>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Competence",
  props : {
    competence: Object
  }
}
</script>

<style scoped>

</style>