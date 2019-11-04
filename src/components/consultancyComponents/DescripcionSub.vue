<template>
  <v-container class="mt-5 py-12">

    <h2 class="section-title text-center section-title-degradado title-size-big pb-1">
      {{$t('servicios.consultancy.midTitle')}} 
    </h2>
    <v-row align="center" justify="center" class="pb-8 ">
      <v-col cols="10" sm="6">
        <hr class="underline">
      </v-col>
    </v-row>

    <swiper :options="swiperOption">
      <swiper-slide :key="index" v-for="(n, index) in 5">
        <img
          width="100%"
          :src="require('../../assets/img/no-available.png')"/>
      </swiper-slide>
      <div class="swiper-button-prev " slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>   

    <v-row justify="center" class="pt-6">
      <v-col cols="10" md="8">
        <p class="text-center section-mid-text">
          {{$t('servicios.consultancy.midText')}} 
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
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 10,
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
    /* margin-right: auto;
    margin-left: auto;
    max-height: 100px;
    max-width: 200px; */
    /* -webkit-filter: grayscale(100%); Safari 6.0 - 9.0 */
    /* filter: grayscale(100%); */
  }
}
@media only screen and (max-width : 960px){
  img{
    /* margin-right: auto;
    margin-left: auto;
    max-height: 100px;
    max-width: 70px; */
    /* -webkit-filter: grayscale(100%); Safari 6.0 - 9.0 */
    /* filter: grayscale(100%); */
  }
}
.filly{
  height: 6em;
}
</style>