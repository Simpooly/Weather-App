//get location of user
  $(document).ready(function() {

  var longitude = "";
  var latitude = "";
  var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;

  //Get location
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


//get data and post to page
function getData(){
  $.getJSON(url, function(data) {
    //document.write(data.main.temp);
    temp = data.main.temp;
    weather = data.weather[0].main;

    //console.log(we);
    $(".temp").html(temp);
    $(".weather").html(weather);
    //$(".weather").html(JSON.stringify(json));
  });
}
getData();








});




// $("#tweet").on("click", function(){
  //    // Only change code below this line.
    //  $.getJSON(url, function(json) {
  //$(".weather").html(JSON.stringify(json));
//});


//$("#tweet").on("click", function(){
  //     
    //var qString = $(".quote").html(quote);
		//window.open(url);
		//console.log(tweet);
    //});

