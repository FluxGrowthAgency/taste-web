<template>
  <v-app-bar
  >
      <v-container>
          <v-row justify="space-between">



            <v-col cols="3">
              <v-img
              position="left center"
              max-height="2.2em"
              contain
              :src="require('../../assets/img/no-available.png')"/>
            </v-col>

            <v-col cols="8">
              <v-row justify="end">
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
                        <v-list-item to="/">
                        <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/blog">
                        <v-list-item-title>Blog</v-list-item-title>
                        </v-list-item>
                        <v-list-item to="/servicios">
                        <v-list-item-title>Servicios</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-btn to="/" color="#640b64" large dark class="d-none d-md-flex mx-1">Home</v-btn>
                <v-btn to="/blog" color="#640b64" large dark class="d-none d-md-flex mx-1">Blog</v-btn>
                <v-btn to="/servicios" color="#640b64" large outlined class="d-none d-md-flex mx-1">Servicios</v-btn>

              </v-row>

            </v-col>

            <v-col cols="1">

              <v-select background-color="#640b64" dark solo hide-details :items="langs" v-model="$root.$i18n.locale"/>
            </v-col>
              
          </v-row>

      </v-container>

  </v-app-bar>
</template>

<script>
export default {
  data () {
    return { langs: ['es', 'en'] }
  }
}
</script>

<style>

</style>