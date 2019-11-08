<template>
  <v-container 
  fluid 
  class="py-0" 
  >
    <HomeHeader class="HomeHeader"/>
    <TrustSignalClientes class="TrustSignalClientes"/>
    <Servicios class="pt-12  Servicios"/>
    <!-- <TrustSignalNosotros class="py-12"/> -->
    <Blog class="Blog"/>
    <Mapa class="pb-12"/>
    <!-- <SitemapCTA class="pt-12"/> -->
  </v-container>
</template>

<script>
import HomeHeader from './homeComponents/HomeHeader'
import TrustSignalClientes from './globalComponents/TrustSignalClientes'
import Servicios from './homeComponents/Servicios'
// import TrustSignalNosotros from './homeComponents/TrustSignalNosotros'
import Blog from './homeComponents/Blog'
import Mapa from './homeComponents/Mapa'
// import SitemapCTA from './homeComponents/SitemapCTA'
// import { log } from 'util'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Welcome',
    // override the parent template and just use the above title only
    // titleTemplate: null
  },
  components: {
    HomeHeader,
    TrustSignalClientes,
    Servicios,
    // TrustSignalNosotros,
    Blog,
    Mapa,
    // SitemapCTA
  }
};
</script>

<style lang="scss" >
// Small devices spacing and styling correction
@media only screen and (max-width : 960px){
  .HomeHeader{
    background-image: linear-gradient(160deg,#e2454c, #640b64) !important;
  }
  .TrustSignalClientes{
    margin: 0 !important;

    // h2, .linea-degradada{
    //   display: none !important;
    // }
  }
  .Servicios {
    padding-top: 2em !important;
    background-color: rgb(231, 231, 231);
    .caja-marketing{
      margin-bottom: 0 !important
    }
  }
}

.Blog{
  $paddingY : 6em;
  padding-bottom: $paddingY;
  padding-top: $paddingY;
}

</style>