<template>
<div>
   <div class="nav">
     <div class="nav-menu">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Menu</v-toolbar-title>
      </div>
      <i class="fas fa-lightbulb fa-lg" @click="changeTheme"></i>
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
              <v-icon>mdi-office-building</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About us</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contact us</v-list-item-title>
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
    group: null,
    darkMode: true
  }),
  methods: {
    changeTheme () {
      this.darkMode = !this.darkMode
    }
  },
  watch: {
    darkMode: function () {
      // add/remove class to/from html tag
      const htmlElement = document.documentElement

      if (this.darkMode) {
        localStorage.setItem('theme', 'dark')
        htmlElement.setAttribute('theme', 'dark')
      } else {
        localStorage.setItem('theme', 'light')
        htmlElement.setAttribute('theme', 'light')
      }
    }
  },
  mounted () {
    // check for active theme
    const htmlElement = document.documentElement
    const theme = localStorage.getItem('theme')

    if (theme === 'dark') {
      htmlElement.setAttribute('theme', 'dark')
      this.darkMode = true
    } else {
      htmlElement.setAttribute('theme', 'light')
      this.darkMode = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.nav{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color:white;
  position: absolute;
  width: 100%;
  z-index: 6;
  .nav-menu{
    display: flex;
    align-items: center;
  }
  .fas{
    color: var(--lamp-color);
    cursor: pointer;
  }
  .v-btn--outlined .v-btn__content .v-icon, .v-btn--round .v-btn__content .v-icon{
    color: white !important;
  }
}
.v-navigation-drawer__content{
  background-color: var(--background-color);
}
.v-list--dense{
.v-icon.v-icon{
  color: #f9813a !important;
}
}
.v-list-item{
  margin: 40px 0;
}
.v-list-item__title{
  font-size: 1.2rem !important;
  color: var(--font-color);
}
</style>
