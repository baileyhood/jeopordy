angular
.module ('jeapordy')
.controller('HomeController', function ($scope, apiService){

  apiService.getAllCategories()
    .then(function(data){
      $scope.categories = data;
      // console.log(data);
      $scope.questions = getQuestions(data);
      window.glob = $scope.questions;
    });

  function getQuestions (data) {
    var dataArr = [];
    for (var i = 0; i < 6; i++) {
     dataArr.push(data[1].data.clues[Math.floor(Math.random()*data.length)]);
    }
    return dataArr;
  }

});//end of controller
