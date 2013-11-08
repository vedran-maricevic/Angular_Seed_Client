'use strict';

/* Filters */


//filter is always designed as a function that returns a function


   eventsApp.filter('durations', function() {

       return function(duration) {
             switch(duration) {
                 case 1:
                     return "Half Hour";
                 case 2:
                     return "1 hour";
                 case 3:
                     return "Half day";
                 case 4:
                     return "Full day"
                 default:
                     return "---"
             }
       }
   });

