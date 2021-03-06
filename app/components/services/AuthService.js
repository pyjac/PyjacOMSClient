'use strict';
                                       
var authService = function ($http, $q,$location, localStorageService, appEndpoint,$cookies) {
        var serviceBase = appEndpoint;
        var authServiceFactory = {};

        var _authentication = {
            isAuth: false,
            userName : ""
        };

        var _saveRegistration = function (registration) {

            _logOut();

            return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
                return response;
            });

        };

        var _login = function (loginData) {

            var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

            var deferred = $q.defer();

            $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

                localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });
                $cookies.BearerToken=response.access_token;
                _authentication.isAuth = true;
                _authentication.userName = loginData.userName;

                deferred.resolve(response);

            }).error(function (err, status) {
                _logOut();
                deferred.reject(err);
            });

            return deferred.promise;

        };

        var _logOut = function () {

            localStorageService.remove('authorizationData');

            _authentication.isAuth = false;
            _authentication.userName = "";
            $cookies.BearerToken = undefined;

        };

        var _fillAuthData = function () {
            
            var authData = localStorageService.get('authorizationData');
            if (authData)
            {
                 $cookies.BearerToken=authData.token;
                _authentication.isAuth = true;
                _authentication.userName = authData.userName;
            }
           

        }

        authServiceFactory.saveRegistration = _saveRegistration;
        authServiceFactory.login = _login;
        authServiceFactory.logOut = _logOut;
        authServiceFactory.fillAuthData = _fillAuthData;
        authServiceFactory.authentication = _authentication;

        return authServiceFactory;
    };
module.exports = authService;