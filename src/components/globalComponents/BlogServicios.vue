<template>
  <v-container class="blog-servicios">
    
    
    <v-row align="center" justify="center" class="">
      <a  href="http://taste-mkt.com/blog" target="_blank" class="text-center bye-underline">
        <h2 class="section-title text-center section-title-degradado title-size-big pb-1 ">
          {{$t('home.blog.title')}} 
        </h2>
    </a>
    </v-row>

    <!-- <v-row align="center" justify="center" class="pb-8 ">
      <v-btn text href="http://taste-mkt.com/blog" target="_blank" class="text-center">
        <h2 class="section-title text-center section-title-degradado title-size-big pb-1">
          {{$t('home.blog.title')}} 
        </h2>
    </v-btn>
    </v-row> -->

    <v-row align="center" justify="center" class="pb-8 ">
      <v-col cols="10" sm="6">
        <hr class="underline">
      </v-col>
    </v-row>

    <v-carousel
    v-if="isFetch"
    class="pb-12 carousel "
    v-model="model"
    :show-arrows="true"
    :hide-delimiters="true"
    :cycle="false"
    height="400"
    >
      <v-carousel-item
        v-for="(n, index) in 5"
        :key="index"
      >
        <v-card 
        color="#e9f2eb"  
        flat  
        target="_blank" 
        :href="posts[n].link" >
          <v-img
          height="400"
          :gradient="imgGradient"
          position="center"
          :src="posts[n]._embedded['wp:featuredmedia'][0].source_url">

            <v-container class="fill-height content"> 
              <v-row align="end" class="fill-height">

                <v-col cols="12" class="py-0">

                  <v-row  align="center" >
                    <v-col cols="12" class="py-0">

                      <p class="card-title pb-2">
                        {{posts[n].title.rendered}}
                      </p>
                    </v-col>
                    
                    <v-col cols="12" class="py-0">
                      <v-row align="end" justify="space-between" >

                        <v-col cols="12" sm="8" class="py-0 card-excerpt-col">
                          <p class="mb-0 card-excerpt" v-html="posts[n].excerpt.rendered"></p>
                        </v-col>
                        <v-col cols="12" lg="4" class="py-0 text-end">
                          <v-btn 
                          outlined dark
                          class="card-btn">{{$t('home.blog.more')}} </v-btn>
                        </v-col>

                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

            </v-container>
          </v-img>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data (){
    return{
      model: 0,
      imgGradient: "160deg, rgba(226, 69, 77, 0.0), rgba(117, 115, 117, 0.8)",
      sideImageHeight: "18em",
      isFetch: false,
      posts:[]
    }
  },
  created: async function(){
    await axios.get('http://taste-mkt.com/blog/wp-json/wp/v2/posts/?_embed&categories=85')
    .then(response =>{
      // console.log(response.data)
       this.posts = response.data
       this.isFetch = true
    })
    // .catch(function(error){
    //   console.log(error)
    // })
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixins.scss';

// COLUMNAS
.column-height{
  min-height: 25em;
}

// CARDS
.card-title{
  font-size: 2.6em;
  color: white;
  font-family: "Flama Bold Italic";
  line-height: 1em
}
.card-excerpt{
  font-size: 1.1em;
  color: white;
  line-height: 1em;
}
.card-btn{
  text-transform: none
}

/* BOTON HOVER ENVIAR*/
.v-btn:hover{
    background-color: transparent !important;
    opacity: 1;
    background-image: linear-gradient(160deg,#fff, #fff);
    color: #e2454c !important;
    border: none !important;
    font-weight: 900 !important;  
}

.v-application p {
    margin-bottom: 0px !important;
}

@media only screen and  (min-width : 601px){
  $padding:5em;
  .content{
    padding-left: $padding;
    padding-right: $padding;
    padding-bottom: 2em;
  }
  .blog-servicios{
    padding-bottom: $padding;
    padding-top: $padding;
  }
}

@media only screen and (max-width : 600px){
}
.card-title{
    // font-size: 1.5em;
    padding-bottom: 0.5em
  }

.carousel{
  border-radius: 1.1em
}

.bye-underline{
  text-decoration: none !important;
}
</style>