<template >
  <v-container 
  fluid 
  class="py-0" >
    <DescripcionServ/>
    <TrustSignalClientes class="py-12"/>
    <DescripcionSub/>
    <CTA class="my-12"/>
  </v-container>
</template>

<script>
import DescripcionServ from './primComponents/DescripcionServ'
import DescripcionSub from './primComponents/DescripcionSub'
import CTA from './primComponents/CTA'
import TrustSignalClientes from './globalComponents/TrustSignalClientes'

export default {
  name: 'Prim',
  metaInfo: {
    title: 'PR & IM',
    // override the parent template and just use the above title only
    titleTemplate: null
  },
  components: {
    DescripcionServ,
    DescripcionSub,
    CTA,
    TrustSignalClientes
  }
};
</script>

<style scoped>
</style>