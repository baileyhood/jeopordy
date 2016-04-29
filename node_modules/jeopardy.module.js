var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeopardyApp',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/jeopardy',{
        templateUrl: "jeopardyApp/templates/index.html",
        controller: "HomeController"
      });
});

require('./controllers/homeController.js');
require('./controllers/readerController.js');
require('./directives/directive.js');
require('./services/apiservice.js');
require('./services/cacheEngine.service.js');
