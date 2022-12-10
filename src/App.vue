<template>
  <Bar/>
  <InfoDiv/>
  <ReseauDiv/>
  <EducationDiv/>
  <ExperienceProDiv/>
  <CompetenceDiv/>
  <SavoirEtreDiv/>
  <LanguesDiv/>
  <CentreInteretsDiv/>
</template>

<script>
import Bar from '@/components/Bar.vue'
import InfoDiv from "@/components/Infos/InfoDiv.vue";
import ReseauDiv from "@/components/reseaux/ReseauDiv.vue";
import EducationDiv from "@/components/education/EducationDiv.vue";
import ExperienceProDiv from "@/components/ExperiencePro/ExperienceProDiv.vue";
import CompetenceDiv from "@/components/Competences/CompetenceDiv.vue";
import SavoirEtreDiv from "@/components/SavoirEtre/SavoirEtreDiv.vue";
import LanguesDiv from "@/components/Langues/LanguesDiv.vue";
import CentreInteretsDiv from "@/components/CentresInterets/CentreInteretsDiv.vue";

export default {
  name: 'App',
  components: {
    Bar,
    InfoDiv,
    ReseauDiv,
    EducationDiv,
    ExperienceProDiv,
    CompetenceDiv,
    SavoirEtreDiv,
    LanguesDiv,
    CentreInteretsDiv
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  background: #1a1a1a;
}

InfoDiv {
  margin-top: 50px;
}

.title {
  font-size: 3.5em;
  font-weight: bold;
  margin: 10px;
  background: linear-gradient(90deg, #42d392 0%, #50b0bf 50%, #6088f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
