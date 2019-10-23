<template>
  <v-container  fluid class="cta">
    <v-container >

      <v-row class="filly" align="center" justify="center">
      <v-row justify="center">

        <v-col cols="12">
          <h2 class="section-title text-center pt-12">
              Call to Action
          </h2>
        </v-col>


        <v-col cols="10" md="5">
          <p class="text-center white--text texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores minima dolore quos nihil dolorum iste adipisci aut itaque distinctio, animi beatae magni, nobis ut cupiditate debitis in illum est?
          </p>
        </v-col>

        <v-col cols="12">
          <v-row justify="center">
            <v-col cols="2">
              <v-btn class="text-none main-btn-servicio" outlined dark block x-large>
                <v-icon class="fresa" left>$vuetify.icons.fresa</v-icon>
                press
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
  background-color: rgba(208, 21, 43,1);

  background-image: linear-gradient(160deg,rgba(208, 21, 43,1), rgba(208, 21, 43, 0.2)), url('~@/assets/img/animacionFrutas/fresaFondo.png'),;
  // background-image: url('~@/assets/img/animacionFrutas/pear.png') ;
  background-position:  center, center;
  background-size:  auto, 100% auto ;
  background-attachment:scroll;
}
.filly{
  min-height: 100vh;
}
.texto{
  font-size: 1.6em
}

.fresa{
  fill: currentColor
}

</style>