<template>
<div>
   <div class="nav">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Menu</v-toolbar-title>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-settings</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Services</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Clients</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contact us</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-office-building</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About us</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  name: 'navbar',
  data: () => ({
    drawer: false,
    group: null
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.nav{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  color:white;
  position: absolute;
  width: 100%;
  z-index: 6;
  .v-btn--outlined .v-btn__content .v-icon, .v-btn--round .v-btn__content .v-icon{
    color: white;
  }
}
.v-list--dense{
.v-icon.v-icon{
  color: #c24914 !important;
}
}
.v-list-item{
  margin: 40px 0;
}
.v-list-item__title{
  font-size: 1.2rem !important;
}
</style>
