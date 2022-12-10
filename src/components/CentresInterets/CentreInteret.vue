<template>
  <p>{{ centreInteret.desc}}</p>
</template>

<script>
export default {
  name: "CentreInteret",
  props: {
    centreInteret: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>