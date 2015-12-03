function facebookFeed(d, s, id) 
{
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
};
function initMap()
{
	var latLng = {lat: 44.5365, lng: -79.7309};
	
	var map = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: 10,
	destination: {place_id: 'ChIJBfci1HukKogRB2KPTBKozio'}
    });
  
	var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
}