<template>
  <v-container >
        <h2 class="section-title text-center section-title-degradado title-size-big ">
          {{$t('home.mapa.title')}} 
        </h2>
    <v-row align="center" justify="center" class="pb-8 ">
      <v-col cols="10" md="6">
        <hr class="underline">
      </v-col>
    </v-row>

    <LMap 
    class="map-y-spacing"
    style="height: 30em; width: 100%"
    :zoom="zoom"
    :center="centerMex"
    ref="myMap"
    
    :options="{scrollWheelZoom:false}"
    >
      <LTileLayer 
      className="mapa"
      :url="url"/>

      <LMarker :lat-lng="latLngCDMX">
        <LIcon
          :iconSize="iconSize"
          :icon-url="require('../../assets/img/pin.svg')" >
        </LIcon>
        <LPopup > 
          <b>CDMX</b>
          <br/>Descartes 60, Col. Anzures,
          <br/>CP 11590 Ciudad de México
          <br/>Tel. +52 (55) 8525-0879
        </LPopup>
      </LMarker>
      <LMarker :lat-lng="latLngGuadalajara">
        <LIcon
          :iconSize="iconSize"
          :icon-url="require('../../assets/img/pin.svg')" >
        </LIcon>
        <LPopup > 
          <b>Guadalajara</b>
          <br/>Bogotá #2647, Col. Providencia
          <br/>CP 44630 Guadalajara, Jalisco
          <br/>Tel. +52 (33) 3817-3029
        </LPopup>
      </LMarker>
      <LMarker :lat-lng="latLngMonterrey">
        <LIcon
          :iconSize="iconSize"
          :icon-url="require('../../assets/img/pin.svg')" >
        </LIcon>
        <LPopup > 
          <b>Monterrey</b>
          <br/>Blvd. Antonio L. Rodríguez 1888
          <br/>Santa María
          <br/>CP 64650 Monterrey, Nuevo Leon
          <br/>Tel. +52 (33) 3817-3029
        </LPopup>
      </LMarker>
    </LMap>    
  </v-container>
</template>

<script>
import {LMap, LTileLayer, LMarker, LIcon, LPopup } from 'vue2-leaflet';

export default {
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 5,      
      iconSize: [60, 40],
      latLngGuadalajara: [20.6982203, -103.3799727],
      latLngCDMX: [19.4288039, -99.1767325],
      latLngMonterrey: [25.670317, -100.3817654],
      centerMex: []
    };
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup
  },
  created: function definirCentroMapa(){
    this.centerMex[0] = (this.latLngCDMX[0]+this.latLngGuadalajara[0]+this.latLngMonterrey[0])/3;
    this.centerMex[1] = (this.latLngCDMX[1]+this.latLngGuadalajara[1]+this.latLngMonterrey[1])/3;
  }
}
</script>

<style scoped>
.map-y-spacing{
  margin-bottom: 5em;
}
.fondo{
  background-color: aqua
}

</style>