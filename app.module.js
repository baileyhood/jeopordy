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
        templateUrl: "jeopardyApp/templates/index.html",
      });
});

require ('./jeopardyApp');
