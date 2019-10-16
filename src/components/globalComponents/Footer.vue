<template>
  <v-footer
    color="#f5f6f6"
    padless
  >
    <v-row
      justify="center"
      no-gutters
      class="footer-main"
    >
      <v-btn
        color="#e2454c"
        class="mx-4"
        icon
      >
        <v-icon size="24px">mdi-facebook</v-icon>
      </v-btn>
      <v-btn
        class="mx-4 black--text"
        icon
      >
        <v-icon size="24px">mdi-linkedin</v-icon>
      </v-btn>
      <v-btn
      color="#e2454c"
        class="mx-4 "
        icon
      >
        <v-icon size="24px">mdi-instagram</v-icon>
      </v-btn>
      <v-col
        class=" text-center"
        cols="12"
      >
        <v-row justify="center" align="center" class="footer-abajo py-3">
          <v-col cols="12" md="3" class="py-0">
            Copyright ® {{ new Date().getFullYear() }} — <strong>Taste Mkt</strong>
          </v-col>
          <v-col cols="12" md="3" class="py-0">
            <v-btn
            text
            class="text-none aviso">
              <strong>
                Aviso de privacidad
              </strong>
            </v-btn>
          </v-col>
        </v-row>
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
  background-color: #f5f6f6;
}
.footer-main{
  background-color: #fafbfb
}
.aviso{
  font-size: 16px
}
</style>