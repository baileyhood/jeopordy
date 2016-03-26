angular
.module ('jeapordy')
.controller('HomeController', function ($scope, apiService){

  apiService.sixCat()
    .then(function(data){
      $scope.categories = data;
      window.glob = $scope.categories;
    });


});//end of controller
