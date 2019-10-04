<template>
  <v-app>
    <Menu/>

    
    <v-container fluid>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-container>
    

    <Footer/>    
  </v-app>
</template>

<script>
import Menu from './components/globalComponents/Menu'
import Footer from './components/globalComponents/Footer'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import './assets/css/style.scss';
h1{
  @include random-bgr()
}
</style>
