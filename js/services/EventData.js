eventsApp.factory('eventData', function ($resource, $q) {
    var resource = $resource('/data/event/:id', {id: '@id'});

    var testResource = $resource('http://localhost\\:3000/collections/Events/:id');

    //app.get('/collections/:collectionName/:id', function(request, response) {


/*
    angular.module("port", ["ngResource"]).factory('Tracker', function($resource){
        return $resource('http://198.61.201.6\\:8000/api/v1-dev/trackers');
    }).run(function(Tracker){
            Tracker.get();
        });
*/



    ///collections/:collectionName/:id

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

            //In development
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

              //$resource('http://example.com:8081\:8081');

            var resourceGetAll = $resource(':port/collections/:collectionName/', { port: ':3000'});

            return resourceGetAll.get({collectionName: 'Events' });

        }
    };
});

/*

var CreditCard = $resource('/user/:userId/card/:cardId',
    {userId:123, cardId:'@id'}, {
        charge: {method:'POST', params:{charge:true}}
    });

// We can retrieve a collection from the server
var cards = CreditCard.query(function() {
    // GET: /user/123/card
    // server returns: [ {id:456, number:'1234', name:'Smith'} ];

    var card = cards[0];
    // each item is an instance of CreditCard
    expect(card instanceof CreditCard).toEqual(true);
    card.name = "J. Smith";
    // non GET methods are mapped onto the instances
    card.$save();
// POST: /user/123/card/456 {id:456, number:'1234', name:'J. Smith'}
// server returns: {id:456, number:'1234', name: 'J. Smith'};


*/



//THIS APPROACH WORKS AS WELL, HOWEVER IT USING NON IDEAL CALLBACKS!!!!
/*
eventsApp.factory('eventData', function ($http, $log) {

          return {

              getEvent: function(successcb) {

                   $http({method: 'GET', url:'/data/event/1'}).
                       success(function(data, status, headers, config) {
                          console.log(data);
                           successcb(data);
                       }).
                       error(function(data, status, headers, config) {
                           $log.warn(data, status, headers, config)
                       });

     }
  };
});

*/
