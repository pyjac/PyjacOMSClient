
define(['angular'], function () {
    'use strict';
    var routeResolver = function () {

        this.$get = function () {
            return this;
        };

        this.routeConfig = function () {
            var viewsDirectory = '/app/customersApp/views/',
                controllersDirectory = '/app/customersApp/controllers/',

            setBaseDirectories = function (viewsDir, controllersDir) {
                viewsDirectory = viewsDir;
                controllersDirectory = controllersDir;
            },

            getViewsDirectory = function () {
                return viewsDirectory;
            },

            getControllersDirectory = function () {
                return controllersDirectory;
            };

            return {
                setBaseDirectories: setBaseDirectories,
                getControllersDirectory: getControllersDirectory,
                getViewsDirectory: getViewsDirectory
            };
        }();

        this.route = function (routeConfig) {

            var resolve = function (baseName, path, secure) {
                if (!path) path = '';

                var routeDef = {};
                routeDef.templateUrl = routeConfig.getViewsDirectory() + path + baseName + '.html';
                routeDef.controller = baseName + 'Controller';
                routeDef.secure = (secure) ? secure : false;
                routeDef.resolve = {
                    load: ['$q', '$rootScope','$window','authService', function ($q, $rootScope,$window,authService) {
                        var dependencies = [routeConfig.getControllersDirectory() + path + baseName + 'Controller.js'];
                        //alert(secure);
                        if(secure === true){
                            return resolveDependenciesSecured($q,$rootScope,$window, dependencies,authService);
                        }else{
                            return resolveDependencies($q, $rootScope, dependencies);
                            
                        }  
                    }]
                };

                return routeDef;
            },

            resolveDependenciesSecured = function ($q, $rootScope,$window, dependencies,authService) {
                var defer = $q.defer();
                if (!authService.authentication.isAuth) {
                    $window.location.href = 'login/login.html';  
                    defer.resolve();
                    $rootScope.$apply();
                }
                require(dependencies, function () {
                    defer.resolve();
                    $rootScope.$apply()
                });
               return defer.promise;
                
            },
                resolveDependencies = function ($q, $rootScope, dependencies) {
                var defer = $q.defer();
                require(dependencies, function () {
                    defer.resolve();
                    $rootScope.$apply();
                });

                return defer.promise;
            };

            return {
                resolve: resolve
            }
        }(this.routeConfig);

    };

    var servicesApp = angular.module('routeResolverServices', []);

    //Must be a provider since it will be injected into module.config()
    servicesApp.provider('routeResolver', routeResolver);
});
