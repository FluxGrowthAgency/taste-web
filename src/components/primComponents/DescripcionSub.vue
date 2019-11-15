<template>
  <v-container class="mt-5 py-12">

    <h2 class="section-title text-center section-title-degradado title-size-big pb-1">
      {{$t('servicios.prim.midTitle')}} 
    </h2>
    <v-row align="center" justify="center" class="pb-8 ">
      <v-col cols="10" sm="6">
        <hr class="underline">
      </v-col>
    </v-row>

    <swiper :options="swiperOption">
      <swiper-slide :key="index" v-for="(n, index) in 7">
        <v-container class="filly">
          <v-row class="filly" justify="center" align="center">
            <img
            :src="require(`../../assets/img/experiencia/prim/prim${n}.png`)"
            />
          </v-row>
        </v-container>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>   

    <v-row justify="center" class="pt-6">
      <v-col cols="10" md="8">
        <p class="text-center section-mid-text">
          {{$t('servicios.prim.midText')}} 
        </p>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop:true,
        // loopedSlides: 5, //looped slides should be the same
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 20,
        autoplay: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style scoped>
/**Fotos responsive**/
@media only screen and (min-width : 961px){
  img{
    margin-right: auto;
    margin-left: auto;
    max-height: 400px;
    max-width: 400px; 
  }
}
@media only screen and (max-width : 960px){
  img{
    margin-right: auto;
    margin-left: auto;
    max-height: 200px;
    max-width: 300px;
  }
}
.filly{
  /* height: 6em; */
}
</style>