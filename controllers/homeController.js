angular
.module ('jeapordy')
.controller('HomeController', function ($scope, apiService, CacheEngine){

if (CacheEngine.get('currentQuestions')) {
  var cache = CacheEngine.get('currentQuestions');
  $scope.categories = cache;
}
else {
  apiService.sixCat()
    .then(function(data){
      CacheEngine.put('currentQuestions',data);
      $scope.categories = data;
    });
}

$scope.displayChosenQuestion = function (question) {
  console.log('question', question);
  $scope.chosenQuestion = question;
  console.log("$scope = ", $scope.chosenQuestion);
};

$scope.getAnswer = function (answer) {
  window.glob = answer;
  console.log(answer);
  $scope.rightAnswer = answer;
  console.log("right answer = ", $scope.rightAnswer);
};

// $scope.checkAnswer = function (answerInput) {
//   if ($scope.rightAnswer === answerInput) {
//     console.log ('right!');
//   }
//   console.log("working??");
// };

});//end of controller
