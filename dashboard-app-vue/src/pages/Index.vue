<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png">
    <Renderer />
  </div>
</template>

<script>
import Renderer from '@/components/Renderer.vue'

export default {
  name: 'Index',
  components: {
    Renderer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
