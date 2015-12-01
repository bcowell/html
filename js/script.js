function initMap() {
	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 44.536479, lng: -79.7330677},
    zoom: 8
  });
}