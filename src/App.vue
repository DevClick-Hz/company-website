<template>
  <div id="app">
     <transition name="fade" mode="out-in">
     <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
html,body{
  box-sizing: border-box;
}
#app {
font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--background-color);
  box-sizing: border-box;
  overflow: hidden;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active, .fade-leave-active{
  transition: all .5s ease;
}
</style>
