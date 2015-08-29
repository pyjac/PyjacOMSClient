'use strict';
                       
/* 

,
            lol : function(ordersService) {
              console.log("HERE");
              ordersService.getOrders().success(function (orders) {
                      $scope.status = 'Retrieved orders!';
                      console.log(orders);
                  })
                  .error(function (error) {
                    console.log(error.message);
                      $scope.status = 'Error retrieving customers! ' + error.message;
                  });
            }

*/                
var routesSetup =function($stateProvider){
      
      $stateProvider
      .state('Dashboard', {
            abstract: true,
            url: '/Dashboard',
            templateUrl: 'Dashboard/Dashboard.html',
            controller: function($scope,auth,pyjacOMSService,authService){
                $scope.showE = auth;
                $scope.userName = authService.authentication.userName;
                $scope.logout = function(){
                        authService.logOut();
                        $location.path('/');
                };
            },
          resolve : {
              auth : function($q,$window,authService){
                if (!authService.authentication.isAuth) {
                    $window.location.href = 'login/login.html';      
                }
              return true;
            }
          },
            onEnter: function(){
              console.log("DashBoard");
            }
        
        })
        .state('Dashboard.index', {
            url: '/index',
            // loaded into ui-view of parent's template
            templateUrl: 'Dashboard/index.html',
            controller: function($scope){
               
            },
            onEnter: function(){
                
              console.log("enter Dashboard.index");
            }
        })
        .state('Dashboard.OrderManagement', {
            abstract: true,
            url: '^/OrderManagement',
            template: "<div ui-view></div>",
            controller: function($scope,securitiesService){
               var updateSecurities = function(){
                  $scope.securities = securitiesService.securities;
                };

              securitiesService.registerObserverCallback(updateSecurities);
               
            },
            resolve :
              {
                securities: ["securitiesService", function(securitiesService) {
                        console.log("Resolving dependency securities...");
                        return securitiesService.getSecurities();
                    }],
                orders: ["ordersService", function(ordersService) {
                        console.log("Resolving dependency orders...");
                        return ordersService.getOrders();
                    }]

                }
          
        
        })
        .state('Dashboard.OrderManagement.NewOrder', {
          
            url: '/NewOrder',
            // loaded into ui-view of parent's template
            templateUrl: 'OrderManagement/NewOrder/NewOrder.html',
            controller: 'NewOrderController'
      })
        .state('Dashboard.OrderManagement.MyOrders', {
          
            url: '/MyOrders',
            // loaded into ui-view of parent's template
            templateUrl: 'OrderManagement/MyOrders/MyOrders.html',
            controller: 'MyOrdersController'
      })
        

  };


module.exports = routesSetup;
