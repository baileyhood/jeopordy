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
  $scope.chosenQuestion = question;
};

$scope.getAnswer = function (answer) {
  window.glob = answer;
  $scope.rightAnswer = answer;
};

$scope.checkAnswer = function (answerInput) {

  if ($scope.rightAnswer.toLowerCase() === answerInput.toLowerCase()) {
    console.log("right answer!");
    $scope.score = '';
    $scope.score = 3;
    console.log('THIS ', $scope.categories);
  }
  else {
    console.log("wrong!");
  }
};

});//end of controller
