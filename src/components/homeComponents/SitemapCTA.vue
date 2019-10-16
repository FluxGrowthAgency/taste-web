<template>
  <v-container fluid id="fondo" >
    <v-container >
      <v-row align="center">
        <v-col cols="12" md="6">
          <h2 class="section-title">
            {{$t('home.sitemapcta.creative')}} 
          </h2>
          <v-row class="my-9 bck-green" no-gutters>
              <v-col cols="6"  >
                  <v-btn href="#inicio" text x-large class="" color="#640b64">
                      <v-icon  left>mdi-home</v-icon> {{$t('home.sitemapcta.botones.inicio')}} 
                  </v-btn>
              </v-col> 
              <v-col cols="6"  >
                  <v-btn href="#inicio" text x-large class="" color="#640b64">
                      <v-icon  left>mdi-home</v-icon> {{$t('home.sitemapcta.botones.inicio')}} 
                  </v-btn>
              </v-col>  
              <v-col cols="6"  >
                  <v-btn href="#inicio" text x-large class="" color="#640b64">
                      <v-icon  left>mdi-home</v-icon> {{$t('home.sitemapcta.botones.inicio')}} 
                  </v-btn>
              </v-col>  
              <v-col cols="6"  >
                  <v-btn href="#inicio" text x-large class="" color="#640b64">
                      <v-icon  left>mdi-home</v-icon> {{$t('home.sitemapcta.botones.inicio')}} 
                  </v-btn>
              </v-col>  
              <v-col cols="6"  >
                  <v-btn href="#inicio" text x-large class="" color="#640b64">
                      <v-icon  left>mdi-home</v-icon> {{$t('home.sitemapcta.botones.inicio')}} 
                  </v-btn>
              </v-col>  
              <v-col cols="6"  >
                  <v-btn href="#inicio" text x-large class="" color="#640b64">
                      <v-icon  left>mdi-home</v-icon> {{$t('home.sitemapcta.botones.inicio')}} 
                  </v-btn>
              </v-col>                      
          </v-row>        
          <p>
            {{$t('home.sitemapcta.bolsa')}}<br>
            {{$t('home.sitemapcta.correocontacto')}}
          </p>
        </v-col>
        <v-col cols="12" md="6" id="formulario">
          <v-row justify="center">
            <v-col cols="9">
              <Formulario2/>

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Formulario2 from './Formulario2'
export default {
  components: {
    Formulario2
  }
}
</script>

<style scoped>
#fondo{
  background-image: linear-gradient(160deg,#e2454c, #640b64);
}
</style>