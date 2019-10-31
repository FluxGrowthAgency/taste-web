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
import DescripcionServ from './digitalComponents/DescripcionServ'
import DescripcionSub from './digitalComponents/DescripcionSub'
import CTA from './digitalComponents/CTA'
import TrustSignalClientes from './globalComponents/TrustSignalClientes'

export default {
  name: 'Digital',
  metaInfo: {
    title: 'Digital',
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