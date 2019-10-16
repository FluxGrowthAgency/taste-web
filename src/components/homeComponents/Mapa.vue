<template>
  <LMap 
  style="height: 30em; width: 100%"
  :zoom="zoom"
  :center="centerMex"
  ref="myMap">
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
  </LMap>
</template>

<script>
import {LMap, LTileLayer, LMarker, LIcon, LPopup } from 'vue2-leaflet';

export default {
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 6,      
      iconSize: [60, 40],
      latLngGuadalajara: [20.6982203, -103.3799727],
      latLngCDMX: [19.4288039, -99.1767325],
      centerMex: [],

      // bounds: null
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
    this.centerMex[0] = (this.latLngCDMX[0]+this.latLngGuadalajara[0])/2;
    this.centerMex[1] = (this.latLngCDMX[1]+this.latLngGuadalajara[1])/2;
  }
}
</script>

<style>

</style>