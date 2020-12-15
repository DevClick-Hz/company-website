<template>
  <div class="home">
    <navbar/>
    <landpage/>
    <foot/>
  </div>
</template>

<script>
// @ is an alias to /src

import navbar from '../components/navbar.vue'
import landpage from '../components/land.vue'
import foot from '../components/foot.vue'

export default {
  name: 'Home',
  components: {
    navbar,
    landpage,
    foot
  }
}
</script>

<style lang="scss" scoped>
</style>
