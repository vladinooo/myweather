weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'weatherService',
    function($scope, $resource, $routeParams, cityService, weatherService) {

        $scope.city = cityService.city;
        $scope.days = $routeParams.days || 5;

        $scope.weatherResults = weatherService.getWeather($scope.city, $scope.days);

        $scope.roundTemperature = function(temperature) {
            return Math.round(temperature);
        };

        $scope.convertToDate = function(date) {
            return new Date(date * 1000);
        };

    }]);