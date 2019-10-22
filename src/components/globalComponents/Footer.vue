<template>
  <v-footer
    color="transparent"
    padless
  >
    <v-row
      justify="center"
      no-gutters
      class="footer-main"
    >
      

      <v-col cols="12">
        <v-row justify="center" class="pt-1">
          <v-btn
          fab
          outlined
          href="https://www.facebook.com/TasteBTL/"
          target="_blank"
          color="white"
          class="mx-4 social"
          large
          >
            <v-icon size="45px">mdi-facebook</v-icon>
          </v-btn>
          <v-btn
          fab
          outlined
          href="https://mx.linkedin.com/company/taste-btl-&-pr"
          target="_blank"
          color="white"
          class="mx-4 social"
          large
          >
            <v-icon size="45px">mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
          fab
          outlined
          href="https://www.instagram.com/taste_mkt/"
          target="_blank"
          color="white"
          class="mx-4 social"
          large
          >
            <v-icon size="45px">mdi-instagram</v-icon>
          </v-btn>
        </v-row>


      </v-col>

      <v-col
        class=" text-center"
        cols="12"
      >
      
      <v-col cols="12" class="pb-0">
        <v-row justify="center" align="center" class="footer-abajo ">
          
          <v-col cols="12" class="py-0">
            <v-row justify="center">
              <v-col cols="12">
                <hr>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="4" class="py-0 white--text">
            Copyright ® {{ new Date().getFullYear() }} — <strong>Taste Mkt</strong>
          </v-col>
          <v-col cols="12" md="4" class="py-0">
            <v-btn
            target="_blank"
            href="aviso.pdf"
            text
            class="text-none aviso white--text">
              <strong>
                Aviso de privacidad
              </strong>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
  }
</script>

<style scoped>
.footer-abajo{
  /* background-color: #f5f6f6;  */
}
.footer-main{
  /* background-color: #f */
}
.aviso{
  font-size: 16px
}
.v-btn:hover, .v-btn:before{
  /* border: 10px solid red */
  background-color: transparent !important;
}

.social:hover{
  border: none !important;
  background-color: white !important;
  color: #A42859 !important;
}
</style>