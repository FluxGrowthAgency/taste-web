<template>
    <v-col cols="12" class="pa-0 formulario-contactenme">

        <v-col cols="12" class="pt-0" v-if="!respuesta">

          <v-form
            ref="form"
            v-model="btnValid"
            lazy-validation
          >

            <v-row justify="start">
              <v-col cols="7" class="pr-0">
                  <v-text-field
                  v-model="usuarioNuevo.tel"
                  :label="$t('home.homeheader.formulario.label-cel')"
                  dark
                  outlined
                  hide-details

                  :rules="nameRules"
                  required
                  />

              </v-col>
              <v-col cols="5" class="pl-0">
                  <v-btn
                  :disabled="!btnValid"
                  block
                  text
                  outlined
                  color="white"
                  :loading="loadingBtn"
                  class="text-none boton-contacto"
                  @click="validate"
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

          </v-form>

        </v-col>

        <v-col v-if="respuesta" cols="12">
            <v-alert v-if="respuesta === 'exito'" type="success">
            {{$t('home.homeheader.formulario.respuestaok')}}
            </v-alert>
            <v-alert v-else type="error">
            {{$t('home.homeheader.formulario.respuestaerr')}}
            </v-alert>
        </v-col>

    </v-col>
  
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      btnValid: true,
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
    validate () {
      if (this.$refs.form.validate()) {
        this.sendForm()
      }
    },
    sendForm(){
      this.loadingBtn = true
      //console.log(this.usuarioNuevo);
      axios.post( 'http://taste-mkt.com/scripts-php/telefono.php' , {
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
.boton-contacto{
  margin-left: -0.1em;
  font-size: 0.8em !important;

  cursor: pointer ;
  border: 0.1em solid white !important;
  /* border: none !important; */
  /* background-color: white !important; */
  /* color: #A42859 !important; */
}
.boton-contacto:hover{
  cursor: pointer ;
  border: 0.2em solid white !important;
  background-color: white !important;
  color: #e2454c !important;
}


</style>