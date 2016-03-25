var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeapordy',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "templates/index.html",
        controller: "HomeController"
      });
      // .when('/question',{
      //   templateUrl: "templates/question.html",
      //   controller: "QuestionController"
      // });
});

require('./controllers/homeController.js');
require('./controllers/questionController.js');
require('./directives/category-directive.js');
require('./services/apiservice.js');
