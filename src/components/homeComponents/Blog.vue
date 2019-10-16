<template>
  <v-container>
    <v-row align="center">
      <v-col cols="6">
        <v-card color="#e9f2eb" to="/blog" flat>
          <v-container >
            <v-row   justify="center" align="center">
              <v-col cols="12">

                <v-img
                position="center"
                contain
                :src="require('../../assets/img/no-available.png')"/>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="6">
            <v-card color="#e9f2eb" to="/blog" flat>
              <v-container >
                <v-row   justify="center" align="center">
                  <v-col cols="12">
                    <v-img
                    position="center"
                    contain
                    :src="require('../../assets/img/no-available.png')"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card color="#e9f2eb" to="/blog" flat>
              <v-container >
                <v-row   justify="center" align="center">
                  <v-col cols="12">
                    <v-img
                    position="center"
                    contain
                    :src="require('../../assets/img/no-available.png')"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-card color="#e9f2eb" to="/blog" flat>
              <v-container >
                <v-row   justify="center" align="center">
                  <v-col cols="12">
                    <v-img
                    position="center"
                    contain
                    :src="require('../../assets/img/no-available.png')"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card color="#e9f2eb" to="/blog" flat>
              <v-container >
                <v-row   justify="center" align="center">
                  <v-col cols="12">
                    <v-img
                    position="center"
                    contain
                    :src="require('../../assets/img/no-available.png')"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>

      </v-col>

    </v-row>
    <v-row justify="center" >
      <v-col cols="6">
        <v-btn outlined block class="text-none">
          <span class="font-weight-bold">
            {{$t('home.blog.boton')}} 
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

<style>

</style>