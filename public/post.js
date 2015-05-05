$(function() {
   if($('#post-map'))
   {
      var gpx = $('#post-map').data('gpx');

		// create a map in the "map" div, set the view to a given place and zoom
		var map = L.map('post-map').setView([51.505, -0.09], 13);

		// add an OpenStreetMap tile layer
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		}).addTo(map);

		new L.GPX(gpx, {async: true,
		  marker_options: {
						    startIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-start.png',
						    endIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-end.png',
						    shadowUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-shadow.png'
         }}).on('loaded', function(e) {
		  map.fitBounds(e.target.getBounds());
		}).addTo(map);
   }
} )