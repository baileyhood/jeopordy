angular
.module ('jeapordy')
.controller('QuestionController', function ($scope, apiService){

  $scope.displayChosenQuestion = function (question) {
    window.glob = question.question;
    $scope.chosenQuestion = question.question;
    console.log("$scope = ", $scope.chosenQuestion);
  };
  $scope.getAnswer = function (question) {
    window.glob = question.answer;
    $scope.rightAnswer = question.answer;
    console.log("right answer = ", $scope.rightAnswer);
  };
});
