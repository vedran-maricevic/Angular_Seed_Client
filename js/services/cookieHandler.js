/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 10/29/13
 * Time: 10:51 AM
 * To change this template use File | Settings | File Templates.
 */

eventsApp.factory('cookieHandler', function($cookieStore ) {

           return {
               saveCookieByName: function (eventInformation) {

                   $cookieStore.put('vedran', eventInformation.name);
                   console.log("Button is hit, cookies should be saved now");
               },

               getCookieByName: function (someUser) {
                     console.log("Where I Am?");
                     return  $cookieStore.get('vedran');
               },

               deleteCookieByName: function() {
                   console.log("Cookie removed. Contest should be visible now");
                   $cookieStore.remove('vedran');
               }
           };
});