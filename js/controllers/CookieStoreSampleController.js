/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 10/29/13
 * Time: 9:43 AM
 * To change this template use File | Settings | File Templates.
 */


eventsApp.controller('CookieStoreSampleController',
    function CookieStoreSampleController($scope, $cookieStore){

          $scope.event = {
              id: 1,
              name: 'MyEvent'
          }

           $scope.userDetails = {

               name: 'Vedran'
           }




        $scope.saveEventToCookie = function (event) {
        $cookieStore.put('vedran', event)
        };


        $scope.getEventFromCookie = function () {
        console.log( $cookieStore.get('vedran'));
        }

        $scope.removeEventCookie = function () {
            $cookieStore.remove('vedran');
        }


        $scope.saveUserDetails = function () {
            $cookieStore.put('userDetails', userDetails)
        }


    });