<template>
  <v-container  class="cta">

    <v-row class="filly" align="center" justify="center">

      <v-col cols="10" md="8">
        <h2 class="section-title text-center pt-6">
            {{$t('servicios.consultancy.ctaTit')}} 
        </h2>
      </v-col>

      <!-- <v-col cols="10" md="5">
        <p class="text-center white--text texto">
            {{$t('servicios.consultancy.ctaText')}} 
        </p>
      </v-col> -->

      <v-col cols="10">
        <v-row justify="center">
          <v-col cols="9" sm="6" md="4">
            <v-btn 
            @click="dialog = !dialog" 
            class="text-none main-btn-servicio" 
            outlined 
            dark 
            block 
            x-large>
              {{$t('servicios.consultancy.ctaBtn')}} 
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

    </v-row>

    <v-dialog
    v-model="dialog"
    width="500"
    >
      <v-container id="fondo-form" style="position:relative" >

        <v-row justify="center" s >
          <v-col cols="10" class="pa-0" >

            <v-row justify="end" >

              <v-btn
              @click="dialog = !dialog" 
              absolute
              x-small
              fab
              right
              color="transparent"
              text
              class="pt-5"
              >
                <v-icon large color="#fff">mdi-close-circle-outline</v-icon>
              </v-btn>
            </v-row>

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

<style scoped lang="scss">
@media only screen and (max-width : 960px){
  .filly{
    // min-height: 80vh;
  }
  .cta{
    border-radius: 0 !important;
  }
}
.cta{
  border-radius: 0.7em;
  // min-height: 100vh;
  background-color: rgba(236, 172, 0,1);

  background-image:linear-gradient(160deg,rgba(236, 172, 0,1), rgba(236, 172, 0, 0.6)), url('~@/assets/img/animacionFrutas/pinaFondo.jpg');
  // background-image: url('~@/assets/img/animacionFrutas/pear.png') ;
  background-position:center, center;
  background-size: auto,  cover ;
  background-attachment:scroll;
}
.section-title{
  color: rgba(255,255,255, 0.9) !important
}
.filly{
  // height: 40vh;
}
.texto{
  font-size: 1em
}

// Formulario
#fondo-form{
  background-image: linear-gradient(160deg,#e2454c, #640b64);
  border: 0.2em solid white
}

</style>