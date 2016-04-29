angular
  .module('jeapordy')
  .directive('jeopardyReader', function(){

    return {
      templateUrl: '../templates/jeopardy-reader.html',
      controller: 'ReaderController',
      restrict: 'E',
      scope: {
        question: '=',
        show: '&'
      },
    };

  });
