<template>
  <v-container  class="cta">
    <!-- <v-container class="filly"> -->

      <v-row class="filly" align="center" justify="center">

        <v-col cols="12">
          <h2 class="section-title text-center pt-12">
            {{$t('servicios.prim.ctaTit')}} 
          </h2>
        </v-col>

        <v-col cols="12" md="5">
          <p class="text-center white--text texto">
            {{$t('servicios.prim.ctaText')}} 
          </p>
        </v-col>

        <v-col cols="12">
          <v-row justify="center">
            <v-col cols="5" md="2">
              <v-btn class="text-none main-btn-servicio" outlined dark block x-large>
                {{$t('servicios.prim.ctaBtn')}} 
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

// .cta{
//   min-height: 50vh;
//   background-color: rgba(1255, 132, 0,1);

//   background-image: url('~@/assets/img/animacionFrutas/naranja.png') ;
//   background-position: 97% center, 0% 75%;
//   background-size:  auto 80% , auto 101%;
//   background-attachment:scroll, scroll
// }
.cta{
  background-color: rgba(255, 132, 0,1);

  background-image:linear-gradient(160deg,rgba(255, 132, 0, 1), rgba(255, 132, 0, 0.3)), url('~@/assets/img/animacionFrutas/naranjaFondo.png'),;
  // background-image: url('~@/assets/img/animacionFrutas/pear.png') ;
  background-position:center, center;
  background-size: auto, cover;
  background-attachment:scroll;
}
.section-title{
  color: #603200 !important
}
.filly{
  height: 40vh;
}
.texto{
  font-size: 1em
}

</style>