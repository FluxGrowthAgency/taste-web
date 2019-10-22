<template>
  <v-app>
    <Menu/>

    
    <v-container fluid fill-height class="py-0"> <!-- quitar fill-height -->
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-container>
    

    <SitemapCTA/>    
  </v-app>
</template>

<script>
import Menu from './components/globalComponents/Menu'
import SitemapCTA from './components/globalComponents/SitemapCTA'

export default {
  name: 'App',
  components: {
    Menu,
    SitemapCTA
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import './assets/css/style.scss';
</style>
