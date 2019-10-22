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
    <!-- <v-row justify="center" >
      <v-col cols="10" sm="6">
        <v-btn 
        block
        position="center"
        class="text-none"
        color="white"
        text >
          <span class="font-weight-bold">
            {{$t('home.blog.boton')}} 
          </span> 
        </v-btn>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';
.servicio{
  height: 15em;
}
#fondo-form{
  background-color: white
}

/* BOTON ACTIVO AL NATURAL / BOTON NATURAL HOVER*/ 
.v-btn--active:before, .v-btn:hover:before {
  @include btn-select(); 
}
/* BOTON ACTIVO CLICK / BOTON PREV */
.v-btn--active:focus:before, .v-btn:before{
  @include btn-reset();
}
/* BOTON HOVER */
.v-btn:hover{
  @include btn-hover();
}
</style>