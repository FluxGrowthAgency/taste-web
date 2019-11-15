<template >
    <v-col cols="12" >
        <h2 class="white--text section-title pb-6">
            {{$t('formulario.title')}} 
        </h2>
        <v-text-field
        :label="$t('formulario.name')"
        v-model="contactoNuevo.nombre"
        outlined
        hide-details
        dark
        color="white"
        class="pb-3"
        />
        <v-text-field
        v-model="contactoNuevo.mail"
        :label="$t('formulario.mail')"
        outlined
        hide-details
        dark
        color="white"
        class="pb-3"
        />
        <!-- <v-text-field
        v-model="contactoNuevo.tel"
        :label="$t('formulario.tel')"
        outlined
        hide-details
        dark
        class="pb-3"
        color="white"
        /> -->
        <v-textarea
        v-model="contactoNuevo.message"
        :label="$t('formulario.msg')"
        rows="4"
        outlined
        hide-details
        dark
        class="pb-3"
        color="white"
        />


        <v-form
        v-model="btnValid"
        lazy-validation
        v-if="!respuesta"
        ref="form"
        >
            <v-row align="start" >

                <v-col cols="6" >
                    <v-checkbox
                    v-model="privacyCheckbox"
                    hide-details
                    :rules="nameRules"
                    class="mt-0 pb-3"
                    dark
                    >
                        <template v-slot:label>
                            <div class="txt-peq white--text">
                                {{$t('formulario.acepto')}}
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <a
                                        @click.stop
                                        target="_blank"
                                        href="aviso.pdf"
                                        class="txt-peq white--text">
                                        {{$t('formulario.aviso')}}
                                        </a>
                                    </template>
                                </v-tooltip>
                            </div>
                        </template>
                    </v-checkbox>
                    <v-btn 
                    @click="validate"
                    :disabled="!btnValid"
                    block 
                    text
                    outlined 
                    :loading="loadingBtn"
                    color="white"
                    class="text-none boton-contacto ">
                        {{$t('formulario.contact')}}
                    </v-btn>
                    <p class="recaptcha-error pt-2" v-if="reCaptchaError && !reCaptcha">
                        {{$t('formulario.reCaptchaError')}}
                    </p>
                </v-col>
                <v-col cols="6" class="pb-0">
                    <v-row justify="center">
                        <v-col class="pb-0">
                            <VueRecaptcha 
                            size="compact"
                            id="recaptcha"
                            @verify="reCAPTCHAVerify"
                            sitekey="6LckZZ4UAAAAAA7WFJ5Xq_71uZxJvXEPs0M22PsX" 
                            :loadRecaptchaScript="true"  
                            />
                        </v-col>
                    </v-row>
                </v-col>

            </v-row>
        </v-form>


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
import VueRecaptcha from 'vue-recaptcha'
export default {
    data(){
        return{
            reCaptchaError:"",
            respuesta:'',
            btnValid: true,
            valid: false,
            reCaptcha: "",
            privacyCheckbox: false,
            loadingBtn: false,
            contactoNuevo: {
                nombre:"",
                mail:"",
                tel:"",
                message:""
            },
            nameRules:[
                v => !!v || this.$t('home.homeheader.formulario.texto-checkbox'),
            ],
        }
    },
    components:{
        VueRecaptcha        
    },
    methods: {
        validate () {
            if(!this.privacyCheckbox){
                this.$refs.form.validate()
            }
            else{
                if(this.reCaptcha){
                    this.reCaptchaError = false
                    this.sendForm()
                }
                else{
                    this.reCaptchaError = true
                }
            }
        },
        sendForm(){
            this.loadingBtn = true
            //console.log(this.usuarioNuevo);
            axios.post( 'http://taste-mkt.com/scripts-php/contacto.php' , {
                reqBody: this.contactoNuevo
            })
            .then(response =>{
                this.respuesta = response.data;
                this.loadingBtn = false
                // console.log(response.data);
            })
            .catch(e => {
                this.errors.push(e)
            })
        },
        reCAPTCHAVerify(response){
            this.reCaptcha = response
        }
    }
}
</script>

<style lang="scss" scoped>
// Recaptcha
#recaptcha, #rc-imageselect   {
    transform: scale(0.7);
    transform-origin: 0 0;
}
#recaptcha{
    height: 6em;
    /* margin-top: 4em */
}
.recaptcha-error{
    line-height: 1em;
    color: red
}
.txt-peq{
    font-size: 16px
}
.section-title{
    font-size: 2em
}

/* BOTON HOVER */
.contact:hover{
    background-color: transparent !important;
    opacity: 1;
    background-image: linear-gradient(160deg,#fff, #fff);
    color: #e2454c !important;
    border: none !important;
    font-weight: 900 !important;  
} 

// BOTON
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