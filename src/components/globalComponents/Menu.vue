<template>
  <v-app-bar
  app
  elevate-on-scroll
  :color="barColor"  
  v-scroll="barColorChange"
  >
      <v-container>
          <v-row justify="space-between" align="center">

            <v-col cols="4">
              <v-card flat text to="/" color="transparent"> 
                <v-img
                eager
                position="left center"
                max-height="2.2em"
                contain
                :src="logoUrl"/>
              </v-card>
            </v-col>

            <v-col cols="8">
              <v-row justify="end" align="center">
                <v-menu
                left
                bottom
                >
                  <template v-slot:activator="{ on }">
                      <v-btn light icon v-on="on" class="d-md-none ">
                          <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                  </template>

                  <v-list>
                    <v-list-item to="/servicios">
                      <v-list-item-title>CONSULTANCY</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/servicios">
                      <v-list-item-title>BTL</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/servicios">
                      <v-list-item-title>DIGITAL</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/servicios">
                      <v-list-item-title>PR & IM</v-list-item-title>
                    </v-list-item>
                    <v-list-item >
                      <v-list-item-title class="text-center"> 
                        <v-btn :href="`tel:${telefonoTaste}`" block color="#640b64" dark>
                          <v-icon>mdi-phone</v-icon>
                        </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-btn to="/servicios" :color="btnColor" text class="d-none d-md-flex mx-1 text-none"><span class="flama-thin">consultancy</span></v-btn>
                <v-btn to="/servicios" :color="btnColor" text class="d-none d-md-flex mx-1 text-none font-weight-bold"><span class="flama-thin">btl</span></v-btn>
                <v-btn to="/servicios" :color="btnColor" text class="d-none d-md-flex mx-1 text-none font-weight-bold"><span class="flama-thin">digital</span></v-btn>
                <v-btn to="/servicios" :color="btnColor" text class="d-none d-md-flex mx-1 text-none font-weight-bold"><span class="flama-thin">pr & im</span></v-btn>
                <!-- <v-btn :href="`tel:${telefonoTaste}`" :color="btnColor" text class="d-none d-md-flex mx-1 text-none"><v-icon>mdi-phone</v-icon></v-btn> -->

                <div>

                  <!-- <v-select 
                  class="idiomas" 
                  
                  append-icon="" 
                  background-color="#640b64" 
                  dark 
                  solo 
                  hide-details 

                  :items="langs" 
                  v-model="$root.$i18n.locale">

                  </v-select> -->

                  <v-select 
                  class="idiomas" 

                  background-color="#fff" 
                  flat

                  append-icon="" 
                  solo
                  hide-details 

                  :items="options" 
                  item-text="title" 
                  item-value="lang" 
                  v-model="$root.$i18n.locale">
                  <template v-slot:selection="{ item }">
                      <v-img
                      eager
                      :src="item.flag"
                      />
                    </template>
                  </v-select>

                </div>

              </v-row>

            </v-col>

            

            <!-- <v-col cols="2">

              <v-select class="idiomas" append-icon="" background-color="#640b64" dark solo hide-details :items="langs" v-model="$root.$i18n.locale"/>
            </v-col> -->
              
          </v-row>

          <v-dialog
          v-model="dialog"
          width="500"
          scrollable
          >
            <v-container id="fondo-form">
              <v-row justify="center">
                <v-col cols="10">
                <Formulario2/>
                </v-col>
              </v-row>
            </v-container>
          </v-dialog>

      </v-container>

  </v-app-bar>
</template>

<script>
import Formulario2 from '../homeComponents/Formulario2'
export default {
  components:{
    Formulario2
  },
  data () {
    return { 
      langs: ['es', 'en'],
      barColor: "transparent",
      telefonoTaste:"3338173029",
      dialog:false,
      btnColor: "#fff",
      logoUrl: require('../../assets/img/logoBlanco.svg'),
      logo:{
        blanco: require('../../assets/img/logoBlanco.svg'),
        mora: require('../../assets/img/logoMora.svg'),
        degradado: require('../../assets/img/logoDeg.svg')
      },
      options: [
        {
          title: 'Español',
          flag: require('../../assets/img/banderas/mx.svg'),
          lang: 'es'
        },
        {
          title: 'Ingles',
          flag: require('../../assets/img/banderas/us.svg'),
          lang: 'en'
        }
      ]
    }
  },
  methods: {
    changeLogo (){
      return require('../../assets/img/logoBlanco.svg')
    },
    barColorChange (e) {
      let scrollTop = e.target.scrollingElement.scrollTop
      // console.log('Menu scrollTop:' + scrollTop)
      if(scrollTop !== 0){
        this.barColor = "white";
        this.btnColor = "#e2454c" 
        this.logoUrl = this.logo.degradado;
      }
      else{
        this.barColor = "transparent";
        this.btnColor = "#fff" 
        this.logoUrl = this.logo.blanco
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin menu-button-reset(){
  background-color: transparent !important;
}
@mixin menu-button-select(){
  border-radius: 0 !important;
  border-bottom: 0.2em solid #fff;
  opacity: 1 !important
}

#fondo-form{
  background-color: white
}

/* BOTON ACTIVO AL NATURAL*/
.v-btn--active:before {
  @include menu-button-select(); 
}

/* BOTON ACTIVO CLICK */
.v-btn--active:focus:before{
  @include menu-button-reset();
}

/* BOTON NATURAL HOVER */
.v-btn:hover:before{
  @include menu-button-reset();
  @include menu-button-select();  
} 

/* BOTON PREV */
.v-btn:before{
  @include menu-button-reset();
}

.v-card--link:focus:before {
  opacity: 0;
}
.idiomas{
  width: 3em;
  padding: 0 !important;
  margin: 0 !important;
  border-radius: 50% !important
}


</style>