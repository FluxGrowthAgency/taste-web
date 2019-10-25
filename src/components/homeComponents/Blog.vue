<template>
  <v-container>
    <h2 class="section-title text-center section-title-degradado title-size-big pb-1">
          {{$t('home.blog.title')}} 
        </h2>
    <v-row align="center" justify="center" class="pb-8 ">
      <v-col cols="10" md="6">
        <hr class="underline">
      </v-col>
    </v-row>
    <v-row align="center" v-if="isFetch" >
      <v-col cols="12" md="5" class="column-height">
        <v-card color="#e9f2eb"  flat class="fill-height" target="_blank" :href="posts[0].link" hover >
          <v-img
          :gradient="imgGradient"
          height="23.5em"
          position="center"
          :src="posts[0]._embedded['wp:featuredmedia'][0].source_url">

            <v-container class="fill-height"> 
              <v-row align="end" class="fill-height">

                <v-col cols="12" class="py-0">

                  <v-row  align="center" >
                    <v-col cols="12" class="py-0">

                      <p class="card-title mb-0">
                        {{posts[0].title.rendered}}
                      </p>
                    </v-col>
                    
                    <v-col cols="12" class="py-0">
                      <v-row align="center" justify="space-between" >

                        <v-col cols="12" md="8" class="py-0">
                          <p class="mb-0 card-excerpt" v-html="posts[0].excerpt.rendered"></p>
                        </v-col>
                        <v-col cols="6" md="4" class="py-0 text-start">
                          <v-btn 
                          outlined dark
                          class="card-btn ">{{$t('home.blog.more')}} </v-btn>
                        </v-col>

                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

            </v-container>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" md="7" class="column-height py-0">
        <v-row >
          <v-col cols="12" md="6">
            <v-card color="#e9f2eb" target="_blank" :href="posts[1].link" flat hover>
              <v-img
              :gradient="imgGradient"
              :height="sideImageHeight"
              position="center"
              :src="posts[1]._embedded['wp:featuredmedia'][0].source_url">
                <v-container class="fill-height"> 
              <v-row align="end" class="fill-height">

                <v-col cols="12" class="py-0">

                  <v-row  align="center" >
                    <v-col cols="12" class="py-0">

                      <p class="card-title mb-0">
                        {{posts[1].title.rendered}}
                      </p>
                    </v-col>
                    
                    <v-col cols="12" class="py-0">
                      <v-row align="center" justify="space-between" >

                        <v-col cols=12 lg="8" class="py-0">
                          <p class="mb-0 card-excerpt" v-html="posts[1].excerpt.rendered"></p>
                        </v-col>
                        <v-col cols="6" lg="4" class="py-0 text-start">
                          <v-btn 
                          outlined dark
                          class="card-btn ">{{$t('home.blog.more')}} </v-btn>
                        </v-col>

                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

            </v-container>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card color="#e9f2eb" target="_blank" :href="posts[2].link" flat hover>
              <v-img
              :gradient="imgGradient"
              :height="sideImageHeight"
              position="center"
              :src="posts[2]._embedded['wp:featuredmedia'][0].source_url">
                <v-container class="fill-height"> 
              <v-row align="end" class="fill-height">

                <v-col cols="12" class="py-0">

                  <v-row  align="center" >
                    <v-col cols="12" class="py-0">

                      <p class="card-title mb-0">
                        {{posts[2].title.rendered}}
                      </p>
                    </v-col>
                    
                    <v-col cols="12" class="py-0">
                      <v-row align="center" justify="space-between" >

                        <v-col cols=12 lg="8" class="py-0">
                          <p class="mb-0 card-excerpt" v-html="posts[2].excerpt.rendered"></p>
                        </v-col>
                        <v-col cols="6" lg="4" class="py-0 text-start">
                          <v-btn 
                          outlined dark
                          class="card-btn ">{{$t('home.blog.more')}} </v-btn>
                        </v-col>

                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

            </v-container>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-card color="#e9f2eb" target="_blank" :href="posts[3].link" flat hover>
              <v-img
              :gradient="imgGradient"
              :height="sideImageHeight"
              position="center"
              :src="posts[3]._embedded['wp:featuredmedia'][0].source_url">
                <v-container class="fill-height"> 
              <v-row align="end" class="fill-height">

                <v-col cols="12" class="py-0">

                  <v-row  align="center" >
                    <v-col cols="12" class="py-0">

                      <p class="card-title mb-0">
                        {{posts[3].title.rendered}}
                      </p>
                    </v-col>
                    
                    <v-col cols="12" class="py-0">
                      <v-row align="center" justify="space-between" >

                        <v-col cols=12 lg="8" class="py-0">
                          <p class="mb-0 card-excerpt" v-html="posts[3].excerpt.rendered"></p>
                        </v-col>
                        <v-col cols="6" lg="4" class="py-0 text-start">
                          <v-btn 
                          
                          class="card-btn" outlined dark>{{$t('home.blog.more')}} </v-btn>
                        </v-col>

                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

            </v-container>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card color="#e9f2eb" target="_blank" :href="posts[4].link" flat hover>
              <v-img
              :gradient="imgGradient"
              :height="sideImageHeight"
              position="center"
              :src="posts[4]._embedded['wp:featuredmedia'][0].source_url">
                <v-container class="fill-height"> 
              <v-row align="end" class="fill-height">

                <v-col cols="12" class="py-0">

                  <v-row  align="center" >
                    <v-col cols="12" class="py-0">

                      <p class="card-title mb-0">
                        {{posts[4].title.rendered}}
                      </p>
                    </v-col>
                    
                    <v-col cols="12" class="py-0">
                      <v-row align="center" justify="space-between" >

                        <v-col cols=12 lg="8" class="py-0">
                          <p class="mb-0 card-excerpt" v-html="posts[4].excerpt.rendered"></p>
                        </v-col>
                        <v-col cols="6" lg="4" class="py-0 text-start">
                          <v-btn 
                          outlined dark
                          class="card-btn ">{{$t('home.blog.more')}} </v-btn>
                        </v-col>

                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

            </v-container>
              </v-img>
            </v-card>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data (){
    return{
      imgGradient: "160deg, rgba(226, 69, 77, 0.1), rgba(100, 11, 100,0.4)",
      sideImageHeight: "11em",
      isFetch: false,
      posts:[]
    }
  },
  created: async function(){
    await axios.get('http://taste-mkt.com/blog/wp-json/wp/v2/posts/?_embed&categories=84')
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
.servicio{
  height: 15em;
}
#fondo-form{
  background-color: white
}



// COLUMNAS
.column-height{
  min-height: 25em;
}

// CARDS
.card-title{
  font-size: 2.8em;
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
</style>