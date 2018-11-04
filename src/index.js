import Map from './modules/map'
import $ from 'jquery'

$(function(){
  let $appContainer = $('#app')

  $appContainer.append('<div id="map" style="width: 100%; height: 100%; padding: 0; margin: 0;"></div>')

  let map = new Map({
    container: 'map',
    center: [55.558465, 37.802045],
    zoom: 14,
    controls: ['zoomControl']
  })

  map.init()
})
