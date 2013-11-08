/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 11/7/13
 * Time: 4:14 PM
 * To change this template use File | Settings | File Templates.
 */


eventsApp.directive('mainMenu', function($compile) {
    return {
        restrict: "A", //Check for more attributes...
        replace: true,
        //template:  "<div class='navbar'><div class='navbar-inner'><ul class='nav'><li> <a href='#/newEvent'>Create New Event</a>  </li><li> <a href='#/events'>Show Available Events</a> </li><li> <a href='#/sampleDirective'>Sample directive stuff</a> </li></ul></div></div>"
        templateUrl: '/templates/directives/menuTemplate.html'
    }
});