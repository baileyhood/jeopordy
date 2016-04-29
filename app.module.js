var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('gametime',[
    'ngRoute',
    'jeopardyApp'
])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "jeopardyApp/templates/index.html",
        controller: 'HomeController'
      });
});

require ('./jeopardyApp');
