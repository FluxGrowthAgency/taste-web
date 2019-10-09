<template>
  <v-container>
    <ArticulosDestacados/>
    <CallToActionA/>
    <ArticulosRecientes/>
    <CallToActionB/>
    <TrustSignal/>
    <SitemapCTA/>
  </v-container>
</template>

<script>
import ArticulosDestacados from './blogComponents/ArticulosDestacados'
import CallToActionA from './blogComponents/CallToActionA'
import ArticulosRecientes from './blogComponents/ArticulosRecientes'
import CallToActionB from './blogComponents/CallToActionB'
import TrustSignal from './blogComponents/TrustSignal'
import SitemapCTA from './blogComponents/SitemapCTA'

export default {
  components: {
    ArticulosDestacados,
    CallToActionA,
    ArticulosRecientes,
    CallToActionB,
    TrustSignal,
    SitemapCTA
  }
};
</script>

<style>

</style>