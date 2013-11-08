/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 10/23/13
 * Time: 10:47 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';



eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {


            $scope.saveEvent = function(event, newEventForm) {
                console.log(newEventForm);
                 if(newEventForm.$valid){
                     eventData.saveEvent(event);
                 }
            };
            $scope.cancelEditEvent = function() {
            window.location = '/index.html';
            }
    }
);