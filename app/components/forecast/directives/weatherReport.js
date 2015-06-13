weatherApp.directive('weatherReport', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/forecast/directives/weather-report.html',
        replace: true,
        scope: {
            weatherDay: '=',
            convertToStandard: '&',
            convertToDate: '&',
            dateFormat: '@'
        }
    }
});