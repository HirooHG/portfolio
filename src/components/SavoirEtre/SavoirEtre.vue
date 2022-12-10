<template>
  <div class="se">
    <CgArrowLongRightR class="arrow"/>
    <p> {{ savoirEtre.name }}</p>
  </div>
</template>

<script>
import { CgArrowLongRightR } from "@kalimahapps/vue-icons/cg";

export default {
  name: "SavoirEtre",
  components: {
    CgArrowLongRightR
  },
  props: {
    savoirEtre: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.se {
  display: flex;
  gap: 5px;
  font-size: 2em;
}

</style>