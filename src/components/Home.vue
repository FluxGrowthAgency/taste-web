<template>
  <v-container fluid>
    <HomeHeader/>
    <TrustSignalA/>
    <Servicios/>
    <TrustSignalB/>
    <Blog/>
    <Mapa/>
    <SitemapCTA/>
  </v-container>
</template>

<script>
import HomeHeader from './homeComponents/HomeHeader'
import TrustSignalA from './homeComponents/TrustSignalA'
import Servicios from './homeComponents/Servicios'
import TrustSignalB from './homeComponents/TrustSignalB'
import Blog from './homeComponents/Blog'
import Mapa from './homeComponents/Mapa'
import SitemapCTA from './homeComponents/SitemapCTA'

export default {
  components: {
    HomeHeader,
    TrustSignalA,
    Servicios,
    TrustSignalB,
    Blog,
    Mapa,
    SitemapCTA
  }
};
</script>

<style>

</style>