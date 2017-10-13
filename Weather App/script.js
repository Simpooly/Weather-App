if ("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude);
    });
}else{
	console.log("Can't find your location");
}
