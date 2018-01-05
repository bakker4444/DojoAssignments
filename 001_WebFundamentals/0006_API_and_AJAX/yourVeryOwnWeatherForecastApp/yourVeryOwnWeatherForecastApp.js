$(document).ready(function(){

    $(".weatherform").submit(function(){
        // City Temperature
        var preUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
        var cityName = $("#inputcity").val().replace(" ","%20");
        var preMykey = "&appid=";
        var myKey = "PRIVATE KEY (DELETED)";
        var urlTotal = preUrl + cityName + preMykey + myKey;

        $.get(urlTotal, function(weatherData){
            // console.log(weatherData);
            var tempKelvin = weatherData["main"]["temp"];
            var tempFahrenheit = parseInt(Math.round((9/5) * (tempKelvin - 273) + 32));

            $(".temperature").html(
                "Temperature: " + tempFahrenheit + "° F "
            );
        }, "json");
        
        // Weekly Forecast (additional feature)
        // Need to fix the date information
        // Image source: https://darksky.net/help#+15
        var urlForecastPre = "https://api.openweathermap.org/data/2.5/forecast?q=";
        var cityName = $("#inputcity").val().replace(" ","%20");
        var urlForecastTotal = urlForecastPre + cityName + preMykey + myKey;
        $(".weatherForecast").html("<table class='tableforecast'><tr><th>Dates</th><th>Weather</th></tr></table>");
        $.get(urlForecastTotal,function(forecastData){
            // console.log(forecastData)
            
            // Weather Image Code
            for(var i=0; i< forecastData["list"].length; i++ ){
                if (forecastData["list"][i]["weather"][0]["description"] == "clear sky"){
                    $(".tableforecast").append(
                        "<tr><td>"+forecastData["list"][i]["dt_txt"]+"</th><th><img src='clearfull.png'></td></tr>"
                    );
                } else if (forecastData["list"][i]["weather"][0]["description"] == "broken clouds"){
                    $(".tableforecast").append(
                        "<tr><td>"+forecastData["list"][i]["dt_txt"]+"</th><th><img src='partlycloud.png'></td></tr>"
                    );
                } else if (forecastData["list"][i]["weather"][0]["description"] == "light rain" ){
                    $(".tableforecast").append(
                        "<tr><td>"+forecastData["list"][i]["dt_txt"]+"</th><th><img src='raining.png'></td></tr>"
                    );
                } else if (forecastData["list"][i]["weather"][0]["description"] == "moderate rain"){
                    $(".tableforecast").append(
                        "<tr><td>"+forecastData["list"][i]["dt_txt"]+"</th><th><img src='sleet.png'></td></tr>"
                    );
                } else if (forecastData["list"][i]["weather"][0]["description"] == "few clouds"){
                    $(".tableforecast").append(
                        "<tr><td>"+forecastData["list"][i]["dt_txt"]+"</th><th><img src='foggy.png'></td></tr>"
                    );
                }
            };
        },"json");

        return false;

    });

});
