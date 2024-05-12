<template lang="pug">
  .map
    .map__wrapper
      client-only
        gmap-map(
          :center='mapCenterCoords'
          :zoom='mapZoom'
          :options='mapOptions'
          ref='map'
        ).map__gmap
          gmap-marker(
            :position='mapCenterCoords'
            :clickable='true'
            :icon='"/img/pin.svg"'
          ).map__marker
    .map__actions
      button(
        type='button'
        @click='setCurrentCity("new york")'
        :class='{"map__btn_active" : currentCity === "new york"}'
        ).map__btn.btn.btn_color_black new york
      button(
        type='button'
        @click='setCurrentCity("moscow")'
        :class='{"map__btn_active" : currentCity === "moscow"}'
        ).map__btn.btn.btn_color_black moscow
</template>

<script>
  export default {
    name: 'AppMap',
    data() {
      return {
        currentCity: 'moscow',
        mapCenterCoords: { lat: 55.775410, lng: 37.680050 },
        mapZoom: 16,
        mapOptions: {
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          disableDefaultUi: true,
          styles: [
            {
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#f5f5f5'
                }
              ]
            },
            {
              'elementType': 'labels.icon',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#616161'
                }
              ]
            },
            {
              'elementType': 'labels.text.stroke',
              'stylers': [
                {
                  'color': '#f5f5f5'
                }
              ]
            },
            {
              'featureType': 'administrative.land_parcel',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#bdbdbd'
                }
              ]
            },
            {
              'featureType': 'poi',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#eeeeee'
                }
              ]
            },
            {
              'featureType': 'poi',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#757575'
                }
              ]
            },
            {
              'featureType': 'poi.park',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#e5e5e5'
                }
              ]
            },
            {
              'featureType': 'poi.park',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#9e9e9e'
                }
              ]
            },
            {
              'featureType': 'road',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#ffffff'
                }
              ]
            },
            {
              'featureType': 'road.arterial',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#757575'
                }
              ]
            },
            {
              'featureType': 'road.highway',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#dadada'
                }
              ]
            },
            {
              'featureType': 'road.highway',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#616161'
                }
              ]
            },
            {
              'featureType': 'road.local',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#9e9e9e'
                }
              ]
            },
            {
              'featureType': 'transit.line',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#e5e5e5'
                }
              ]
            },
            {
              'featureType': 'transit.station',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#eeeeee'
                }
              ]
            },
            {
              'featureType': 'water',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#c9c9c9'
                }
              ]
            },
            {
              'featureType': 'water',
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'color': '#9e9e9e'
                }
              ]
            }
          ]
        },
        markers: {
          moscow: { lat: 55.775410, lng: 37.680050 },
          newYork: { lat: 40.617120, lng: -73.956810 }
        },
      };
    },
    methods: {
      setCurrentCity(city) {
        this.currentCity = city;
        switch (city) {
        case 'moscow':
          this.mapCenterCoords = this.markers.moscow;
          break;
        case 'new york':
          this.mapCenterCoords = this.markers.newYork;
          break;
        default:
          this.mapCenterCoords = this.markers.moscow;
          break;
        }
      }
    }
  };
</script>

<style lang="sass">
  @import "AppMap"
</style>
