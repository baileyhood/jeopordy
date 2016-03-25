
angular
  .module('jeapordy')
  .service('apiService', function($http, $q) {
    var StupidAnswers = 'http://jservice.io/api/category?id=136';
    var ThreeLetterWords = 'http://jservice.io/api/category?id=105';
    var Sports = 'http://jservice.io/api/category?id=42';
    var Food = 'http://jservice.io/api/category?id=49';
    var MusicalInstruments = 'http://jservice.io/api/category?id=184';
    var Movies = 'http://jservice.io/api/category?id=309';
    // var cors = 'https://free-cors-server.herokuapp.com/any-request/';

    var categories = [StupidAnswers, ThreeLetterWords, Sports, Food, MusicalInstruments, Movies];

    function getAllCategories() {
    categoryLinks = [];
    categories.forEach(function(el){
      categoryLink = $http.get(el);
      categoryLinks.push(categoryLink);
    });
      return $q.all(categoryLinks);
    }

   return {
     getAllCategories : getAllCategories
   };
  });
