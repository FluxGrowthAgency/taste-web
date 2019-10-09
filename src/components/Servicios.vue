<template>
  <v-container>
    <DescripcionServ/>
    <DescripcionSub/>
    <CTA/>
    <TrustSignal/>
    <SitemapCTA/>
  </v-container>
</template>

<script>
import DescripcionServ from './serviciosComponents/DescripcionServ'
import DescripcionSub from './serviciosComponents/DescripcionSub'
import CTA from './serviciosComponents/CTA'
import TrustSignal from './serviciosComponents/TrustSignal'
import SitemapCTA from './serviciosComponents/SitemapCTA'

export default {
  components: {
    DescripcionServ,
    DescripcionSub,
    CTA,
    TrustSignal,
    SitemapCTA
  }
};
</script>

<style>

</style>