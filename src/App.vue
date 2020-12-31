<template>
  <div id="app">
    <transition name="fade" mode="out-in">
     <router-view/>
    </transition>
    <foot/>
  </div>
</template>
<script>
import foot from "./components/foot"
export default {
  name: 'app',
  components: {
    foot
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
  width: 100vw;
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
