'use strict';

var ordersService = function($http) {

    var urlBase = 'http://localhost:8800/api/orders';
    
    var dataFactory = {};
    var observerCallbacks = [];

    dataFactory.orders = [];

    //example of when you may want to notify observers
      //dataFactory.orders = $http.get(urlBase).$then(function(){
      //  notifyObservers();
      //});

    dataFactory.getOrders = function () {
         return $http.get(urlBase);
        
    };

    dataFactory.updateOrders = function (order) {
        orders.push(order);
    };

    dataFactory.getOrder = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertOrder = function (cust) {
        return $http.post(urlBase, cust);
    };

    dataFactory.updateOrder = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust);
    };

    dataFactory.deleteOrder = function (id) {
        return $http.delete(urlBase + '/' + id);
    };



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

module.exports = ordersService;