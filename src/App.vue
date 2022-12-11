<template>
  <Bar/>
  <router-view/>
</template>

<script>
import Bar from '@/components/Bar.vue'

export default {
  name: 'App',
  components: {
    Bar,
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

.title {
  font-size: 3.5em;
  font-weight: bold;
  margin: 10px;
  background: linear-gradient(90deg, #42d392 0%, #50b0bf 50%, #6088f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
