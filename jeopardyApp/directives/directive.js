angular
  .module('jeapordy')
  .directive('jeopardyReader', function(){

    return {
      templateUrl: '../../jeopardyApp/templates/jeopardy-reader.html',
      controller: 'HomeController',
      restrict: 'E',
      scope: {
        question: '=',
        func: '&',
        answer: '=',
        getansw: '&',
        score: '&',
        value: '=',
        getvalue: '&'
      }
    };

  });
