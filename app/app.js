'use strict';

require('moment');
require('./components/bootstrap-fileinput');
require('./bower_components/bootstrap-daterangepicker/daterangepicker');
require('./components/datatables/jquery.dataTables');
require('./components/datatables/dataTables.bootstrap');
require('./bower_components/angular-loader/angular-loader.min');
require('./bower_components/signalr/jquery.signalR.min');
require('./bower_components/angular-signalr-hub/signalr-hub');
var toastr = require('./bower_components/toastr/toastr.min');
require('./components/bootstrap-datepicker');

var angular = require('angular');
require('angular-ui-router');
require('angular-animate');
require('angular-cookies');
require('angular-local-storage');
//http://localhost:8800/signalr/hubs




var app = angular.module('PyjacOMSApp', ['ngCookies', 'SignalR','LocalStorageModule', 'ui.router']);
app.config(['$urlRouterProvider',
    function($urlRouterProvider) {
        $urlRouterProvider.when("", "");
        $urlRouterProvider.when("/", "");
        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/Dashboard/index");
    }
]);

app.config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', '$window', '$rootScope',
    function(authService, $window, $rootScope) {
        authService.fillAuthData();
    }
]);
module.exports = app;

// one require statement per sub directory instead of one per file
require('./components/services')(app,toastr);
require('./Dashboard')(app);
require('./OrderManagement')(app);
