'use strict';
module.exports = function(app,toastr){

//App Defaults
app.value('appEndpointLocal', 'http://localhost:8800/');
app.value('appEndpoint', 'http://198.38.94.243:8800/');
app.value('appEndpointSignalrLocal', 'http://localhost:8800/signalr');
app.value('appEndpointSignalr', 'http://198.38.94.243:8800/signalr');
app.value('hub', 'GreetingHub');
app.value('toastr',toastr);
    
    
app.config(['$stateProvider',require('./routesSetup')]);
app.factory('authInterceptorService', ['$q', '$location', '$rootScope','localStorageService', require('./authInterceptorService')]);

app.factory('notifier',['toastr',require('./notifier')]);

app.factory('ordersService',['$http',require('./OrdersService')]);
app.factory('securitiesService',['$http',require('./SecuritiesService')]);
    
app.factory('authService', ['$http', '$q','$location', 'localStorageService','appEndpoint','$cookies',require('./AuthService') ]);
app.factory('pyjacOMSService',  ['$rootScope', 'Hub','appEndpointSignalr','localStorageService','notifier',require('./PyjacOMSService') ]);
};