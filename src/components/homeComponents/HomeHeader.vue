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

              <v-col class="" cols="12">
                <h2 class=" white--text section-title pb-2">{{$t('home.homeheader.formulario.question')}}</h2>
                <p class="white--text">{{$t('home.homeheader.formulario.sabemos')}}</p>
              </v-col>

            
                <v-col cols="8" class="pr-0">
                  <v-text-field
                    v-model="usuarioNuevo.mail"
                    :label="$t('home.homeheader.formulario.label-cel')"
                    solo
                    flat
                    hide-details
                  />

                </v-col>
                <v-col cols="4" class="pl-0">
                  <v-btn
                    class="text-none"
                    :disabled="!valid"
                    v-on:click="sendForm"
                    height="3.5em"
                    dark
                  >
                    <span class="boton-contacto">{{$t('home.homeheader.formulario.contact')}}</span>
                  </v-btn>

                </v-col>
                <v-col v-if="respuesta" cols="10">
                  <v-alert v-if="respuesta === 'exito'" type="success">
                    {{$t('home.homeheader.formulario.respuestaok')}}
                  </v-alert>
                  <v-alert v-if="respuesta === 'error'" type="error">
                    {{$t('home.homeheader.formulario.respuestaerr')}}
                  </v-alert>
                </v-col>
                <v-col cols="12">
                  <v-checkbox
                  dark
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
      valid: true,
      usuarioNuevo: {
        mail:""
      },
      nameRules:[
        v => !!v || this.$t('home.homeheader.formulario.texto-checkbox'),
      ],
    }
  },
  methods: {
    sendForm(){
      //console.log(this.usuarioNuevo);
      axios.post( 'http://.......' , {
        reqBody: this.usuarioNuevo
      })
      .then(response =>{
        this.respuesta = response.data;
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
  background-image: linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1),rgba(255,255,255,0.1),rgba(255,255,255,0.1),rgba(255,255,255,0.1),rgba(255,255,255,0.1),rgba(255,255,255,0.1),rgba(255,255,255,0.1), rgba(0,0,0,0.1),rgba(255,255,255,0.1),rgba(255,255,255,0.1),rgba(255,255,255,0.1),rgba(255,255,255,0.1),rgba(255,255,255,0.1),rgba(255,255,255,0.1),rgba(255,255,255,0.1),rgba(255,255,255,0.1)),linear-gradient(160deg,#e2454c, #640b64);
}
.filly{
  min-height: 100vh;
}
.fill-available{
  height: 100%;
}
.boton-contacto{
  font-size: 0.8em !important
}
/* Para que se mantenga en una linea en laptop */
h2{
  font-size: 2.9em !important
}
</style>