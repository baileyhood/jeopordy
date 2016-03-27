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

$scope.getValue = function (value) {
  $scope.rightValue = value;
  console.log("value, ", $scope.rightValue);
};

$scope.addPoints = function (points) {
  $scope.playerStats += points;
};

$scope.checkAnswer = function (answerInput) {

  if ($scope.rightAnswer.toLowerCase() === answerInput.toLowerCase()) {
    console.log("right answer!");
    $scope.playerStats = 0;
    $scope.addPoints($scope.rightValue);
    console.log('THIS ', $scope.categories);
  }
  else {
      $scope.addPoints(-$scope.rightValue);
  }
};

});//end of controller
