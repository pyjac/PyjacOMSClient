'use strict';

var MyOrdersController = function($scope ,orders, ordersService,securities,pyjacOMSService) {
     $scope.formData = {};
     $scope.formMassAction ={};
     $scope.securities = securities.data;
  $scope.orders= orders.data;
  console.log(orders.data);
    var updateOrders = function(){
    $scope.orders = ordersService.orders;
  };
  $scope.CancelOrder = function(id,side){
    //pyjacOMSService.newOrder($scope.userName,$scope.formData);
        
      var dformData= {};
       dformData.ClOrdID=id; 
       dformData.Side=side;
      pyjacOMSService.CancelOrder(dformData);
  };
  $scope.OrderStatus = function(id,side){
    //pyjacOMSService.newOrder($scope.userName,$scope.formData);
       
      var dformData= {};
       dformData.ClOrdID=id; 
       dformData.Side=side;
      pyjacOMSService.OrderStatus(dformData);
  };
  $scope.CancelAllOrders = function(){
    //pyjacOMSService.newOrder($scope.userName,$scope.formData);
      
      pyjacOMSService.CancelAllOrders();
  };
  $scope.AllOrdersStatus = function(){
   
      
      pyjacOMSService.AllOrdersStatus();
  };
  $scope.CancelAllOrdersForSecurity = function(){
    var dformData = {};
    dformData.SecurityID = $scope.formMassAction.symbol;
    pyjacOMSService.CancelAllOrdersForSecurity(dformData);
  };
  
  
  $scope.ModifyOrder = function(id){
    //pyjacOMSService.newOrder($scope.userName,$scope.formData);
       var result = $.grep($scope.orders, function(e){ return e.Id == id; });
       if (result.length == 0) {

      // not found
    } else if (result.length == 1) {
      // access the foo property using result[0].foo
      $scope.formData.ClOrdID = result[0].Id;
      $scope.formData.volume = result[0].OrderQty;
      $scope.formData.displayQty = result[0].DisplayQty;
      $scope.formData.account = result[0].Account;
      $scope.formData.price= result[0].Price;
      $scope.formData.orderType= result[0].OrderType;
      $scope.formData.timeInForce = result[0].TimeInForce;
      var mod = $('#orderModificationModal');
     
      mod.modal('show');

    } else {
      // multiple items found
    }
      
  };
$scope.newModifyOrder = function(){
  console.log( $scope.formData);
   pyjacOMSService.ModifyOrder($scope.formData);
  
};
  
  

  ordersService.registerObserverCallback(updateOrders);
/*
lol : function(ordersService) {
              console.log("HERE");
              return ordersService.getOrders().success(function (orders) {
                      
                      console.log(orders);
                  })
                  .error(function (error) {
                    console.log(error.message);
                      
                  });
            }*/
};

module.exports = MyOrdersController;