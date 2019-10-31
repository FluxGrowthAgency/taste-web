<template>
  <v-container fluid class="header-full filly">
    <v-container >
      <v-row align="center" class="filly pt-12">

        <v-col cols="12" md="8" class="">
          <v-img
          max-height="85vh"
          contain
          :src="require('../../assets/img/TasteFruits.png')"/>
        </v-col>

        <v-col cols="12" md="4">
          <v-row align="center" justify="center">

              <v-col class="pb-0 " cols="12">
                <h2 class=" white--text section-title pb-4">{{$t('home.homeheader.formulario.question')}}</h2>
                <p class="white--text mb-0">{{$t('home.homeheader.formulario.sabemos')}}</p>
              </v-col>

              <v-col cols="12" class="formulario-contactenme pt-0 " v-if="!respuesta">
                <v-row class="">
                  <v-col cols="7" class="pr-0">
                    <v-text-field
                      v-model="usuarioNuevo.tel"
                      :label="$t('home.homeheader.formulario.label-cel')"
                      dark
                      outlined
                      hide-details
                    />

                  </v-col>
                  <v-col cols="5" class="pl-0">
                    <v-btn
                    text
                    :loading="loadingBtn"
                    class="text-none boton-contacto"
                    :disabled="!valid"
                    v-on:click="sendForm"
                    height="4.45em"
                    >
                      {{$t('home.homeheader.formulario.contact')}}
                    </v-btn>

                  </v-col>
                  <v-col cols="12">
                  <v-checkbox
                  dark
                  v-model="valid"
                  hide-details
                  :rules="nameRules"
                  class=" mt-0 "
                  >
                    <template v-slot:label>
                    <div class="white--text">
                        {{$t('home.homeheader.formulario.acepto')}}
                        <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a
                            @click.stop
                            target="_blank"
                            href="aviso.pdf"
                            class="white--text"
                            >
                            {{$t('home.homeheader.formulario.aviso')}}
                            </a>
                        </template>
                        </v-tooltip>
                    </div>
                    </template>
                  </v-checkbox>
                </v-col>

                </v-row>

              </v-col>

                <v-col v-if="respuesta" cols="12">
                  <v-alert v-if="respuesta === 'exito'" type="success">
                    {{$t('home.homeheader.formulario.respuestaok')}}
                  </v-alert>
                  <v-alert v-else type="error">
                    {{$t('home.homeheader.formulario.respuestaerr')}}
                  </v-alert>
                </v-col>
                
              
            </v-row>
          
          
        </v-col>
        
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      respuesta:'',
      valid: false,
      loadingBtn: false,
      usuarioNuevo: {
        tel:""
      },
      nameRules:[
        v => !!v || this.$t('home.homeheader.formulario.texto-checkbox'),
      ],
    }
  },
  methods: {
    sendForm(){
      this.loadingBtn = true
      //console.log(this.usuarioNuevo);
      axios.post( 'http://taste-mkt.com/scripts-php/newsletter.php' , {
        reqBody: this.usuarioNuevo
      })
      .then(response =>{
        this.respuesta = response.data;
        this.loadingBtn = false
        // console.log(response.data);
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style scoped>
.header-full{
  /* background-image: linear-gradient(160deg,rgba(226, 69, 77,1), rgba(100, 11, 100, 1)); */
  /* background-position:  center, center;
  background-size:  auto, cover ;
  background-attachment:scroll; */
  
  
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.21) 42%, rgba(255,255,255,0.0) 45%, rgba(255,255,255,0.1) 100%), linear-gradient(180deg,rgba(226, 69, 77,1), rgba(100, 11, 100, 1));

  

}
.filly{
  min-height: 100vh;
}
.fill-available{
  height: 100%;
}
.boton-contacto{
  margin-left: -0.2em;
  font-size: 0.8em !important;

  border: none !important;
  background-color: white !important;
  color: #A42859 !important;
}
.boton-contacto:hover{
  border: 0.2em solid white !important;
  background-color: transparent !important;
  color: white !important;
}
/* Para que se mantenga en una linea en laptop */
h2{
  font-size: 2.9em !important
}
.section-title{
  /* font-size: 3em !important */
}
</style>