<template>
  <v-container  class="cta">
    <!-- <v-container class="filly"> -->

      <v-row class="filly" align="center" justify="center">

        <v-col cols="12">
          <h2 class="section-title text-center pt-12">
              {{$t('servicios.consultancy.ctaTit')}} 
          </h2>
        </v-col>

        <v-col cols="12" md="5">
          <p class="text-center white--text texto">
              {{$t('servicios.consultancy.ctaText')}} 
          </p>
        </v-col>

        <v-col cols="12">
          <v-row justify="center">
            <v-col cols="5" md="2">
              <v-btn class="text-none" color="black" dark block x-large>
                {{$t('servicios.consultancy.ctaBtn')}} 
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

      </v-row>

    <!-- </v-container> -->
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@media only screen and (max-width : 960px){
  .filly{
    min-height: 80vh;
  }
}
.cta{
  min-height: 50vh;
  background-color: #fda23c;

  background-image: url('~@/assets/img/animacionFrutas/pina.png') ;
  background-position: 97% center, 0% 75%;
  background-size:  auto 90% , auto 101%;
  background-attachment:scroll, scroll
}
.filly{
  height: 40vh;
}
.texto{
  font-size: 1em
}

</style>