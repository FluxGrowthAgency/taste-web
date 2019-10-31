<template >
    <v-col cols="12" >
        <h2 class="white--text section-title pb-6">
            {{$t('formulario.title')}} 
        </h2>
        <v-text-field
        :label="$t('formulario.name')"
        v-model="contactoNuevo.nombre"
        outlined
        dark
        color="white"
        />
        <v-text-field
        v-model="contactoNuevo.mail"
        :label="$t('formulario.mail')"
        outlined
        dark
        color="white"
        />
        <v-text-field
        v-model="contactoNuevo.tel"
        :label="$t('formulario.tel')"
        outlined
        dark
        color="white"
        />
        <v-textarea
        v-model="contactoNuevo.message"
        :label="$t('formulario.msg')"
        rows="8"
        outlined
        dark
        color="white"
        />

        <v-row align="start" v-if="!respuesta">
            <v-col cols="6" >
                <v-checkbox
                v-model="privacyCheckbox"
                :rules="nameRules"
                class="mt-0"
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
                <v-btn block dark outlined 
                @click="sendForm"
                :loading="loadingBtn"
                :disabled="btnValid" class="text-none contact">
                    <span >{{$t('formulario.contact')}}</span>
                </v-btn>
            </v-col>
            <v-col cols="6" class="">
                <v-row justify="center">
                    <v-col >

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
            respuesta:'',
            valid: true,
            btnValid: true,
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
            this.checkValidForm() 
        },
        checkValidForm(){
            if(this.reCaptcha && this.privacyCheckbox){
                this.btnValid = false
            }
            else{
                this.btnValid = true
            }
        }
    },
    updated: function(){
        this.checkValidForm()
        // console.log("updated")
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
</style>