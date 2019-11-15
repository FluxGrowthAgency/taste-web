<template>
  <v-container fluid class="pb-0">
    <v-container fluid id="fondo" >
      <v-container >
        <v-row align="start" class="pt-0">
          <!-- <v-col cols="12">
            <h2 class="white--text section-title text-center pb-8">
              {{$t('home.sitemapcta.creative')}} 
            </h2>

          </v-col> -->
          <v-col cols="12" md="6">
            <v-row justify="center">
              <v-col cols="11"  >

                <!-- <v-row class="pb-3" no-gutters>
                    <v-col cols="6" >
                        <v-btn to="/" text x-large class="text-none sitemap" color="#fff">
                            <v-icon  left>mdi-home</v-icon> {{$t('home.sitemapcta.botones.inicio')}} 
                        </v-btn>
                    </v-col> 
                    <v-col cols="6"  >
                        <v-btn href="http://taste-mkt.com/blog" target="_blank" text x-large class="text-none sitemap" color="#fff">
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
                </v-row>    -->

                
                <FormularioCurriculum class="pb-3"/>

                <v-col>
                  <v-row class="pb-0 px-2" >
                     <v-col cols="12" class="py-0 px-5">

                      <v-row>
                        <v-col cols="2">
                          <v-icon color="#fff">mdi-email-outline</v-icon>
                        </v-col >
                        <v-col cols="10" class="pl-0">
                          <p class="white--text mb-0 direccion">
                            contacto@taste-mkt.com
                          </p>
                        </v-col>
                      </v-row>

                    </v-col>

                    <!-- <v-col cols="12">
                      <h2 class="white--text section-title oficinas">
                        {{$t('home.sitemapcta.oficinas.title')}}
                      </h2>
                    </v-col> -->
                    <v-col cols="12" class="py-0 px-5">

                      <v-row>
                        <v-col cols="2">
                          <v-icon color="#fff">mdi-map</v-icon>
                        </v-col >
                        <v-col cols="10" class="pl-0">
                          
                          <p class="white--text mb-0 direccion">
                            Bogotá 2647, Col. Providencia, CP 44630, Guadalajara, Tel. +52 (33) 3817-3029
                          </p>
                        </v-col>
                      </v-row>

                    </v-col>
                    <v-col  cols="12" class="py-0 px-5">
                      <v-row>
                        <v-col cols="2">
                          <v-icon color="#fff">mdi-map</v-icon>
                        </v-col >
                        <v-col cols="10" class="pl-0">
                          <p class="white--text mb-0 direccion">
                            Descartes 60, Col. Anzures, CP 11590, Ciudad de México, Tel. +52 (55) 8525-0879
                          </p>    
                        </v-col>
                      </v-row>
                                        
                    </v-col>       
                    <v-col  cols="12" class="py-0 px-5">
                      <v-row >
                        <v-col cols="2">
                          <v-icon color="#fff">mdi-map</v-icon>
                        </v-col >
                        <v-col cols="10" class="pl-0">
                          <p class="white--text mb-0 direccion">
                            Blvd. Antonio L. Rodríguez 1888, Santa María, CP 64650, Monterrey, Tel. +52 (33) 3817-3029
                          </p>    
                        </v-col>
                      </v-row>
                                         
                    </v-col>       


                  </v-row>  
                </v-col>

              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6" id="formulario" class="pb-0">
            <v-row justify="center" >
              <v-col cols="11" class="py-0">
                <FormularioContacto class="pb-0"/>

              </v-col>
            </v-row>
          </v-col>

          <!-- <v-col cols="12" class="oficinas-container pb-8 pt-0 px-12">
            <v-row class="pb-4" >
              <v-col cols="6" md="4"  class="py-0">

                <v-row>
                  <v-col cols="2">
                    <v-icon color="#fff">mdi-map</v-icon>
                  </v-col >
                  <v-col cols="10">
                    <p class="white--text mb-0">
                      Bogotá 2647<br>
                      Col. Providencia<br>
                      CP 44630, Guadalajara
                    </p>
                  </v-col>
                </v-row>

              </v-col>
              <v-col  cols="6" md="4" class="py-0">
                <v-row>
                  <v-col cols="2">
                    <v-icon color="#fff">mdi-map</v-icon>
                  </v-col >
                  <v-col cols="10">
                    <p class="white--text mb-0">
                      Descartes 60<br>
                      Col. Anzures<br>
                      CP 11590, Ciudad de México
                    </p>    
                  </v-col>
                </v-row>
                                  
              </v-col>       
              <v-col  cols="6" md="4"  class="py-0">
                <v-row >
                  <v-col cols="2">
                    <v-icon color="#fff">mdi-map</v-icon>
                  </v-col >
                  <v-col cols="10">
                    <p class="white--text mb-0">
                      Blvd. Antonio L. Rodríguez 1888<br>
                      Santa María<br>
                      CP 64650, Monterrey
                    </p>    
                  </v-col>
                </v-row>
                                    
              </v-col>       


            </v-row>  
          </v-col> -->
        </v-row>
        <Footer class=""/>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import Footer from './FooterB'
import FormularioContacto from './FormularioContactoB'
import FormularioCurriculum from './FormularioCurriculum'
// import Mapa from './Mapa'
// import Blog from '../homeComponents/Blog'

export default {
  components: {
    FormularioContacto,
    FormularioCurriculum,
    Footer,
    // Mapa,
    // Blog
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
.oficinas{
  font-size: 2em
}
.direccion{
  line-height: 1.3em
}
</style>