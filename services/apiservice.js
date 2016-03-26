
angular
  .module('jeapordy')
  .service('apiService', function($http, $q) {

    var url = 'http://jservice.io/api/category?id=';
    var StupidAnswers = 'http://jservice.io/api/category?id=136';
    var ThreeLetterWords = 'http://jservice.io/api/category?id=105';
    var Sports = 'http://jservice.io/api/category?id=42';
    var Food = 'http://jservice.io/api/category?id=49';
    var MusicalInstruments = 'http://jservice.io/api/category?id=184';
    var Movies = 'http://jservice.io/api/category?id=309';
    // var cors = 'https://free-cors-server.herokuapp.com/any-request/';

    var categories = [StupidAnswers, ThreeLetterWords, Sports, Food, MusicalInstruments, Movies];

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
