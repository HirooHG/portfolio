<template>
  <div class="LangueDiv">
    <p v-if="!langue.isAsiat"><MdAbc class="icon"/></p>
    <p v-if="langue.isAsiat"><UnLetterChineseA class="icon"/></p>
    <p class="name">{{langue.name}}</p>
    <p class="level">{{langue.level}}</p>
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
.LangueDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 20vh;
  gap: 10%;
  padding: 20%;
  border-radius: 20%;
  border: white solid 1px;
}

.name {
  font-size: 2em;
  margin-top: 5%;
  font-weight: bold;
  background: linear-gradient(90deg, #42d392 0%, #50b0bf 50%, #6088f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.level {
  font-style: italic;
  text-align: center;
}

.icon {
  font-size: 2.5em;
  margin-top: 5%;
}
</style>