<template>
  <v-container fluid class="header-full filly">
    <v-container >
      <v-row align="center" justify="center" class="filly pt-12">

        <v-col cols="12" md="8" class="">
          <v-img
          max-height="85vh"
          contain
          :src="require('../../assets/img/TasteFruits.png')"/>
        </v-col>

        <v-col cols="10" md="4">
          <v-row align="center" justify="center">

            <v-col class="pb-0 " cols="12">
              <h2 class=" white--text section-title pb-4">{{$t('home.homeheader.formulario.question')}}</h2>
              <p class="white--text mb-0">{{$t('home.homeheader.formulario.sabemos')}}</p>
            </v-col>

            <FormularioTelefono/>

          </v-row>
        </v-col>
        
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import FormularioTelefono from '../globalComponents/FormularioTelefono'

export default {
  components: {
    FormularioTelefono
  }
}
</script>

<style scoped>
.header-full{
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.21) 42%, rgba(255,255,255,0.0) 45%, rgba(255,255,255,0.1) 100%), linear-gradient(180deg,rgba(226, 69, 77,1), rgba(100, 11, 100, 1));
}
.filly{
  min-height: 100vh;
}
.fill-available{
  height: 100%;
}
/* Para que se mantenga en una linea en laptop */
h2{
  font-size: 2.9em !important
}
.section-title{
  /* font-size: 3em !important */
}
</style>