var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeapordy',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/jeopardy',{
        templateUrl: "jeoooopardy/jeopardyApp/templates/index.html",
        controller: "HomeController"
      });
});

require('./controllers/homeController.js');
require('./controllers/readerController.js');
require('./directives/directive.js');
require('./services/apiservice.js');
require('./services/cacheEngine.service.js');
