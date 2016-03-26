angular
.module ('jeapordy')
.controller('QuestionController', function ($scope, apiService){


  $scope.getAnswer = function (question) {
    window.glob = question.answer;
    $scope.rightAnswer = question.answer;
    console.log("right answer = ", $scope.rightAnswer);
  };
});
