<template>
  <v-container fluid class="header-full paddingY">
    <v-row >
      <v-col cols="12">
        <v-row justify="center"> 
          <v-icon size="180" dark>
            mdi-alert-circle-outline
          </v-icon>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row justify="center"> 
          <v-col>
            <h2 class="text-center title-size-big section-title white--text">
              {{$t('error.title')}}
            </h2>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="12" sm="5">
            <p class="text-center white--text text-size">
              {{$t('error.text')}}
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="4" class="text-center">
            <v-btn
            outlined dark
            to="/" class="text-center text-none">
              {{$t('error.btn')}}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Page Not Found',
  metaInfo: {
    title: 'Page Not Found',
    // override the parent template and just use the above title only
    // titleTemplate: null
  }
};
</script>

<style scoped lang="scss">
$paddingY:8em;

.header-full{
  background-image: linear-gradient(160deg,#e2454c, #640b64);
  height: 100vh
}
.paddingY{
  padding-top: $paddingY;
  // padding-bottom: $paddingY
}
.text-size{
  font-size: 2em
}
/* BOTON HOVER ENVIAR*/
.v-btn:hover{
    background-color: transparent !important;
    opacity: 1;
    background-image: linear-gradient(160deg,#fff, #fff);
    color: #e2454c !important;
    border: none !important;
    font-weight: 900 !important;  
}
</style>