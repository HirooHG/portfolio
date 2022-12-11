<template>
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
import InfoDiv from "@/components/Infos/InfoDiv.vue";
import ReseauDiv from "@/components/reseaux/ReseauDiv.vue";
import EducationDiv from "@/components/education/EducationDiv.vue";
import ExperienceProDiv from "@/components/ExperiencePro/ExperienceProDiv.vue";
import CompetenceDiv from "@/components/Competences/CompetenceDiv.vue";
import SavoirEtreDiv from "@/components/SavoirEtre/SavoirEtreDiv.vue";
import LanguesDiv from "@/components/Langues/LanguesDiv.vue";
import CentreInteretsDiv from "@/components/CentresInterets/CentreInteretsDiv.vue";

export default {
  name: "CV",
  components : {
    InfoDiv,
    ReseauDiv,
    EducationDiv,
    ExperienceProDiv,
    CompetenceDiv,
    SavoirEtreDiv,
    LanguesDiv,
    CentreInteretsDiv,
  }
}
</script>

<style scoped>

</style>