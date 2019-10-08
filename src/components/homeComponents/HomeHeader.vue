<template>
  <v-container>
    <v-row align="center">

      <v-col cols="6">
        <v-row align="center" >

            <v-col class="" cols="12">
              <h2>{{$t('home.homeheader.formulario.question')}}</h2>
              <p>{{$t('home.homeheader.formulario.sabemos')}}</p>
            </v-col>

           
              <v-col cols="8" class="pr-0">
                <v-text-field
                  v-model="usuarioNuevo.mail"
                  :label="$t('home.homeheader.formulario.label-cel')"
                  solo
                  height="3.8em"
                  flat
                  hide-details
                />

              </v-col>
              <v-col cols="4" class="pl-0">
                <v-btn
                  :disabled="!valid"
                  v-on:click="sendForm"
                  height="4.3em"
                  dark
                >
                  <span >{{$t('home.homeheader.formulario.contact')}}</span>
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
                :rules="nameRules"
                class="ml-4 pb-4"
                >
                  <template v-slot:label>
                  <div>
                      {{$t('home.homeheader.formulario.acepto')}}
                      <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                          <a
                          @click.stop
                          @click="showTerms"
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

      <v-col cols="6">
        <v-img
          position="center"
          contain
          :src="require('../../assets/img/no-available.png')"/>
      </v-col>

      
    </v-row>
    <v-dialog
      scrollable
      v-model="dialog"
      width="500"
      >

        <v-card>
          <v-card-title
          class="terminos-titulo text-center"
          >
            {{$t('aviso.titulo')}}
          </v-card-title>

          <v-card-text class="pt-3">
            {{$t('aviso.main')}}            
          </v-card-text>


          <v-card-actions> 
            <v-btn
            dark
              block
              color="#000c3e"
              @click="dialog = false"
            >
              {{$t('aviso.back')}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-container>

</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      respuesta:'',
      dialog: false,
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
    },
    showTerms(){
      this.dialog=true
    }
  }
}
</script>

<style>

</style>