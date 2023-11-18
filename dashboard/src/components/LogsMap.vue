<template>
  <div style="height: 75vh; width: 50vw">
    <l-map v-model="zoom" v-model:zoom="zoom" :center="[latitude, longitude]">
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>

      <l-rectangle
        :lat-lngs="[
          [46.334852, -1.509485],
          [46.342596, -1.328731],
          [46.241487, -1.190568],
          [46.234787, -1.358337]
        ]"
        :fill="true"
        color="#35495d"
      />
    </l-map>
  </div>
</template>
<script>
import { LMap, LTileLayer, LRectangle } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'
export default {
  components: {
    LMap,
    LTileLayer,
    LRectangle
  },
  data() {
    return {
      iconWidth: 25,
      iconHeight: 40,
      latitude: 40.2085,
      longitude: -3.713,
      zoom: 6
    }
  }
}
</script>
