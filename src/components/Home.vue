<template>
  <v-container 
  fluid 
  class="py-0" 
  >
    <HomeHeader class=""/>
    <TrustSignalA class="py-12"/>
    <Servicios class="py-12 mb-12"/>
    <TrustSignalB class="py-12"/>
    <Blog class="py-12 mt-10"/>
    <Mapa class="py-12"/>
    <!-- <SitemapCTA class="pt-12"/> -->
  </v-container>
</template>

<script>
import HomeHeader from './homeComponents/HomeHeader'
import TrustSignalA from './homeComponents/TrustSignalA'
import Servicios from './homeComponents/Servicios'
import TrustSignalB from './homeComponents/TrustSignalB'
import Blog from './homeComponents/Blog'
import Mapa from './homeComponents/Mapa'
// import SitemapCTA from './homeComponents/SitemapCTA'
// import { log } from 'util'

export default {
  components: {
    HomeHeader,
    TrustSignalA,
    Servicios,
    TrustSignalB,
    Blog,
    Mapa,
    // SitemapCTA
  }
};
</script>

<style lang="scss" scoped>

</style>