'use strict';
                                       
var authInterceptorService = function ($q, $location,$rootScope, localStorageService) {

    var authInterceptorServiceFactory = {};
    
    
    var _request = function (config) {

        config.headers = config.headers || {};
        
       
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            config.headers['Authorization'] = 'Bearer ' + authData.token;
        }
        /*console.log(config.headers);*/
        
       
         return config;
        /*return config;*/
    }
    var _response = function (response) {


            return response || $q.when(response);

        }

    var _responseError = function (rejection) {
        
        if (rejection.status === 401) {
            $location.path('/login');
        }
        return $q.reject(rejection);
    }

    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;
    authInterceptorServiceFactory.response = _response;

    return authInterceptorServiceFactory;
}
                                       
module.exports = authInterceptorService;
