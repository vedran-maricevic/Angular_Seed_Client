// Declare app level module which depends on filters, and services

 //declared as variable so it is accessible on windows scope.
var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource','ngCookies']).
        config(function ($routeProvider){
           $routeProvider.when('/newEvent',
               {
                  templateUrl: 'templates/NewEvent.html',
                  controller: 'EditEventController'
               });

           $routeProvider.when('/showEvent/:eventId',
               {
                   templateUrl: 'templates/EventDetails.html',
                   controller: 'EventController'
               });

            $routeProvider.when('/events',
               {
                   templateUrl: 'templates/EventList.html',
                   controller: 'EventsListController'
               });

            $routeProvider.when('/sampleDirective',
              {
                templateUrl: 'templates/directives/sampleDirective.html',
                controller: 'sampleDirectiveController'
             });

            $routeProvider.otherwise(
                {      //Default routing
                    redirectTo: '/events'
                });
        });


   //This is required for CORS !!!!!!!!!!!
eventsApp.config(['$httpProvider', function($httpProvider) {

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

