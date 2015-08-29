'use strict';

var securitiesService = function($http) {

    var urlBase = 'http://localhost:8800/api/securities';
    
    var dataFactory = {};
    var observerCallbacks = [];

    //dataFactory.orders = [];

    //example of when you may want to notify observers
      dataFactory.securities = $http.get(urlBase);
      //.$then(function(){
        //notifyObservers();
      //});

    dataFactory.getSecurities = function () {
        return $http.get(urlBase);
    };

    dataFactory.getSecurity = function (id) {
        return $http.get(urlBase + '/' + id);
    };
/*
    dataFactory.insertOrder = function (cust) {
        return $http.post(urlBase, cust);
    };

    dataFactory.updateOrder = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    dataFactory.deleteOrder = function (id) {
        return $http.delete(urlBase + '/' + id);
    };
*/


  //register an observer
  dataFactory.registerObserverCallback = function(callback){
    observerCallbacks.push(callback);
  };

  //call this when you know 'foo' has been changed
  var notifyObservers = function(){
    angular.forEach(observerCallbacks, function(callback){
      callback();
    });
  };

  

   

    return dataFactory;
};

module.exports = securitiesService;