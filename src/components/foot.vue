<template>
  <v-footer
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <h3>Contact us :</h3> <div class="info-group"><i class="fas fa-envelope"></i> Company@mail.com</div> <div class="info-group"><i class="fas fa-phone"></i> 00962700000000 </div>
        <h3>Find us:</h3> <div class="info-group"><i class="fas fa-map-marker-alt"></i> Jordan,Amman </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Company</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.fas{
  color: #f9813a;
}
.v-sheet.v-card:not(.v-sheet--outlined){
  width: 100%;
}
.theme--light.v-card>.v-card__text {
    background-color: #1a1c20;
    color: white;
    padding:20px 5%;
}
.theme--light.v-btn.v-btn--icon{
        color: white !important;
    }
    .pt-0{
      font-size: 1.3rem !important;
      display: flex;
      justify-content: center;
      .info-group{
        margin: 0 40px;
      }
    }
    .white--text{
      font-size: 1.1rem;
    }
</style>
