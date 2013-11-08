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
                   vedranProperty: 'vedran',
                   templateUrl: 'templates/EventList.html',
                   controller: 'EventsListController'
               });

            $routeProvider.when('/sampleDirective',
              {
                vedranProperty: 'vedran',
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






/*
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
*/
