angular
  .module('jeapordy')
  .service('apiService', function($http, $q) {

    var url = 'http://jservice.io/api/category?id=';

    function getAllCategories() {
      var defer = $q.defer();
      var randomNumber = Math.floor(Math.random() * 1200);
      $http.get(url + randomNumber).then(function(data) {
        defer.resolve(data);
      });
      return defer.promise;
    }

    function sixCat() {
    return $q.all([getAllCategories(),getAllCategories(),getAllCategories(),getAllCategories(),getAllCategories(),getAllCategories()]);
  }

   return {
     getAllCategories : getAllCategories,
     sixCat: sixCat
   };
  });


// angular
//   .module('jeapordy')
//   .service('apiService', function($http, $q, $cacheFactory) {
//
//     var url = 'http://jservice.io/api/category?id=';
//     var cacheEngine = $cacheFactory ('jeapordy');
//
//     function getAllCategories() {
//       var defer = $q.defer();
//       var cache = cacheEngine.get('categories');
//         if(cache) {
//           defer.resolve(cache);
//           window.glob = cache;
//         }
//         else {
//         var randomNumber = Math.floor(Math.random() * 1200);
//         $http.get(url + randomNumber).then(function(data) {
//         cacheEngine.put('categories', data);
//         defer.resolve(data);
//         });
//       }
//       return defer.promise;
//
//     }
//
//     function sixCat() {
//       return $q.all([getAllCategories(),getAllCategories(),getAllCategories(),getAllCategories(),getAllCategories(),getAllCategories()]);
//     }
//
//    return {
//      getAllCategories : getAllCategories,
//      sixCat: sixCat
//    };
//   });
