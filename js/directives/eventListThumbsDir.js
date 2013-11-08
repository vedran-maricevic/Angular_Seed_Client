/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 11/8/13
 * Time: 10:26 AM
 * To change this template use File | Settings | File Templates.
 */

'use strict';


eventsApp.directive('eventList', function($compile) {

    return {
        restrict: "E",
        replace: true,   //this removes the event-list tag from rendered HTML in the DOM, to maintain valid HTML
        templateUrl: '/templates/directives/eventListThumbs.html'
    }
});