<template>
  <div class="LangueDiv">
    <p v-if="!langue.isAsiat"><MdAbc/></p>
    <p v-if="langue.isAsiat"><UnLetterChineseA/></p>
    <p>{{langue.name}}</p>
    <p>{{langue.level}}</p>
  </div>
</template>

<script>
import { MdAbc } from "@kalimahapps/vue-icons/md";
import { UnLetterChineseA } from "@kalimahapps/vue-icons/un";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Langue",
  components: {
    MdAbc,
    UnLetterChineseA
  },
  props: {
    langue: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>