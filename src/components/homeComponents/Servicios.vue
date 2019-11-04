<template>
  <v-container>
    <v-row v-if="$vuetify.breakpoint.mdAndUp" align="center" class="" >
      <v-col cols="12" md="6">
        <v-row no-gutters>
          <v-col cols="12" >
            <v-row >
              <v-col  cols="6" >
                <v-card hover :img="require('../../assets/img/servicios/pear.jpg')" class="consultancy" to="/consultancy" color="transparent" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 class="titulos-servicios">
                        {{$t('home.servicios.consultancy')}} 
                      </h2>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
              <v-col cols="6" >
                <v-card hover :img="require('../../assets/img/servicios/cherry.jpg')" color="transparent" class="btl" to="/btl" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 class="titulos-servicios">
                        {{$t('home.servicios.btl')}} 
                      </h2>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12" >
            <v-row>
              <v-col  cols="6" >
                <v-card hover :img="require('../../assets/img/servicios/fresa.jpg')" color="transparent"  class="digital" to="/digital" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 class="titulos-servicios">
                        {{$t('home.servicios.digital')}} 
                      </h2>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
              <v-col  cols="6" >
                <v-card hover :img="require('../../assets/img/servicios/naranja.jpg')" color="transparent" class="pr"  to="/prim" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 class="titulos-servicios">
                        {{$t('home.servicios.prim')}} 
                      </h2>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </v-col>
      <v-col cols="12" md="6" class="pl-12 text-center">
        <h2 class="mb-1 section-title section-title-degradado title-size-big text-center markenting">
          {{$t('home.servicios.marketing')}} 
        </h2>
        <v-row align="center" justify="center" class="pb-6 ">
          <v-col cols="10" md="8">
            <hr class="underline">
          </v-col>
        </v-row>
        <p >
          {{$t('home.servicios.text')}}
        </p>
        <v-btn 
        class="text-none"
        color="white"
        x-large
        text
        @click="dialog = !dialog">
            {{$t('home.servicios.trabajemos')}} 
        </v-btn>
      </v-col>
    </v-row>

    <v-row v-if="$vuetify.breakpoint.smAndDown" align="center" class="text-center" >
      <v-col cols="12" md="6" class="mb-8 caja-marketing">
        <h2 class="mb-4 section-title section-title-degradado title-size-big text-center">
          {{$t('home.servicios.marketing')}} 
        </h2>
        <v-row align="center" justify="center" class="pb-8 ">
          <v-col cols="10" md="6">
            <hr class="underline">
          </v-col>
        </v-row>
        <p >
          {{$t('home.servicios.text')}}
        </p>
        <v-btn 
        class="text-none"
        color="white"
        text
        @click="dialog = !dialog">
            {{$t('home.servicios.trabajemos')}} 
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-row no-gutters>
          <v-col cols="12" >
            <v-row >
              <v-col  cols="6" >
                <v-card hover :img="require('../../assets/img/servicios/pear.jpg')" class="consultancy" to="/consultancy" color="transparent" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 class="titulos-servicios">
                        {{$t('home.servicios.consultancy')}} 
                      </h2>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
              <v-col cols="6" >
                <v-card hover :img="require('../../assets/img/servicios/cherry.jpg')" color="transparent" class="btl" to="/btl" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 class="titulos-servicios">
                        {{$t('home.servicios.btl')}} 
                      </h2>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12" >
            <v-row>
              <v-col  cols="6" >
                <v-card hover :img="require('../../assets/img/servicios/fresa.jpg')" color="transparent"  class="digital" to="/digital" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 class="titulos-servicios">
                        {{$t('home.servicios.digital')}} 
                      </h2>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
              <v-col  cols="6" >
                <v-card hover :img="require('../../assets/img/servicios/naranja.jpg')" color="transparent" class="pr"  to="/prim" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 class="titulos-servicios">
                        {{$t('home.servicios.prim')}} 
                      </h2>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </v-col>
    </v-row>

    <v-dialog
    v-model="dialog"
    width="500"
    scrollable
    >
      <v-container id="fondo-form" >
        <v-row justify="center" >
          <v-col cols="10" >
          <FormularioContacto/>
          </v-col>
        </v-row>
      </v-container>
    </v-dialog>

  </v-container>
</template>

<script>
import FormularioContacto from '../globalComponents/FormularioContacto'
export default {
  components:{
    FormularioContacto
  },
  data(){
    return{
      dialog:false
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
.servicio{
  height: 15em;
}
#fondo-form{
  background-image: linear-gradient(160deg,#e2454c, #640b64);
  border: 0.2em solid white
}

/* BOTON ACTIVO AL NATURAL / BOTON NATURAL HOVER*/ 
.v-btn--active:before, .v-btn:hover:before {
  @include btn-select(); 
}
/* BOTON ACTIVO CLICK / BOTON PREV */
.v-btn--active:focus:before, .v-btn:before{
  @include btn-reset();
}
/* BOTON HOVER */
.v-btn:hover{
  @include btn-hover();
}

//TITULO
.titulos-servicios{
  color: #fff;
  font-weight: 700;
  font-size: 1.3em;
  font-family: "Flama Extra Bold"
}

//CARDS
.v-card:hover h2{
  border-bottom: 0.17em solid #fff ;
  // -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  // filter: grayscale(100%);
  font-size: 1.6em;
  font-weight: 700;
  color: #fff !important;
}
.v-card:hover{
  font-family: 'Flama Black'!important;
  // transform: scale(1.00);
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}
.v-card{
  -webkit-filter: grayscale(35%); /* Safari 6.0 - 9.0 */
  filter: grayscale(35%);
}

.title-size{
  font-size: 2.2em !important
}
.markenting{
  font-size: 3em !important;
}
</style>