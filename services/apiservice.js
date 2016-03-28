angular
  .module('jeapordy')
  .service('apiService', function($http, $q) {

    var url = 'http://jservice.io/api/category?id=';

    function getAllCategories() {
      var defer = $q.defer();
      var randomNumber = Math.floor(Math.random() * 1200);
      $http.get(url + randomNumber).then(function(data) {
        defer.resolve(data); //review this
      });
      return defer.promise; //review this too
    }

    function sixCat() {
    return $q.all([getAllCategories(),getAllCategories(),getAllCategories(),getAllCategories(),getAllCategories(),getAllCategories()]);
  }

   return {
     getAllCategories : getAllCategories,
     sixCat: sixCat
   };
  });
