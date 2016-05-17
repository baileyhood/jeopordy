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
        redirectTo: "/jeopardy",
      });
});

require ('./jeopardyApp');
