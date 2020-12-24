<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
html,body{
  box-sizing: border-box;
}
#app {
  font-family: 'Bebas Neue', cursive;
font-family: 'Saira Condensed', sans-serif;
  text-align: center;
   background-color: var(--background-color);
  box-sizing: border-box;
}

</style>
