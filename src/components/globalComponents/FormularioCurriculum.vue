<template>
    <v-col cols=12 class="pa-0">
        <v-col>
            <p class="mb-0 white--text">
            {{$t('home.sitemapcta.bolsa')}}<br>
            {{$t('home.sitemapcta.enviacv')}}<br>
            </p>            
        </v-col>   

        <v-col cols="6" v-if="!respuesta">

            <v-form
            >

                <v-file-input
                type="file" id="file" ref="file"
                @change="fileUpload"
                label="Subir C.V."
                dense
                outlined
                class="pb-3"

                :error="btnValid"
                hide-details
                :rules="nameRules"

                dark
                prepend-icon=""/>

                <v-btn
                dark 
                outlined 
                @click="validate"
                :loading="loadingBtn" 
                class="enviar text-none">
                    {{$t('home.homeheader.formulario.contact')}}
                </v-btn>

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
import axios from 'axios'

export default {
    data(){
        return{
            respuesta:'',
            btnValid: false,
            loadingBtn: false,
            contactoNuevo: {
                cv:""
            },
            nameRules:[
                v => !!v || this.$t('home.homeheader.formulario.texto-checkbox'),
            ],
        }
    },
    methods: {
        validate () {
            if (this.contactoNuevo.cv) {
                this.btnValid = false
                this.sendForm()
            }
            else{
                this.btnValid = true
                // console.log("b")
            }
        },
        fileUpload(event){
            this.contactoNuevo.cv = event
            if(this.contactoNuevo.cv){
                this.btnValid = false
            }
            else{
                this.btnValid = true
            }
        },
        sendForm(){
            this.loadingBtn = true
            let formData = new FormData();
            formData.append('file', this.contactoNuevo.cv);

            axios.post('http://taste-mkt.com/scripts-php/curriculum.php',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )   
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

<style lang="scss" scoped>
/* BOTON HOVER ENVIAR*/
.enviar:hover{
    background-color: transparent !important;
    opacity: 1;
    background-image: linear-gradient(160deg,#fff, #fff);
    color: #e2454c !important;
    border: none !important;
    font-weight: 900 !important;  
}
</style>