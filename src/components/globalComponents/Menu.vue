<template>
  <v-app-bar
  app
  elevate-on-scroll
  :color="barColor"  
  v-scroll="barColorChange"
  >

    

    <v-container>
      <v-row justify="space-between" align="center">

        <v-col cols="4" md="2" >

          <v-card flat text to="/" color="transparent" :class="homeLogo"> 
            <v-img
            eager
            position="left center"
            max-height="2.2em"
            contain
            :src="logoUrl"/>
          </v-card>


        </v-col>

        <v-col cols="1" md="8" >
          
          <v-row justify="center" align="center" >

            <v-col :class="hide">
              <v-row justify="space-around" align="center"  class="btnsCH">
                <v-btn to="/consultancy" :color="btnColor" text :class="btnClass">consultancy</v-btn>
                <v-btn to="/btl" :color="btnColor" text :class="btnClass">btl</v-btn>
                <v-btn to="/digital" :color="btnColor" text :class="btnClass">digital</v-btn>
                <v-btn to="/prim" :color="btnColor" text :class="btnClass">pr & im</v-btn>
              </v-row>
            </v-col>



          </v-row>

        </v-col>

        <v-col cols="7" md="2" >
          <v-row justify="end" align="center" >

            
            <v-menu
            left
            bottom
            >
              <template v-slot:activator="{ on }">
                  <v-btn light icon v-on="on" class="d-md-none avoidBorderBottom">
                      <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
              </template>

              <v-list>
                <v-list-item to="/consultancy">
                  <v-list-item-title>CONSULTANCY</v-list-item-title>
                </v-list-item>
                <v-list-item to="/btl">
                  <v-list-item-title>BTL</v-list-item-title>
                </v-list-item>
                <v-list-item to="/digital">
                  <v-list-item-title>DIGITAL</v-list-item-title>
                </v-list-item>
                <v-list-item to="/prim">
                  <v-list-item-title>PR & IM</v-list-item-title>
                </v-list-item>
                <!-- <v-list-item >
                  <v-list-item-title class="text-center"> 
                    <v-btn :href="`tel:${telefonoTaste}`" block color="#640b64" dark>
                      <v-icon>mdi-phone</v-icon>
                    </v-btn>
                  </v-list-item-title>
                </v-list-item> -->
              </v-list>
            </v-menu>
            
            <div class="pr-4">
              <v-select 
              class="idiomas " 

              background-color="transparent" 
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

            <v-btn fab max-height="48" max-width="48" :href="`tel:${telefonoTaste}`" :color="phoneBtnColor" class="avoidBorderBottom"  >
              <v-icon :color="phoneColor" >mdi-phone</v-icon>
            </v-btn>

          </v-row>
        </v-col>
          
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
// import Formulario2 from '../homeComponents/Formulario2'
// import { log } from 'util'
export default {
  components:{
    // Formulario2
  },
  data () {
    return { 
      langs: ['es', 'en'],
      barColor: "transparent",
      phoneColor: "green",
      hide: "d-none d-md-flex mx-1 ",
      btnClass: "btnClass",
      homeLogo: "homeLogo",
      telefonoTaste:"3338173029",
      dialog:false,
      btnColor: "#fff",
      phoneBtnColor: "#fff",
      // logoUrl: "",
      logoUrl: "",
      logo:{
        // blanco: "",
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
        this.btnColor = "#e2454c" ;
        this.phoneBtnColor = "green"
        this.logoUrl = this.logo.degradado;
        this.btnClass = "btnClass btnClassDark";
        this.phoneColor = "#fff";
      }
      else{
        this.barColor = "transparent";
        this.btnColor = "#fff" ;
        this.phoneBtnColor = "#fff"
        this.btnClass = "btnClass";
        this.phoneColor = "green";

        this.checkHomePage(scrollTop)
      }
    },
    checkHomePage (){
      // console.log(scroll)
      if(this.$route.name === "Home"){

        this.logoUrl = ""
      }
      else{
        this.logoUrl = require('../../assets/img/logoBlanco.svg');
        this.homeLogo="homeLogo"
      }
    }
  },
  created: function(){
    this.checkHomePage()
  },

  // Ejecuta en cada cambio de enlace
  watch:{
    $route (){
      this.checkHomePage()
    }
  } 
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';

#fondo-form{
  background-color: white
}

/* BOTON ACTIVO AL NATURAL*/
.v-btn--active:before {
  @include menu-button-select(); 
  margin-bottom: -10px
}

/* BOTON ACTIVO CLICK */
.v-btn--active:focus:before{
  @include menu-button-reset();
}

/* BOTON NATURAL HOVER */
.v-btn:hover:before{
  @include menu-button-reset();
  // @include menu-button-select();  
  margin-bottom: -10px;
} 

// UNDERLINE BOTONES TOP
.v-btn:after {    
  margin-bottom: -10px;

  bottom: 0;
  content: "";
  display: block;
  height: 3px;
  left: 0%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.v-btn:hover:after { 
  width: 100%; 
  left: 0; 
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
.btnClass{
  font-family: 'Flama Basic', sans-serif !important;
  font-size: 1.4em !important;
  text-transform: none
}

// .btnClassDark:hover{
//   border-radius: 0 !important;
//   border-bottom: 0.15em solid #e2454c;
//   opacity: 1 !important;
//   margin-bottom: -10px
// }

// UNDERLINE BOTONES TOP DARK
.btnClassDark:after {    
  margin-bottom: -10px;

  bottom: 0;
  content: "";
  display: block;
  height: 3px;
  left: 0%;
  position: absolute;
  background: #e2454c;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.btnClassDark:hover:after { 
  width: 100%; 
  left: 0; 
}

// Evita subraye del hover del telefono
.avoidBorderBottom:after{
  height: 0px !important;
  box-shadow: none !important
}

.telIcon{
  fill: currentColor
}

//Evita touch support de Home Logo
.homeLogo{
  color: transparent !important;
}


</style>