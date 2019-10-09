<template>
  <v-container>
    <v-row align="center" class="text-center" no-gutters>
      <v-col cols="6">
        <v-row no-gutters>
          <v-col cols="12" >
            <v-row >
              <v-col cols="6" >
                <v-card color="#e9f2eb" to="/servicios" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 >
                        {{$t('home.servicios.consultancy')}} 
                      </h2>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
              <v-col cols="6" >
                <v-card color="#e9f2eb" to="/servicios" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 >
                        {{$t('home.servicios.btl')}} 
                      </h2>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12" >
            <v-row>
              <v-col cols="6" >
                <v-card color="#e9f2eb" to="/servicios" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 >
                        {{$t('home.servicios.digital')}} 
                      </h2>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
              <v-col cols="6" >
                <v-card color="#e9f2eb" to="/servicios" flat>
                  <v-container >
                    <v-row class="servicio" justify="center" align="center">
                      <h2 >
                        {{$t('home.servicios.prim')}} 
                      </h2>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

      </v-col>
      <v-col cols="6" >
        <h2 class="mb-4 display-1">
          {{$t('home.servicios.marketing')}} 
        </h2>
        <v-btn outlined large>
          <span class="font-weight-bold">
            {{$t('home.servicios.trabajemos')}} 
          </span> 
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.servicio{
  height: 10em;
}

</style>