weatherApp.service('weatherService', ['$resource', function ($resource) {

    this.getWeather = function (city, days) {

        customJs.openModal();

        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
            {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

        return weatherAPI.get({q: city, cnt: days, units: 'metric', APPID: 'd3f5fa5abb1f73fbd4d119d665ce986d'}, function() {

            customJs.closeModal();

        });
    };

}]);
