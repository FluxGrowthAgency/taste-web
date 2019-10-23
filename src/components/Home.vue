<template>
  <v-container 
  fluid 
  class="py-0" 
  >
    <HomeHeader class=""/>
    <TrustSignalClientes class="py-12"/>
    <Servicios class="py-12 mb-12"/>
    <TrustSignalNosotros class="py-12"/>
    <Blog class="py-12 mt-10"/>
    <Mapa class="py-12"/>
    <!-- <SitemapCTA class="pt-12"/> -->
  </v-container>
</template>

<script>
import HomeHeader from './homeComponents/HomeHeader'
import TrustSignalClientes from './globalComponents/TrustSignalClientes'
import Servicios from './homeComponents/Servicios'
import TrustSignalNosotros from './homeComponents/TrustSignalNosotros'
import Blog from './homeComponents/Blog'
import Mapa from './homeComponents/Mapa'
// import SitemapCTA from './homeComponents/SitemapCTA'
// import { log } from 'util'

export default {
  components: {
    HomeHeader,
    TrustSignalClientes,
    Servicios,
    TrustSignalNosotros,
    Blog,
    Mapa,
    // SitemapCTA
  }
};
</script>

<style lang="scss" scoped>

</style>