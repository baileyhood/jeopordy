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

});//end of controller
