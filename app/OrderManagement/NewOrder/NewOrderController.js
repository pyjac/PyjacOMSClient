'use strict';

var NewOrderController = function($scope,securities,pyjacOMSService) {
    $scope.formData = {};
    console.log(securities);
    $scope.securities = securities.data;
    $scope.newBuyOrder = function(){
        $scope.formData.expireDate = "10/10/2014";
        $scope.formData.ClOrdID = "";
         $scope.formData.OrderID ="";
         $scope.formData.Side  = "1";
        console.log($scope.formData);
        //pyjacOMSService.newOrder($scope.userName,{ Name : 'jacob' });
        pyjacOMSService.newOrder($scope.formData);
       // pyjacOMSService.newOrder("Buy");
    };
};

module.exports = NewOrderController;
