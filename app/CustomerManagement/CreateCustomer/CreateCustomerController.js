'use strict';

define(['app'], function (app) {

    var CreateCustomerController = function ($scope) {
      
    };

    CreateCustomerController.$inject = ['$scope'];

    app.register.controller('CreateCustomerController', CreateCustomerController);

});

/*

define(['app'], function(app)
{
    app.controller('CreateCustomerController',
    [
        '$scope',

        function($scope)
        {
            $scope.page =
            {
                heading: 'About Us'
            };
        }
    ]);
});
*/
