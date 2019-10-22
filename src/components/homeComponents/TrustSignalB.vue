<template>
  <v-container fluid class="fondo">
    <v-container>
      <h2 class="white--text text-center section-title title-size-big pb-4">{{$t('home.trustsignalb.title')}}</h2>
      <p class="white--text text-center pb-8">
        {{$t('home.trustsignalb.text')}}
      </p>

      <swiper :options="swiperOption">
        <swiper-slide>
          <img
          width="100%"
          :src="require('../../assets/img/Nosotros/nosotros1.jpg')"/>
        </swiper-slide>
        <swiper-slide>
          <img
          width="100%"
          :src="require('../../assets/img/Nosotros/nosotros2.jpg')"/>
        </swiper-slide>
        <swiper-slide>
          <img
          width="100%"
          :src="require('../../assets/img/Nosotros/nosotros3.jpg')"/>
        </swiper-slide>
        <swiper-slide>
          <img
          width="100%"
          :src="require('../../assets/img/Nosotros/nosotros4.jpg')"/>
        </swiper-slide>
        <swiper-slide>
          <img
          width="100%"
          :src="require('../../assets/img/Nosotros/nosotros5.jpg')"/>
        </swiper-slide>
        <swiper-slide>
          <img
          width="100%"
          :src="require('../../assets/img/Nosotros/nosotros6.jpg')"/>
        </swiper-slide>
        <swiper-slide>
          <img
          width="100%"
          :src="require('../../assets/img/Nosotros/nosotros7.jpg')"/>
        </swiper-slide>
        <swiper-slide>
          <img
          width="100%"
          :src="require('../../assets/img/Nosotros/nosotros8.jpg')"/>
        </swiper-slide>
        <swiper-slide>
          <img
          width="100%"
          :src="require('../../assets/img/Nosotros/nosotros9.jpg')"/>
        </swiper-slide>
        <swiper-slide>
          <img
          width="100%"
          :src="require('../../assets/img/Nosotros/nosotros10.jpg')"/>
        </swiper-slide>
        <swiper-slide>
          <img
          width="100%"
          :src="require('../../assets/img/Nosotros/nosotros11.jpg')"/>
        </swiper-slide>
        <swiper-slide>
          <img
          width="100%"
          :src="require('../../assets/img/Nosotros/nosotros12.jpg')"/>
        </swiper-slide>
      </swiper>   
    </v-container>
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
            delay: 2000,
            disableOnInteraction: false
          }
        }
      }
    }
}
</script>

<style scoped>
img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

.fondo{
  background-image: linear-gradient(160deg,#e2454c, #640b64);
}

</style>