'use strict';

eventsApp.controller('EventController',
        function EventController($scope, eventData, MainConnector, cookieHandler, $routeParams, $route) {

              $scope.saveCookie = function(name) {
                  cookieHandler.saveCookieByName(name);
              },

              $scope.deleteCookie = function () {
                  cookieHandler.deleteCookieByName();
              },

              $scope.reload = function () {
                   $route.reload();
              },

              $scope.getDataFromMongo = function() {
                        console.log("I am getting to EventController.")   ;
                  MainConnector.mainConnection();

              },

              $scope.viewedContest = false;  //Show or Hide the viewed content by user
              $scope.sortorder = 'name';
              $scope.snippet = '<span style="color:#ff3217"> hi there</span>';
              $scope.showImage = true;
              $scope.buttonDisabled = true;
              $scope.myStyle = {
                color: 'blue',
                fontStyle: "italic"

              },
              $scope.myClass = 'blue';

              $scope.pleasework = 1;

              $scope.event = MainConnector.getEvent($routeParams.eventId)     //replace with eventData
                  .then (function(event) {

                      //TO DO check is this correct way of doing things.
                      // I dont think this way of accessing property name is intended, but what do I know >:)
                      console.log("WWW" + $route.routes['/events'].vedranProperty);

                      var cookieValue = cookieHandler.getCookieByName();

                      if (typeof (cookieValue) !== "undefined") {
                         $scope.viewedContest = true;
                         console.log("We got some cookies stored on user PC");
                         console.log("Setting the SHOW/HIDE control value to true");

                      }  else {
                          $scope.viewedContest = false;
                          console.log("No cookies detected.");
                          console.log("Unsetting the SHOW/HIDE control value to false");
                      }

                      $scope.event = event;
                  }
              );

              $scope.eventNamesLists = function () {
                  var eventName = MainConnector.getEventNames();
                      eventName.then(function (eventnames){
                          console.log("Listbox is loaded with default values ");
                         $scope.eventNamesLists = eventnames;
                          console.dir($scope.eventNamesLists);
                     });
              };

              $scope.eventNameList = function (elementPosition) {
                  $scope.eventNameList = $scope.eventNamesLists[elementPosition];

              },

              $scope.selectedEvent = function(value) {
                 //call to express to fetch selected entry
                 var result =  MainConnector.getSpecificEvent(value);

                   result.then(function (event){
                       console.log("Incoming EVENT here");
                       console.dir(event);
                       $scope.event = event;
                   })
               },

              //Change the event based on the issued id
              $scope.hitMe = function(id) {
                        console.log("I just got hit");
                  //result is deffered
                  var result =  MainConnector.mainConnection();

                  result.then(function (events){
                      console.log("Incoming HIT EVENT  here");
                      console.dir(event);
                      $scope.event = events;
                  })
              },

              $scope.upVoteSession = function(session){

                console.log($scope.event);
                session.upVoteCount++;
              };

              $scope.downVoteSession = function(session){
                session.upVoteCount--;
            };

            $scope.showName = function (session) {
                alert(session.name)
            };
        }
);