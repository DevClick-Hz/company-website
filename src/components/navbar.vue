<template>
  <div class="navbar">
      <h4>Company Logo</h4>
      <b-button v-b-toggle.sidebar-right><i class="fas fa-bars fa-lg"></i></b-button>
      <b-sidebar id="sidebar-right" title="Site map" right shadow>
      <div class="px-3 py-2">
        <b-nav>
    <b-nav-item active>Services</b-nav-item>
    <b-nav-item>Clients</b-nav-item>
    <b-nav-item>About us</b-nav-item>
    <b-nav-item>Career</b-nav-item>
    <b-nav-item>Contact us</b-nav-item>
  </b-nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style lang="scss" scoped>
.navbar{
    color:white;
    position: absolute;
    top: 10px;
    padding: 5px 25px;
    width: 100%;
    z-index: 1;
    .nav{
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
      a.nav-link{
        color: white;
      }
    }
    .pl-3, .px-3{
      height: 100%;
    }
}
</style>
<style lang="scss">
 #sidebar-right{
        background-color: var(--background-color) !important;
        color: var(--font-color) !important;
    }
    .b-icon.bi{
        color: var(--font-color) !important;
    }
    a.nav-link.active{
      color: #f9813a !important;
    }
</style>