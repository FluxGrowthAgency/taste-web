<template >
    <form action="" >
        <h2 class="white--text section-title pb-6">
            {{$t('formulario.title')}} 
        </h2>
        <v-text-field
        :label="$t('formulario.name')"
        outlined
        dark
        color="white"
        />
        <v-text-field
        :label="$t('formulario.mail')"
        outlined
        dark
        color="white"
        />
        <v-text-field
        :label="$t('formulario.tel')"
        outlined
        dark
        color="white"
        />
        <v-textarea
        :label="$t('formulario.msg')"
        rows="8"
        outlined
        dark
        color="white"
        />
        <v-row align="start">
            <v-col cols="6" >
                <v-checkbox
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
                <v-btn block dark outlined class="text-none contact">
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
    </form>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
export default {
    data(){
        return{
            respuesta:'',
            valid: true,
            contactoNuevo: {
                mail:"",
                reCaptcha:""
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
        reCAPTCHAVerify(response){
            // console.log(response)
            this.contactoNuevo.reCaptcha = response
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
.txt-peq{
    font-size: 16px
}

// /* BOTON ACTIVO AL NATURAL / BOTON NATURAL HOVER*/ 
// .contact:before, .contact:hover:before {
//   border-radius: 0 !important;
//   opacity: 1 !important
// }
// /* BOTON ACTIVO CLICK / BOTON PREV */
// .contact:focus:before, .contact:before{
//   background-color: transparent !important;
// }
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