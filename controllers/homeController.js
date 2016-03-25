angular
.module ('jeapordy')
.controller('HomeController', function ($scope, apiService){

  apiService.getAllCategories()
    .then(function(data){
      window.glob = data[0].data;
      $scope.categories = data;
    });
});
