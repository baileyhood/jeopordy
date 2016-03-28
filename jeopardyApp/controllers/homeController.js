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
  $scope.player.score += points;
};

$scope.player = {
  score: 0
};

$scope.checkAnswer = function (answerInput) {

  if ($scope.rightAnswer.toLowerCase() === answerInput.toLowerCase()) {
    console.log("right answer!");
    $scope.addPoints($scope.rightValue);
    $scope.showMe();
  }
  else {
      console.log("wrong answer!");
      $scope.addPoints(-$scope.rightValue);
      $scope.showWrong();
  }
};

$scope.showMe = function(){
  $scope.show=true;
};

$scope.showWrong = function () {
  $scope.showwrong=true;
};

$scope.hide = function () {
  $scope.show=false;
  $scope.showwrong=false;
};

$scope.clear = function () {
  $scope.answerinput = '';
};

});//end of controller
