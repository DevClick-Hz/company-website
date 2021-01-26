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
  font-family: 'Aleo', serif;
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
.backTop{
    color: #f9813a;
    position: fixed;
    right: 30px;
    bottom: 50px;
    z-index: 100;
    display: none;
    padding: 7px 10px;
    border: 2px solid #f9813a;
    border-radius: 50%;
    &:hover{
      color: #f9813a;
    }
  }
  @media only screen and (max-width: 576px) {
    .backTop{
      right: 5px !important;
      border: none;
    }
  }
  
</style>
