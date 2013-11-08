eventsApp.factory('eventData', function ($resource, $q) {
    var resource = $resource('/data/event/:id', {id: '@id'});

    var testResource = $resource('http://localhost\\:3000/collections/Events/:id');


    return {
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
        },

        getEventById: function (eventId) {
            var deferred = $q.defer();

            testResource.get({id: eventId},
                function (event) {
                    console.log("--This is (EVENT): " + event + " --");
                    deferred.resolve(event);
                },
                function (response) {
                    console.log("This is (RESPONSE): " + event);
                    deferred.reject(response);
                });

            return deferred.promise;
        },

        saveEvent: function(event) {
            var deferred = $q.defer();
            event.id = 798;
            resource.save(event,
                function(response) {
                    console.log("-- Success. Event is saved. --");
                    deferred.resolve(response);
                },
                function(response) {
                    console.log("Fail");
                    deferred.reject(response);
                }
            );
            return deferred.promise;
        },
        getAllEvents: function() {
            console.log('-- getAllEvents accessed --') ;
            //return resource.query();

            var resourceGetAll = $resource(':port/collections/:collectionName/', { port: ':3000'});

            return resourceGetAll.get({collectionName: 'Events' });

        }
    };
});

