/**
 * Created with JetBrains WebStorm.
 * User: VedranMa
 * Date: 10/30/13
 * Time: 2:52 PM
 * To change this template use File | Settings | File Templates.
 */

eventsApp.factory('MainConnector', function($http, $q, $resource ) {

    //proper implementation of the resource, showing how to escape the values
    var resource = $resource('http://localhost\\:3000/collections/Events/:id');


    console.log("MainConnector has been accessed.");
    return {
        mainConnection: function( ) {
            var deferred = $q.defer();

            var dataOne = {id: 1};

            $http.post("http://localhost:3000/courses", dataOne)
                .success(function(data, status, headers, config) {
                    console.log(data);
                    deferred.resolve(data);
                    console.dir("---COMING FROM---" + data);
                    $scope = data;
                }).error(function(data, status, headers, config) {
                    $scope.status = status;
                    deferred.reject("An error occured while getting the data back");
                });

               return deferred.promise;
        },

        //Fill the Drop Down box with event names
        getEventNames: function() {
            var deferred = $q.defer();

            var dataOne = {id: 1}; //Auxilary information if required

            $http.post("http://localhost:3000/eventlist", dataOne)
                .success(function(data, status, headers, config) {
                    console.log(data);
                    deferred.resolve(data);
                    console.dir("---COMING FROM MAIN CONNECTOR---" + data);
                    $scope = data;
                }).error(function(data, status, headers, config) {
                    $scope.status = status;
                    deferred.reject("An error occured while getting the data back");
                });

            return deferred.promise;
        },

         getSpecificEvent: function (eventName) {
             var deferred = $q.defer();
                 // but make it work initialy using post
                //fix this to use GET
             var dataOne = {name: eventName}; //Auxilary information if required

             $http.post("http://localhost:3000/getspecificevent", dataOne)
                 .success(function(data, status, headers, config) {
                     deferred.resolve(data);
                     console.dir("---COMING FROM Main Connection Service (Method Name: getSpecificEvent) ---" + data);
                     $scope = data;
                 }).error(function(data, status, headers, config) {
                     $scope.status = status;
                     deferred.reject("An error occured while getting the data back");
                 });

             return deferred.promise;
         },

        //Get all events on Load   This is tested and is working
        getAllEventsOnLoad: function() {

            var obj = {content:null};

            var deferred = $q.defer();

            console.log("Connection established. Commencing now.");
            $http.get('http://localhost:3000/Collections/Events').success(function(data) {
                deferred.resolve(data);
                obj.content = data;
            }).error(function(data) {
                    deferred.reject("An error occured while getting the data back");
                });
            return deferred.promise;
        },

         //trying to do the same thing using $resource property
        getEvent: function (eventId) {

        var deferred = $q.defer();

            resource.get({id: eventId},
            function (event) {
                console.log("--This is (EVENT): " + event + " --");
                deferred.resolve(event);
            },
            function (response) {
                console.log("This is (RESPONSE): " + event);
                deferred.reject(response);
            });

        return deferred.promise;
       }
    };
});