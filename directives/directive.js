angular
  .module('jeapordy')
  .directive('jeopardyReader', function(){

    return {
      templateUrl: '../templates/jeopardy-reader.html',
      controller: 'QuestionController',
      restrict: 'E',
      scope: {
        question: '='
      }
    };

  });
