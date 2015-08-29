'use strict';
module.exports = function(app){
    
    app.controller('NewOrderController', ['$scope','securities','pyjacOMSService', require('./NewOrder/NewOrderController')]);
    app.controller('MyOrdersController', ['$scope', 'orders','ordersService','securities','pyjacOMSService',require('./MyOrders/MyOrdersController')]);
   
};
