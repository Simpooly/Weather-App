//get location of user
  $(document).ready(function() {

  var longitude = "";
  var latitude = "";
  var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
  var temp = "";
  

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
    icon = data.weather[0].icon;

    $(".temp").html(temp);
    $(".weather").html(weather);

    //$("#icon").attr('src', icon);
    //document.getElementById("icon").src= url;
      var num = $(".temp").html();
      

    far = Math.floor((num * 9) / 5 + 32);
    $(".temperature-text").html(num + " °F");

    $("#tweet").click(function () {
      //makes text change
       var text = $('#tweet').text();
       $(this).text(text == "°F" ? "°C" : "°F");
       $(".temp").html(far);
    });
  });
}
getData();

  
  
//

});

//temperature conversion

//Fahrenheit to Celsius : (°F − 32) ÷ 1.8 = °C 
//Celsius to Fahrenheit : (°C × 1.8) + 32 = °F

//open data in new window
//$("#tweet").on("click", function(){
  //     
    //var qString = $(".quote").html(quote);
		//window.open(url);
		//console.log(tweet);
    //});

