<template>
  <v-container>
    <h2 class=" text-center section-title pb-6">{{$t('home.trustsignalb.title')}}</h2>

    <swiper :options="swiperOption">
      <swiper-slide>
        <img
        width="100%"
        :src="require('../../assets/img/no-available.png')"/>
      </swiper-slide>
      <swiper-slide>
        <img
        width="100%"
        :src="require('../../assets/img/no-available.png')"/>
      </swiper-slide>
      <swiper-slide>
        <img
        width="100%"
        :src="require('../../assets/img/no-available.png')"/>
      </swiper-slide>
      <swiper-slide>
        <img
        width="100%"
        :src="require('../../assets/img/no-available.png')"/>
      </swiper-slide>
      <swiper-slide>
        <img
        width="100%"
        :src="require('../../assets/img/no-available.png')"/>
      </swiper-slide>
      <swiper-slide>
        <img
        width="100%"
        :src="require('../../assets/img/no-available.png')"/>
      </swiper-slide>
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
          updateOnImagesReady:false,
          slidesPerView: 3,
          loop:true,
          spaceBetween: 30,
          slidesPerGroup: 3,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false
          }
        }
      }
    }
}
</script>

<style>

</style>