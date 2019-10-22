<template>
  <v-container class="mt-5">

    <swiper :options="swiperOption">
      
      <swiper-slide :key="index" v-for="(n, index) in 27">
        <v-container class="filly">
          <v-row class="filly" justify="center" align="center">
            <img
            :src="require(`../../assets/img/Clientes/clientes${n}.png`)"
            />
          </v-row>
        </v-container>
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
        loop:true,
        loopedSlides: 5, //looped slides should be the same
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 10,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
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
    max-height: 100px;
    max-width: 200px;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
}
@media only screen and (max-width : 960px){
  img{
    margin-right: auto;
    margin-left: auto;
    max-height: 100px;
    max-width: 70px;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
}
.filly{
  height: 6em;
}
</style>