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
        templateUrl: "jeopordy/jeopardyApp/templates/index.html",
        controller: 'HomeController'
      });
});

require ('./jeopardyApp');
