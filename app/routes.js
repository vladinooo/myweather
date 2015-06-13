weatherApp.config(function($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'app/components/home/views/home.html',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'app/components/forecast/views/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:days', {
            templateUrl: 'app/components/forecast/views/forecast.html',
            controller: 'forecastController'
        })
});