<template>
  <v-container  fluid class="cta">
    <v-container >

      <v-row class="filly" align="center" justify="center">
        <v-col>
          <v-row justify="center">  

            <v-col cols="10">
              <h2 class="section-title text-center pt-12">
                {{$t('servicios.prim.tituloHeader')}} 
              </h2>
            </v-col>


            <v-col cols="10" md="8" >
              <p class="text-center white--text texto mb-0">
                {{$t('servicios.prim.textoHeader')}} 
              </p>
            </v-col>
            
            <v-col cols="12">
              <v-row justify="center">
                <v-col cols="10" sm="7" md="5">
                  <FormularioTelefono/>
                </v-col>
              </v-row>
            </v-col>

          </v-row>
        </v-col>

      </v-row>

    </v-container>
  </v-container>
</template>

<script>
import FormularioTelefono from '../globalComponents/FormularioTelefono'

export default {
  components: {
    FormularioTelefono
  }
}
</script>

<style scoped lang="scss">
.cta{
  min-height: 100vh;
  background-color: rgba(255, 132, 0,1);

  background-image:linear-gradient(160deg,rgba(255, 132, 0, 1), rgba(255, 132, 0, 0.3)), url('~@/assets/img/animacionFrutas/naranjaFondo.png'),;
  // background-image: url('~@/assets/img/animacionFrutas/pear.png') ;
  background-position:center, center;
  background-size: auto, cover;
  background-attachment:scroll;
}
.filly{
  min-height: 100vh;
}
.texto{
  font-size: 1.6em
}
.section-title{
  color: #fff !important
}
</style>