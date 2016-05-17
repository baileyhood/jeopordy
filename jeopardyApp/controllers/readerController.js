angular
    .module('jeapordy')
    .controller('ReaderController', function($scope, $rootScope) {
        $rootScope.score = 0;
        $scope.submitAnswer = function(userInput, actualAnswer, value) {

            if (userInput === actualAnswer) {
                $rootScope.score += value * 2;
                $scope.showMe();
            } else {
                $scope.showWrong();
                $rootScope.score -= value * 2;

            }
        };

        $scope.disable = function(id) {
          console.log('disabled clicky', id);
          $('button.' + id).prop('disabled', true);
           $('#' + id).modal('hide');
           $('button.' + id).css({
             "color": '#CFCFCF',
             "text-decoration": "line-through"
           });
        };
        $scope.showMe = function() {
            $scope.showcorrect = true;
        };

        $scope.showWrong = function() {
            $scope.showwrong = true;
            console.log("show wrong");
        };
    });
