<template>
  <v-app >
    <Menu/>
    
    <v-container fluid fill-height class="py-0"> 
      <v-fade-transition mode="out-in">
        <router-view></router-view> 
      </v-fade-transition>
    </v-container>

    <ToTopButton/>
    <SitemapCTA/>    
  </v-app>
</template>

<script>
import ToTopButton from './components/globalComponents/ToTopButton'
import Menu from './components/globalComponents/Menu'
import SitemapCTA from './components/globalComponents/SitemapCTAB'

export default {
  name: 'App',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Taste Marketing',
    // all titles will be injected into this template
    titleTemplate: '%s | Taste MKT'
  },
  components: {
    Menu,
    SitemapCTA,
    ToTopButton
  },
  data: () => ({
  })
};
</script>

<style lang="scss">
@import './assets/css/style.scss';
</style>
