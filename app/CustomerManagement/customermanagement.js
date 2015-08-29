


define(['jquery','app','components/services/dependencyResolverFor'], function($,app,dependencyResolverFor)
{
    app.controller('CustomerManagementController', ['$scope','$http','$route', function ($scope,$http,$route){

        $scope.loadRoutes = function(){
          var config;
          $http.get('CustomerManagement/CustomerManagementNav.html').then(function (navhtml) {
            $('#GlobalSuiteNav').html(navhtml.data);
          });

          $http.get('CustomerManagement/CustomerManagementRoutes.js').then(function (routes) {
/*
            config = routes.data;
            //console.log(config);

            if(config.routes !== undefined)
            {
                angular.forEach(config.routes, function(route, path)
                {
                    $route.routes[path] = {templateUrl:route.templateUrl, resolve:dependencyResolverFor(route.dependencies)};
                    //$routeProvider.when(path, {templateUrl:route.templateUrl, resolve:dependencyResolverFor(route.dependencies)});
                });
            }

            if(config.defaultRoutePaths !== undefined)
            {
              $route.routes[""] = {redirectTo:config.defaultRoutePaths};
                //$routeProvider.otherwise({redirectTo:config.defaultRoutePaths});
            }
            console.log($route.routes);
            */

          });



        };
    }]);
});
