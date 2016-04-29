var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('gametime',[
    'ngRoute',
    'jeapordy'
])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "main.html",
      });
});

require ('./jeopardyApp');
