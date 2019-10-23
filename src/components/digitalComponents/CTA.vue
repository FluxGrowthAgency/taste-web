<template>
  <v-container  class="cta">
    <!-- <v-container class="filly"> -->

      <v-row class="filly" align="center" justify="center">

        <v-col cols="12">
          <h2 class="section-title text-center pt-12">
              Call to Action
          </h2>
        </v-col>

        <v-col cols="5">
          <p class="text-center white--text texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores minima dolore quos nihil dolorum iste adipisci aut itaque distinctio, animi beatae magni, nobis ut cupiditate debitis in illum est?
          </p>
        </v-col>

        <v-col cols="12">
          <v-row justify="center">
            <v-col cols="2">
              <v-btn class="text-none" color="black" dark block x-large>
                press
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
.cta{
  min-height: 40vh;
  background-color: #e1c52d;

  background-image: url('~@/assets/img/animacionFrutas/pear.png') ;
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