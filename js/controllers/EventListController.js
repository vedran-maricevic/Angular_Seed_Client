/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 10/29/13
 * Time: 4:30 PM
 * To change this template use File | Settings | File Templates.
 */


'use strict';

 eventsApp.controller('EventsListController',
     function EventsListController($scope, $location, eventData, MainConnector) {
                    console.log("-- EventsListController has been accessed. --");

             //$scope.events = eventData.getEvent(2);
            //$scope.events = eventData.getAllEvents();    //This works well with File System and pure NOde.js
             var test = MainConnector.getAllEventsOnLoad();

              test.then(function(allEvents) {
                    $scope.events = allEvents;
              })
     }
 );


