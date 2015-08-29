'use strict';
module.exports = function(app){
 
app.controller('DashboardController', ['$scope','$location','authService', require('./DashboardController')]);
}
