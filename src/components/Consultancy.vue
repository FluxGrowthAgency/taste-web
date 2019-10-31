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
import DescripcionServ from './consultancyComponents/DescripcionServ'
import DescripcionSub from './consultancyComponents/DescripcionSub'
import CTA from './consultancyComponents/CTA'
import TrustSignalClientes from './globalComponents/TrustSignalClientes'

export default {
  name: 'Consultancy',
  metaInfo: {
    title: 'Consultancy',
    // override the parent template and just use the above title only
    // titleTemplate: null
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