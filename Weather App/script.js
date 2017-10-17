//get location of user
  $(document).ready(function() {

  var longitude = "";
  var latitude = "";
  var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;

  function getLocation(){
    if ("geolocation" in navigator){
          navigator.geolocation.getCurrentPosition(function(position) {
          //console.log(position.coords.latitude, position.coords.longitude);
          latitude = position.coords.latitude;
          longitude = position.coords.longitude
        });
    }else{
    	console.log("Can't find your location");
    }
  }

  getLocation();




$.getJSON(url, function(data) {
    console.log(data);
});









});
//$("#tweet").on("click", function(){
  //     
    //var qString = $(".quote").html(quote);
		//window.open(url);
		//console.log(tweet);
    //});

