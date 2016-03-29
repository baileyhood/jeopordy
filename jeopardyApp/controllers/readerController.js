angular
  .module('jeapordy')
  .controller('ReaderController', function($scope, $rootScope) {

    $rootScope.player = {
      score: 0
    };


  $scope.submitAnswer = function (userInput, actualAnswer, value) {
    if (userInput === actualAnswer) {
        $rootScope.player.score += value * 2;
        console.log("right answer!", $scope.player.score );
      }
    else {
      $rootScope.player.score -= value * 2;
      console.log("wrong answer!", $scope.player.score);
    }
  };

  $scope.isDisabled = false;

  $scope.disableButton = function() {
        $scope.isDisabled = true;
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
  });
