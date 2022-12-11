<template>
  <div class="comingsoon">
    <h1>Coming soon</h1>
  </div>
</template>

<script>
export default {
  name: "ComingSoon"
}
</script>

<style scoped>

.comingsoon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;
  height: 100vh;
  width: 100%;
  background: linear-gradient(90deg, #42d392 0%, #50b0bf 50%, #6088f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation-name: linearanimation;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-delay: 2s;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}

@keyframes linearanimation {
  0% {
    background: linear-gradient(90deg, #42d392 0%, #50b0bf 50%, #6088f2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  50% {
    background: linear-gradient(90deg, #6088f2 0%, #42d392 50%, #50b0bf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  100% {
    background: linear-gradient(90deg, #50b0bf 50%, #6088f2 100%, #42d392 0%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

</style>