<template>
  <div class="home">
    <navbar/>
    <landpage/>
  </div>
</template>

<script>
// @ is an alias to /src


import landpage from '../components/land.vue'
import navbar from '../components/navbar.vue'

export default {
  name: 'Home',
  components: {
    landpage,
    navbar
  }
}
</script>

<style lang="scss" scoped>
</style>
