/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 11/5/13
 * Time: 9:43 AM
 * To change this template use File | Settings | File Templates.
 */

eventsApp.directive('mySample', function($compile) {

    return {
              restrict: "A",
              template:  " <input type='text' ng-model='sampleData' /> {{sampleData }} <br/>",
              scope: {}
    }
});