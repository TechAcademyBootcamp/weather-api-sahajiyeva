var city_name = prompt("Where are you right now?");
var tempC;
var tempF;
$('document').ready(function(){
  
  //get zip date from http://ip-api.com/json 
   var location = "http://ip-api.com/json";
  $.getJSON( location, function(data){
         var zip = data.zip;  
    console.log(zip);
        //  var countryCode = data.countryCode;
         var city = data.city;
         var country = data.country;
  //  console.log(data);
    // get the weather api date 
   // http://api.openweathermap.org/data/2.5/weather?q=90026,us&appid=48e3799abf6898b90abd831899420bae
    $.getJSON ( "https://api.openweathermap.org/data/2.5/weather?q=Baku&APPID=48e3799abf6898b90abd831899420bae", function(data) {
      console.log(data);
   //our data
      var tempK = data.main.temp;
    tempC = Math.round((tempK-273.15));
    tempF = Math.round((tempC * 1.8 + 32));
     var description = data.weather[0].description;
      var descriptionU;
       var humidity = data.main.humidity;
      
      String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
    
      
        //apply date to page
       $("#humidity").html("Humidity"+"<br />"+humidity + "%");
      $("#description").html(description.capitalize());
      $("#temp").html(tempC +"°C");
        console.log(data);
      $("#city").html(city);
      $("#country").html(country);
        $("#farenheit").on("click", function () {
        $("#farenheit").addClass("active");
        $("#celsius").removeClass("active");
        $("#temp").html(tempF + "°F");
      })
        $("#celsius").on("click", function () {
        $("#celsius").addClass("active");
        $("#farenheit").removeClass("active");
        $("#temp").html(tempC + "°C");
      })   
      
      
      
  
    });
 ; })
});