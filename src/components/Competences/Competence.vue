<template>
  <div class="competence">
    <p id="language">{{ competence.desc }}</p>
    <p id="title">{{ competence.title }}</p>
    <div class="logos">
      <div v-if="competence.title === 'Flutter'">
        <DeFlutterOriginal class="icon"/>
      </div>
      <div v-else-if="competence.title === 'NodeJS'">
        <DeNodejsOriginal class="icon"/>
      </div>
      <div v-else-if="competence.title === 'Versioning'">
        <BxGit class="icon"/>
      </div>
      <div v-else class="database">
        <BxPostgresql class="icon"/>
        <DeSqliteOriginal class="icon"/>
      </div>
    </div>
  </div>
</template>

<script>
import { DeFlutterOriginal } from "@kalimahapps/vue-icons/de";
import { DeNodejsOriginal } from "@kalimahapps/vue-icons/de";
import { BxGit } from "@kalimahapps/vue-icons/bx";
import { BxPostgresql } from "@kalimahapps/vue-icons/bx";
import { DeSqliteOriginal } from "@kalimahapps/vue-icons/de";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Competence",
  props : {
    competence: Object,
  },
  components: {
    DeFlutterOriginal,
    DeNodejsOriginal,
    BxGit,
    BxPostgresql,
    DeSqliteOriginal,
  },
}
</script>

<style scoped>
.competence {
  width: 300px;
  height: 300px;
  background-color: #1e1e1e;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  gap: 10px;
}

#title {
  font-size: 1.5em;
  font-weight: bold;
  background: linear-gradient(90deg, #42d392 0%, #50b0bf 50%, #6088f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#language {
  font-size: 1em;
  font-style: italic;
}

.logos {
  display: flex;
  justify-content: space-evenly;
  height: 30%;
  width: 100%;
  align-items: center;
  gap: 10px;
}

.database {
  display: flex;
  justify-content: space-evenly;
  height: 30%;
  width: 100%;
  align-items: center;
  gap: 10px;
}

.icon {
  width: 70px;
  height: 70px;
}
</style>