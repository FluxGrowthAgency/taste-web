<template>
  <v-container  fluid class="cta">
    <v-container >

      <v-row class="filly" align="center" justify="center">
      <v-row justify="center">

        <v-col cols="12">
          <h2 class="section-title text-center pt-12">
            {{$t('servicios.prim.tituloHeader')}} 
          </h2>
        </v-col>


        <v-col cols="10" md="5" >
          <p class="text-center white--text texto">
            {{$t('servicios.prim.textoHeader')}} 
          </p>
        </v-col>
        <v-col cols="12">
          <v-row justify="center">
            <v-col cols="5" md="2">
              <v-btn class="text-none main-btn-servicio" outlined dark block x-large>
                <v-icon  left>mdi-fruit-watermelon</v-icon>
                {{$t('servicios.prim.btnHeader')}} 
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

      </v-row>

      </v-row>

    </v-container>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.cta{
  min-height: 100vh;
  background-color: rgba(1255, 132, 0,1);

  background-image:linear-gradient(160deg,rgba(255, 132, 0, 1), rgba(255, 132, 0, 0.3)), url('~@/assets/img/animacionFrutas/naranjaFondo.png'),;
  // background-image: url('~@/assets/img/animacionFrutas/pear.png') ;
  background-position:center, center;
  background-size: auto, cover;
  background-attachment:scroll;
}
.filly{
  min-height: 100vh;
}
.texto{
  font-size: 1.6em
}
</style>