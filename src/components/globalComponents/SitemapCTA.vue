<template>
  <v-container fluid id="fondo" >
    <v-container >
      <v-row align="start" class="pt-12">
        <v-col cols="12" md="6">
          <v-row justify="center">
            <v-col cols="11">

              <h2 class="white--text section-title">
                {{$t('home.sitemapcta.creative')}} 
              </h2>
              <v-row class="my-9" no-gutters>
                  <v-col cols="6" >
                      <v-btn to="/" text x-large class="text-none sitemap" color="#fff">
                          <v-icon  left>mdi-home</v-icon> {{$t('home.sitemapcta.botones.inicio')}} 
                      </v-btn>
                  </v-col> 
                  <v-col cols="6"  >
                      <v-btn to="/blog" text x-large class="text-none sitemap" color="#fff">
                          <v-icon  left>mdi-newspaper-variant-outline</v-icon> {{$t('home.sitemapcta.botones.blog')}} 
                      </v-btn>
                  </v-col>  
                  <v-col cols="6"  >
                      <v-btn to="/consultancy" text x-large class="text-none sitemap" color="#fff">
                      <v-icon class="pera"  left>$vuetify.icons.pera</v-icon> 
                        {{$t('home.sitemapcta.botones.consultancy')}} 
                      </v-btn>
                  </v-col>  
                  <v-col cols="6"  >
                      <v-btn to="/btl" text x-large class="text-none sitemap" color="#fff">
                          <v-icon  left>mdi-fruit-cherries</v-icon> {{$t('home.sitemapcta.botones.btl')}} 
                      </v-btn>
                  </v-col>                      
                  <v-col cols="6" >
                      <v-btn to="/digital" text x-large class="text-none sitemap" color="#fff">
                          
                          <v-icon class="fresa" left>$vuetify.icons.fresa</v-icon>{{$t('home.sitemapcta.botones.digital')}} 
                      </v-btn>
                  </v-col>  
                  <v-col cols="6"  >
                      <v-btn to="/prim"  text x-large class="text-none sitemap" color="#fff">
                          <v-icon  left>mdi-fruit-watermelon</v-icon> {{$t('home.sitemapcta.botones.pr&im')}} 
                      </v-btn>
                  </v-col>  
              </v-row>     
              <v-col>
                <p class="mb-0 white--text">
                  {{$t('home.sitemapcta.bolsa')}}<br>
                  {{$t('home.sitemapcta.enviacv')}}<br>
                  <!-- {{$t('home.sitemapcta.correocontacto')}} -->
                </p>            
              </v-col>   
              <v-col cols=6>

                <v-file-input
                label="Subir C.V."
                dense
                outlined
                
                dark
                prepend-icon=""/>
                <v-btn dark outlined class="enviar text-none">enviar</v-btn>
              </v-col>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" id="formulario">
          <v-row justify="center">
            <v-col cols="11" class="pt-0">
              <FormularioContacto/>

            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <Footer/>
    </v-container>
  </v-container>
</template>

<script>
import Footer from './Footer'
import FormularioContacto from './FormularioContacto'
export default {
  components: {
    FormularioContacto,
    Footer
  }
}
</script>

<style lang="scss" scoped>
#fondo{
  background-image: linear-gradient(160deg,#e2454c, #640b64);
}
/* BOTON HOVER ENVIAR*/
.enviar:hover{
    background-color: transparent !important;
    opacity: 1;
    background-image: linear-gradient(160deg,#fff, #fff);
    color: #e2454c !important;
    border: none !important;
    font-weight: 900 !important;  
}
/* BOTON ACTIVO AL NATURAL / BOTON NATURAL HOVER*/ 
.sitemap:before, .sitemap:hover:before {
  border-radius: 0 !important;
  opacity: 1 !important
}
/* BOTON ACTIVO CLICK / BOTON PREV */
.sitemap:focus:before, .sitemap:before{
  background-color: transparent !important;
}
/* BOTON HOVER */
.sitemap:hover{
  border-radius: 0 !important;
  color: #fff!important;
  border-bottom: 0.2em solid #fff;
  font-weight: 900 !important;    
}
.pera, .fresa{
  fill: currentColor
}
</style>