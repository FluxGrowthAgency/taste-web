<template>
  <v-container>
    <v-row align="center" class="text-center" no-gutters>
      <v-col cols="12" md="6">
        <v-row no-gutters>
          <v-col cols="12" >
            <v-row >
              <v-col cols="6" >
                <v-card color="#e9f2eb" to="/servicios" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 >
                        {{$t('home.servicios.consultancy')}} 
                      </h2>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
              <v-col cols="6" >
                <v-card color="#e9f2eb" to="/servicios" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 >
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
              <v-col cols="6" >
                <v-card color="#e9f2eb" to="/servicios" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 >
                        {{$t('home.servicios.digital')}} 
                      </h2>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
              <v-col cols="6" >
                <v-card color="#e9f2eb" to="/servicios" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 >
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
      <v-col cols="12" md="6" class="">
        <h2 class="mb-4 section-title">
          {{$t('home.servicios.marketing')}} 
        </h2>
        <v-btn 
        class="text-none"
        :color="btnColor"
        text
        @click="dialog = !dialog">
            {{$t('home.servicios.trabajemos')}} 
        </v-btn>
      </v-col>
    </v-row>

    <v-dialog
    v-model="dialog"
    width="500"
    scrollable
    >
      <v-container id="fondo-form">
        <v-row justify="center">
          <v-col cols="10">
          <Formulario2/>
          </v-col>
        </v-row>
      </v-container>
    </v-dialog>

  </v-container>
</template>

<script>
import Formulario2 from './Formulario2'
export default {
  components:{
    Formulario2
  },
  data(){
    return{
      dialog:false,
      btnColor: "#fff",
    }
  }

}
</script>

<style lang="scss" scoped>
@mixin menu-button-reset(){
  background-color: transparent !important;
  border-radius: 0.5em;
  // border: 2px solid black;
  opacity: 1;

  background-image: linear-gradient(160deg,#e2454c, #640b64);

}
@mixin menu-button-select(){
  border-radius: 0 !important;
  border-radius: 0.5em !important;
  opacity: 1 !important;
  background-image: none;
  border: 2px solid #e2454c;
  color: #e2454c !important;
  font-weight: 900 !important;
}

.servicio{
  height: 15em;
}
#fondo-form{
  background-color: white
}

/* BOTON ACTIVO AL NATURAL / BOTON NATURAL HOVER*/ 
.v-btn--active:before, .v-btn:hover:before {
  @include menu-button-select(); 
}
/* BOTON ACTIVO CLICK / BOTON PREV */
.v-btn--active:focus:before, .v-btn:before{
  @include menu-button-reset();
}
/* BOTON HOVER */
.v-btn:hover{
  color: #e2454c !important;
  font-weight: 900 !important;
}

</style>