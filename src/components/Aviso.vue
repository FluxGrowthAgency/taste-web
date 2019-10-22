<template>
    <v-container fluid id="aviso">
        <v-container>
            <v-row justify="center">
                <v-col cols="8">
                    <v-card>
                        <v-card-title
                        class="terminos-titulo text-center mt-12"
                        >
                        {{$t('aviso.titulo')}}
                        </v-card-title>

                        <v-card-text class="pt-3">
                        {{$t('aviso.main')}}            
                        </v-card-text>


                        <!-- <v-card-actions> 
                        <v-btn
                        dark
                            block
                            color="#640b64"
                            @click="dialog = false"
                        >
                            {{$t('aviso.back')}}
                        </v-btn>
                        </v-card-actions> -->
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#aviso{
    background-color: grey
}

</style>