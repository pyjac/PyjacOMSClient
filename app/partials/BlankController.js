'use strict';

define(['app'], function (app) {

    var BlankController = function ($scope) {
        //Grab customerId off of the route
        /*var customerId = ($routeParams.customerId) ? parseInt($routeParams.customerId) : 0;

        $scope.customer = {};
        $scope.ordersTotal = 0.00;

        init();

        function init() {
            if (customerId > 0) {
                dataService.getCustomer(customerId)
                .then(function (customer) {
                    $scope.customer = customer;
                }, function (error) {
                    $window.alert("Sorry, an error occurred: " + error.message);
                });
            }
        }*/
    };

    BlankController.$inject = ['$scope'];

    app.register.controller('BlankController', BlankController);

});
