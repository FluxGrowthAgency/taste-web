<template >
    <form action="" >
        <v-text-field
        outlined
        color="#640b64"
        />
        <v-text-field
        outlined
        color="#640b64"
        />
        <v-text-field
        outlined
        color="#640b64"
        />
        <v-textarea
        rows="8"
        outlined
        color="#640b64"
        />
        <v-row align="start">
            <v-col cols="6" >
                <v-checkbox
                :rules="nameRules"
                class="mt-0"
                >
                    <template v-slot:label>
                        <div class="txt-peq">
                            {{$t('home.homeheader.formulario.acepto')}}
                            <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <a
                                @click.stop
                                target="_blank"
                                href="aviso"
                                class="txt-peq">
                                {{$t('home.homeheader.formulario.aviso')}}
                                </a>
                            </template>
                            </v-tooltip>
                        </div>
                    </template>
                </v-checkbox>
                <v-btn block dark>
                    <span >{{$t('home.homeheader.formulario.contact')}}</span>
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

<style scoped>
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
    
</style>