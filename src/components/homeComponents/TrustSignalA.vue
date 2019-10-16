<template>
  <v-container class="my-12">

    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" :key="slide">
        <swiper-slide>
        <img
        width="100%"
        :src="require('../../assets/img/no-available.png')"/>
      </swiper-slide>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
    </swiper>   

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
          loopedSlides: 5, //looped slides should be the same
          slidesPerView: 3,
          centeredSlides: true,
          spaceBetween: 30,
          autoplay: {
            delay: 1000,
            disableOnInteraction: false
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5, 6]
      }
    }
}
</script>

<style scoped>

</style>