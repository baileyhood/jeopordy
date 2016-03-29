angular
  .module('jeapordy')
  .directive('jeopardyReader', function(){

    return {
      templateUrl: '../../jeopardyApp/templates/jeopardy-reader.html',
      controller: 'ReaderController',
      restrict: 'E',
      scope: {
        question: '=',
        show: '&'
      },
    };

  });
